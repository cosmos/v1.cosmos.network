// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueGtm from "vue-gtm"
import VueLazyload from "vue-lazyload"
import VueMeta from "vue-meta"
import VueRouter from "vue-router"
import VueScrollTo from "vue-scrollto"
import { Tooltip } from "@cosmos-ui/vue"
import InstantSearch from "vue-instantsearch"
import VTooltip from "v-tooltip"

import App from "./App"
//import "./registerServiceWorker"

// sync store and router
import { sync } from "vuex-router-sync"
import store from "./store/index.js"
import router from "./router.js"
sync(store, router)

Vue.component("def", Tooltip)

Vue.use(VueGtm, {
  id: "GTM-TBX48R6",
  enabled: true,
  debug: true,
  loadScript: true,
  vueRouter: router
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  observer: true
})
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -48,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(InstantSearch)
Vue.use(VTooltip)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
