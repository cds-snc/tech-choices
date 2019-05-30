// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("/Users/tarney/projects/tech-choices/src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/tarney/projects/tech-choices/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/tarney/projects/tech-choices/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/tarney/projects/tech-choices/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/tarney/projects/tech-choices/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/tarney/projects/tech-choices/.cache/data.json")

