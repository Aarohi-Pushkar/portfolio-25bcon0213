(function () {
  const launcher = document.getElementById("chat-launcher");
  const chatWindow = document.getElementById("portfolio-chat-window");
  const closeButton = document.getElementById("chat-close");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const sendButton = document.getElementById("chat-send");
  const messages = document.getElementById("chat-messages");
  const errorMessage = document.getElementById("chat-error");
  const conversation = [];
  const maxHistory = 8;

  function setOpen(isOpen) {
    chatWindow.hidden = !isOpen;
    launcher.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) input.focus();
    else launcher.focus();
  }

  function addMessage(text, className) {
    const message = document.createElement("p");
    message.className = "chat-message " + className;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  function addLoadingIndicator() {
    const indicator = document.createElement("p");
    indicator.className = "chat-message assistant-message chat-typing";
    indicator.setAttribute("role", "status");
    indicator.setAttribute("aria-label", "Assistant is thinking");
    indicator.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(indicator);
    messages.scrollTop = messages.scrollHeight;
    return indicator;
  }

  function errorForStatus(status, serverMessage) {
    if (status === 429) {
      return "The assistant is receiving too many questions. Please try again shortly.";
    }
    if (status === 503) {
      return "The assistant is not configured yet. Please try again later.";
    }
    if (status >= 500) {
      return "The assistant is temporarily unavailable. Please try again in a moment.";
    }
    return serverMessage || "I couldn't send that question. Please try again.";
  }

  launcher.addEventListener("click", function () {
    setOpen(chatWindow.hidden);
  });

  closeButton.addEventListener("click", function () {
    setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !chatWindow.hidden) setOpen(false);
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const question = input.value.trim();
    if (!question || sendButton.disabled) return;

    errorMessage.hidden = true;
    errorMessage.textContent = "";
    addMessage(question, "user-message");
    conversation.push({ role: "user", text: question });
    input.value = "";
    input.disabled = true;
    sendButton.disabled = true;
    const loading = addLoadingIndicator();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation.slice(-maxHistory) }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok) {
        throw new Error(errorForStatus(response.status, result.error));
      }
      if (typeof result.reply !== "string" || !result.reply.trim()) {
        throw new Error("The assistant returned an empty reply. Please try again.");
      }

      conversation.push({ role: "model", text: result.reply });
      addMessage(result.reply, "assistant-message");
    } catch (error) {
      errorMessage.textContent =
        error instanceof TypeError
          ? "Couldn't reach the assistant. Check your connection and try again."
          : error.message || "Something went wrong. Please try again.";
      errorMessage.hidden = false;
      // Keep the user's question in the visible chat, but not in the next request
      // unless a reply is received.
      conversation.pop();
    } finally {
      loading.remove();
      input.disabled = false;
      sendButton.disabled = false;
      input.focus();
    }
  });
})();
