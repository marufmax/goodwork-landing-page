export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/src/js/landing-page-src/src/pages/Index.vue")
  },
  {
    path: "/goodwork/contributors",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--contributors-vue" */ "/src/js/landing-page-src/src/pages/goodwork/Contributors.vue")
  },
  {
    path: "/goodwork/features",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--features-vue" */ "/src/js/landing-page-src/src/pages/goodwork/Features.vue")
  },
  {
    path: "/goodwork",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--index-vue" */ "/src/js/landing-page-src/src/pages/goodwork/Index.vue")
  },
  {
    path: "/goodwork/how-it-works",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--how-it-works-vue" */ "/src/js/landing-page-src/src/pages/goodwork/HowItWorks.vue")
  },
  {
    path: "/goodwork/manifesto",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--manifesto-vue" */ "/src/js/landing-page-src/src/pages/goodwork/Manifesto.vue")
  },
  {
    path: "/goodwork/sponsors",
    component: () => import(/* webpackChunkName: "page--src--pages--goodwork--sponsors-vue" */ "/src/js/landing-page-src/src/pages/goodwork/Sponsors.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/landing-page-src/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/src/js/landing-page-src/node_modules/gridsome/app/pages/404.vue")
  }
]

