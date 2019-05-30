const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/tarney/projects/tech-choices/src/templates/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tarney/projects/tech-choices/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tarney/projects/tech-choices/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tarney/projects/tech-choices/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/tarney/projects/tech-choices/src/pages/page-2.js")))
}

