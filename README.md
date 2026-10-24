# portfolio-25bcon0213
Aarohi Pushkar — Portfolio

I'm a 2nd-year B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at JECRC University. I'm passionate about machine learning, problem-solving, and software development.

🌐 Live Portfolio

Visit My Portfolio- https://portfolio-25bcon0031.vercel.app/

🛠️ Skills & Technologies

Languages: Python, C, C++

Machine Learning: Scikit-learn, Linear Regression, Decision Trees, Model Evaluation

Data Analysis: NumPy, Pandas, Matplotlib, Exploratory Data Analysis (EDA)

Web Development: HTML, CSS, JavaScript, Flask

Databases: MySQL, SQLite

Tools: Git, GitHub, VS Code, Cursor, Vercel

🚀 Projects

## My Projects

### 1. Python Programs Collection
A collection of Python programs including Factorial, Fibonacci, and Structure-to-Dictionary conversion.

**Technologies:** Python, Git, GitHub

### 2. Messy Python Code Improvement
Improved a messy Python script using AI assistance to enhance readability and code structure.

**Technologies:** Python, AI Assistance

### 3. Bug Fixing Using Cursor AI
Identified and corrected bugs in a program using Cursor AI.

**Technologies:** Python, Cursor AI

### 4. Interactive Quiz Application
An interactive quiz application developed as part of Lecture 10.

**Technologies:** HTML, CSS, JavaScript

### 5. Book Reading List Application
A book reading list application developed as part of Lecture 11, with a deployed application link.

**Technologies:** HTML, CSS, JavaScript, GitHub, Vercel

## Portfolio chatbot

The portfolio includes a Gemini-powered chat assistant. The Vercel serverless
function in `api/chat.js` uses verified profile and project details as its
answering context; the Gemini API key is used only on the server.

### Configure and deploy

1. In the Vercel project settings, add an environment variable named
   `GEMINI_API_KEY` with your Gemini API key. Enable it for the environments
   where you want the assistant to run (Preview and Production, as applicable).
   Do not add the key to HTML, JavaScript, or a committed `.env` file.
2. Deploy the project to Vercel. Vercel maps `api/chat.js` to the
   same-origin `/api/chat` endpoint; the static site and endpoint must be
   deployed in the same Vercel project.
3. Open the deployed portfolio and send a question in the floating chat window.
   If you change the Vercel environment variable later, redeploy for the new
   value to take effect.

For local development, use a Vercel-compatible serverless dev environment and
provide `GEMINI_API_KEY` through its local environment/secrets configuration.
The static page alone does not provide the `/api/chat` function.
