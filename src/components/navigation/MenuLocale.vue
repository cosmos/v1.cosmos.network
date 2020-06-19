<template lang="pug">
.menu-locale-container
  overlay-btn(@click.native='toggle(true)', icon='close', v-if='maximized')
  overlay-btn(@click.native='toggle(true)', icon='language', v-else='')
  menu.menu-locale(v-show='maximized')
    router-link(to='/resources/whitepaper' exact) English
    router-link(to='/resources/whitepaper/zh-CN') 简体中文
    router-link(to='/resources/whitepaper/pt') Portuguese
    router-link(to='/resources/whitepaper/ko') Korean
</template>

<script>
import OverlayBtn from "buttons/OverlayBtn"
export default {
  name: "menu-locale",
  components: {
    OverlayBtn
  },
  data: () => ({
    maximized: false
  }),
  methods: {
    toggle() {
      this.maximized = !this.maximized
    }
  },
  props: ["path", "langs"]
}
</script>

<style lang="stylus">
.menu-locale
  background var(--app-fg)
  box-shadow hsla(0,0,0,0.2) 0 2px 5px

  position fixed
  bottom 7rem
  right 0
  width 20rem
  z-index 100

  a
    display block
    line-height 3rem
    border-bottom 1px solid var(--bc)
    padding 0 1.25rem
    cursor pointer
    color var(--txt)
    user-select none

    &:hover
      color var(--link)
    &.router-link-active
      color var(--accent)
    &:last-of-type
      border-bottom none

@media screen and (min-width:1024px)
  .menu-locale-container
    bottom 0.5rem
</style>
