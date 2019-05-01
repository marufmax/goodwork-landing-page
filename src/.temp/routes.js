export default [
  {
    name: "goodworkSponsors",
    path: "/goodwork/sponsors",
    component: () => import(/* webpackChunkName: "component--goodwork-sponsors" */ "/home/projects/js/landing-page-src/src/pages/goodwork/Sponsors.vue"),
    meta: { isStatic: true }
  },
  {
    name: "goodwork",
    path: "/goodwork",
    component: () => import(/* webpackChunkName: "component--goodwork" */ "/home/projects/js/landing-page-src/src/pages/goodwork/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "goodworkHowItWorks",
    path: "/goodwork/how-it-works",
    component: () => import(/* webpackChunkName: "component--goodwork-how-it-works" */ "/home/projects/js/landing-page-src/src/pages/goodwork/HowItWorks.vue"),
    meta: { isStatic: true }
  },
  {
    name: "goodworkContributors",
    path: "/goodwork/contributors",
    component: () => import(/* webpackChunkName: "component--goodwork-contributors" */ "/home/projects/js/landing-page-src/src/pages/goodwork/Contributors.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/home/projects/js/landing-page-src/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/projects/js/landing-page-src/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/projects/js/landing-page-src/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

