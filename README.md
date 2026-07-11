# Zuzanna-Dedyk.github.io

Personal academic website of Zuzanna Dedyk, built with Jekyll and hosted
on GitHub Pages.

Live site: https://zuzanna-dedyk.github.io

## How the content is organised

- `_pages/` — standalone pages (Home, Research, CV, Contact, etc.)
- `_projects/` — one Markdown file per research project
- `_publications/` — one Markdown file per publication
- `_talks/` — one Markdown file per talk
- `_workshops/` — one Markdown file per workshop
- `assets/` — CSS, JavaScript, images, icons
- `_layouts/` and `_includes/` — reusable page templates (rarely edited)

## Adding new content

To add a new publication, talk, project, or workshop, create a new
`.md` file in the matching folder above, following the pattern of an
existing file. The site rebuilds and updates automatically within a
minute or two of pushing to GitHub — no other steps required.

## Local preview (optional)

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000 in your browser.
