---
path: "/htm"
title: HTM
tags: ["htm", "template literals", "components"]
purpose: "page"
image: "../images/htm.png"
---

## HTM (Hyperscript Tagged Markup)

[Hyperscript Tagged Markup](https://github.com/developit/htm): JSX alternative using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). HTM allows us to write components which are compiled on the server and served as HTML to the browser.

<div class="product">

### Pros

- JSX-y syntax using JavaScript [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) is easy to write and is natively supported by NodeJS
- Component syntax is a clean way to write self-contained slices of interface
- **No build step**. At all. (None.)
- Fun as shit

### Cons

- Niche templating language, not well documented
- Adding global variables largely means [prop-drilling](https://kentcdodds.com/blog/prop-drilling), a known anti-pattern
- In-page JavaScript (for state changes, etc) means the bad old days of a big `script.js` file

<div>
