
## Purpose

To help document when / why to make technology choices for your product.

- Overall things to consider:
- Learning curve for others to pick up
- Ease of use
- Flexibility
- Security
- Speed

## Install

```bash
yarn install
yarn run start
```

- Open http://localhost:8000
- Note locally the search box will not be available unless you have the Algolia .env variables setup.

# Package Bumps

- Note: If you bump / update the .lock file ensure you also bump the version in package.json.

## Adding a product

Create a new "product" Markdown file in this directory https://github.com/cds-snc/tech-choices/tree/master/src/pages


## File format

```
---
path: "/slug-for-product"
title: Product Name
tags: ["project name", "database" ,"other tags..."]
purpose: "page"
image: "../images/product-image.png"
---

Summary ...

<div class="product">

### Pros
- your text here

- your text here

### Cons
- your text here

- your text here
<div>

```
