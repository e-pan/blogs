import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e992a94a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _20455140 = () => interopDefault(import('../pages/friend.vue' /* webpackChunkName: "pages/friend" */))
const _1d7cabb4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _24db5fc0 = () => interopDefault(import('../pages/tmkoo.vue' /* webpackChunkName: "pages/tmkoo" */))
const _51f50e6d = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _4f7a5e8e = () => interopDefault(import('../pages/article/list.vue' /* webpackChunkName: "pages/article/list" */))
const _3d1e86a3 = () => interopDefault(import('../pages/openai/chat.vue' /* webpackChunkName: "pages/openai/chat" */))
const _aa22f3c0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _eca49eb6 = () => interopDefault(import('../pages/article/_detail.vue' /* webpackChunkName: "pages/article/_detail" */))
const _dbd9ed06 = () => interopDefault(import('../pages/_tag.vue' /* webpackChunkName: "pages/_tag" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e992a94a,
    name: "about"
  }, {
    path: "/friend",
    component: _20455140,
    name: "friend"
  }, {
    path: "/test",
    component: _1d7cabb4,
    name: "test"
  }, {
    path: "/tmkoo",
    component: _24db5fc0,
    name: "tmkoo"
  }, {
    path: "/user",
    component: _51f50e6d,
    name: "user"
  }, {
    path: "/article/list",
    component: _4f7a5e8e,
    name: "article-list"
  }, {
    path: "/openai/chat",
    component: _3d1e86a3,
    name: "openai-chat"
  }, {
    path: "/",
    component: _aa22f3c0,
    name: "index"
  }, {
    path: "/article/:detail?",
    component: _eca49eb6,
    name: "article-detail"
  }, {
    path: "/:tag",
    component: _dbd9ed06,
    name: "tag"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
