const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "ajax-bar", component: () => import("pages/QAjaxBarPage.vue") },
      { path: "avatar", component: () => import("pages/QAvatarPage.vue") },
      { path: "canvas", component: () => import("pages/HtmlCanvasPage.vue") },
      { path: "examples", component: () => import("pages/VueExamplesPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
