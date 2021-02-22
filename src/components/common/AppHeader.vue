<template lang="pug">
header.app-header
  .app-header__container
    router-link.app-header__item(:to="{ name: 'index' }" @click.native='close')
      img(src='~images/site/cosmos-wordmark.svg', alt='Cosmos Wordmark')
    .app-header__item(@click='toggleMenuApp', v-if='!desktop')
      i.material-icons(v-if='!activeMenuApp') menu
      i.material-icons(v-else='') close
    menu.menu-popup.menu-app(v-if='activeMenuApp || desktop')
      nav
        router-link.mobile-only(:to="{ name: 'index' }" @click.native="close")
          span Home
        router-link(:to="{ name: 'intro' }" @click.native="close")
          span What is Cosmos?
        router-link(:to="{ name: 'product-sdk' }" @click.native="close")
          span Build on Cosmos
        router-link(:to="{ name: 'community' }" @click.native="close")
          span Community
        router-link(:to="{ name: 'ecosystem-apps' }" @click.native="close")
          span Ecosystem
        router-link(:to="{ name: 'tools' }" @click.native="close")
          span Tools
        a(href="https://hub.cosmos.network" @click="close" target="_blank" rel="noreferrer noopener")
          span Cosmos Hub
</template>

<script>
import Headroom from "headroom.js"
import { mapGetters } from "vuex"
import disableScroll from "disable-scroll"
export default {
  name: "app-header",
  computed: {
    ...mapGetters(["links"])
  },
  data: () => ({
    activeMenuApp: false,
    desktop: false,
    headroom: null
  }),
  methods: {
    close() {
      this.activeMenuApp = false
      this.activeMenuFundraiser = false
      disableScroll.off()
    },
    goto(route) {
      this.close()
      this.$router.push(route)
    },
    toggleMenuApp() {
      this.activeMenuApp = !this.activeMenuApp
      if (this.activeMenuApp) disableScroll.on()
      else disableScroll.off()
    },
    toggleMenuFundraiser() {
      this.activeMenuFundraiser = !this.activeMenuFundraiser
      if (this.activeMenuFundraiser) disableScroll.on()
      else disableScroll.off()
    },
    watchWindowSize() {
      let w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      if (w >= 1152) {
        this.close()
        this.desktop = true
      } else {
        this.desktop = false
      }
    },
    disableHeadroom() {
      if (this.headroom) {
        this.headroom.destroy()
        this.headroom = null
      }
    },
    enableHeadroom() {
      if (!this.headroom) {
        this.headroom = new Headroom(this.$el)
        this.headroom.init()
      }
    }
  },
  mounted() {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
  },
  watch: {
    $route(to) {
      if (to.name === "index") {
        this.disableHeadroom()
      } else if (to.name === "ibc") {
        this.disableHeadroom()
      } else {
        this.enableHeadroom()
      }
    }
  }
}
</script>

<style lang="stylus">
.headroom
  will-change transform
  transition transform 200ms linear

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

.app-header
  position sticky
  top 0
  left 0
  z-index var(--z-app-header)
  width 100%
  background var(--app-nav)

  font-family var(--ff-brand)
  font-size 14px

.app-header__container
  margin 0 auto
  display flex
  flex-flow row wrap
  justify-content space-between

  .app-header__item
    height 4rem
    min-width 4rem
    display flex
    align-items center
    padding 0 var(--pad320)

    color var(--app-bg)
    cursor pointer

    i + .label
      margin-left 0.5rem
      user-select none

    i.material-icons
      font-size 1.75rem

    img
      display block
      height 1.25rem

  .menu-app
    nav
      a
        display flex
        align-items center
        cursor pointer

  .menu-popup
    z-index 101
    user-select none

@media screen and (max-width: 767px)
  .menu-popup nav
    padding-right var(--pad320)
    padding-left var(--pad320)

@media screen and (min-width: 768px) and (max-width: 1151px)
  .app-header__container
    padding 0 calc(var(--pad768) - var(--pad320))
  .menu-popup
      height 100vh
      position fixed
      top 4rem
      left 0
      bottom 0
      width 100vw

      background var(--app-bg)
      user-select none

      nav
        padding-right var(--pad768)
        padding-left var(--pad768)
        display flex
        flex-flow column
        padding-top 1.5rem
        padding-bottom 1.5rem
        > a
          padding 1.1566666rem 0
          line-height 1.5rem
          color var(--txt)
          display flex
          align-items center
          justify-content space-between
          user-select none
          border-bottom 3px solid var(--bc)
          &.disabled
            color var(--dim)
            cursor not-allowed
          &:hover
            color var(--hover)

@media screen and (max-width:1023px)
  .menu-popup
    height 100vh
    position fixed
    top 4rem
    left 0
    bottom 0
    width 100vw

    background var(--app-bg)
    user-select none

    nav
      display flex
      flex-flow column
      padding-top 1.5rem
      padding-bottom 1.5rem
      > a
        padding 0.75rem 0
        line-height 1.5rem
        color var(--txt)
        display flex
        align-items center
        justify-content space-between
        user-select none
        border-bottom 3px solid var(--bc)
        &:last-child
          border-bottom none
        &.disabled
          color var(--dim)
          cursor not-allowed
        &:hover
          color var(--hover)

@media screen and (min-width: 1152px)
  .app-header__container
    padding 0 calc(var(--pad768) - var(--pad320))
    nav
      .app-header__item
        height 4rem
        position relative
        z-index 10
        &:last-of-type
          justify-content flex-end

  .menu-popup.menu-app
    display flex
    padding 0 0.3rem

    nav
      display flex
      flex-flow row
      align-items center
      padding 0

      > a
        padding 0 1.25rem
        color var(--app-bg)
        height 4rem

        span
          border-bottom 2px solid transparent
          line-height 2rem

        i
          margin-left 0.5rem

        &.router-link-active
          cursor default
          user-select none
          border-color var(--secondary)
          span
            border-bottom-color var(--app-bg)

@media screen and (min-width: 1280px)
  .app-header__container
    padding 0 calc(var(--pad1280) - var(--pad320))
  .menu-popup.menu-app
    nav
      > a
        padding 0 1.75rem

@media screen and (min-width: 1920px)
  .app-header__container
    padding 0 calc(var(--pad1920) - var(--pad320))
</style>
