# Webpage audit

Review of the personal profile page in this folder (`index.html`, `style.css`, `script.js`).

## Requirements checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| HTML in `index.html` | Met | Document structure, content, and landmarks live in this file. |
| All styling in `style.css` | Met | Linked with `<link rel="stylesheet" href="style.css">`. |
| No inline `style` attributes | Met | No `style=""` on any element. Appearance is CSS-only. |
| Page title | Met | `<title>PLACEHOLDER Full Name — Personal Profile</title>` |
| One main heading | Met | A single `<h1>` in `<main>`. Section titles use `<h2>`. |
| About section | Met | `#about` with heading, biography, and contact email. |
| Skills as a list | Met | Unordered list (`<ul>` / `<li>`) under `#skills`. |
| Projects section with links | Met | Three projects, each with an `<a href="...">` and a short description. |
| Placeholders marked `PLACEHOLDER` | Met | Name, job title, location, bio, email, skills, project titles, descriptions, and URLs all include the word `PLACEHOLDER`. |
| JavaScript in `script.js` | Met | Theme toggle, year in the footer, and time-of-day greeting. |

## Structure and accessibility

- Uses `<!DOCTYPE html>`, `lang="en"`, charset, and a viewport meta tag.
- Skip link, header navigation, `main`, labelled sections, and a footer.
- Theme control is a `<button>` with `aria-pressed`, not a fake link.
- Focus styles are defined in CSS for links and the button.

## JavaScript behavior

- Remembers light/dark preference in `localStorage`.
- Falls back to `prefers-color-scheme` on first visit.
- Sets the copyright year from the current date.
- Prefixes the tagline with morning / afternoon / evening based on local time. The job title and location remain `PLACEHOLDER` text.

## Gaps to fill when replacing placeholders

1. Replace every `PLACEHOLDER` string in `index.html` and the greeting string in `script.js`.
2. Point project `href` values at real repositories or live demos.
3. Swap the example email (`PLACEHOLDER.email@example.com`) for a real address.
4. Optional: add a real favicon and social profile links; those are not in the first version.

## Visual review notes

- Layout is a single centered column with sticky navigation on wider screens.
- Sections sit on cards with a warm palette and a dark theme variant.
- On narrow viewports the header is not sticky and the theme button spans the full width.

Search the project for `PLACEHOLDER` to find every value that still needs your details.
