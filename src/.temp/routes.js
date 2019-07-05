export default [
  {
    path: "/contributors",
    component: () => import(/* webpackChunkName: "page--src--pages--contributors-vue" */ "/src/js/landing-page-src/src/pages/Contributors.vue")
  },
  {
    path: "/how-it-works",
    component: () => import(/* webpackChunkName: "page--src--pages--how-it-works-vue" */ "/src/js/landing-page-src/src/pages/HowItWorks.vue")
  },
  {
    path: "/manifesto",
    component: () => import(/* webpackChunkName: "page--src--pages--manifesto-vue" */ "/src/js/landing-page-src/src/pages/Manifesto.vue")
  },
  {
    path: "/features",
    component: () => import(/* webpackChunkName: "page--src--pages--features-vue" */ "/src/js/landing-page-src/src/pages/Features.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/src/js/landing-page-src/src/pages/Index.vue"),
    meta: {
      data: [1,"41c7eaf2"]
    }
  },
  {
    path: "/sponsors",
    component: () => import(/* webpackChunkName: "page--src--pages--sponsors-vue" */ "/src/js/landing-page-src/src/pages/Sponsors.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/landing-page-src/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/docs/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--docs-vue" */ "/src/js/landing-page-src/src/templates/Docs.vue"),
    meta: {
      data: [1,"d80eac44"]
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/landing-page-src/node_modules/gridsome/app/pages/404.vue")
  }
]

