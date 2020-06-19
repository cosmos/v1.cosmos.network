<template lang="pug">
.toc-page
  slot(name='locale')
  slot(name='nav')
  tm-header
    div(slot="title") {{ pageTitle }}
  toc-padding(v-bind:class="{ 'toc-visible': toc[tocPage].tocVisible }")
    tm-content: slot
</template>

<script>
import { mapGetters } from "vuex"
import TocPadding from "navigation/TocPadding"
import TmHeader from "common/TmHeader"
import TmContent from "common/TmContent"
export default {
  name: "toc-page",
  computed: { ...mapGetters(["toc"]) },
  components: {
    TmHeader,
    TmContent,
    TocPadding
  },
  data: () => ({
    minimalToc: {}
  }),
  methods: {
    toggleToc(event) {
      let href = event.target.href
      if (href) {
        let hash = href.split("#")[1]
        this.$scrollTo("#" + hash, 300, { offset: -64 - 32 })
      }
      this.minimalToc.classList.toggle("minimal-toc--active")
    }
  },
  mounted() {
    this.minimalToc = this.$el.querySelector(".minimal-toc")
    this.minimalToc.addEventListener("click", event => this.toggleToc(event))
  },
  props: ["toc-page", "page-title"]
}
</script>

<style lang="stylus">

.minimal-toc, .minimal-toc:before, .mininal-toc:after
  transition 300ms ease-in-out all

.minimal-toc:before
.minimal-toc:after
  position absolute
  cursor pointer
  width 1rem

.minimal-toc:before
  content ''
  display block
  height 100%

  right 0
  top 0
  background var(--app-fg)
  border-right 1px solid var(--bc)

.minimal-toc:after
  box-sizing border-box

  background var(--link)
  border 1px solid var(--bc)
  border-left none

  height 3rem
  width 1.5rem

  content 'arrow_forward'
  font-family 'Material Icons'
  color var(--dark-txt)
  font-size 1.125rem
  line-height 1
  text-align center

  display flex
  align-items center
  justify-content center

  top 50%
  right -0.5rem
  margin-top -1.5rem
  border-radius 0 0.25rem 0.25rem 0

.minimal-toc
  position fixed
  top 0
  left -19rem

  background var(--app-bg)
  max-width 20rem
  z-index var(--z-app-menu)

  font-size 0.75rem

  &:hover:after
    background var(--hover)
  &.minimal-toc--active
    left 0
    z-index var(--z-toc)
    &:after
      content 'arrow_back'
      background var(--txt)

  > ul
    overflow-y scroll
    padding var(--pad320)
    width 100%
    height 100vh

    margin 0
    > li > a
      font-weight var(--fw-bold)
      color var(--txt)

  ul
    li
      list-style none
      margin-bottom 0
      a
        display block
        padding 0.375rem 0
        line-height var(--lh-heading)
        &:hover
          color var(--bright)
          text-decoration none
          background var(--app-fg)
    ul
      padding 0
      a
        padding-left 1.5rem
        color var(--txt)
      ul
        a
          padding-left 3rem
          color var(--dim)

@media screen and (min-width:768px)
  .minimal-toc:before
    width 1rem + 0.5rem

  .minimal-toc:after
    width 1.5rem + 0.5rem + 0.25rem
    font-size 1.5rem
    text-align center
    right -0.5rem - 0.25rem


  .minimal-toc
    max-width 20rem + 0.5rem
</style>
