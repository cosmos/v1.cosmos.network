<template lang="pug">
  transition(name="fade" v-on:before-leave="beforeLeave" appear)
    .banner(v-if="show")
      a(:href="this.url" target='_blank' rel='noreferrer noopener').banner__content(v-html="this.md.render(this.content)")
      //- a.banner__dismiss(@click.prevent="close" href="#")
      //-   .banner__dismiss__icon
      //-     svg(width='16', height='16', viewBox='0 0 14 14', fill='none', xmlns='http://www.w3.org/2000/svg')
      //-       path(d='M1.66669 1.66669L12.3334 12.3334M12.3334 1.66669L1.66664 12.3334', stroke='var(--dark-txt)', stroke-width='1.5', stroke-linecap='round')
</template>

<script>
import * as Cookie from "tiny-cookie"
import MarkdownIt from "markdown-it"

export default {
  data() {
    return {
      md: new MarkdownIt({
        linkify: true,
        html: true
      }),
      show: null,
      url: "https://cosmos.network",
      content:
        "cosmos.network 2.0 has landed. <strong>Check it out</strong> &#8594;"
    }
  },
  mounted() {
    if (Cookie.get("cosmos-top-banner-hidden", false)) this.show = false
    else this.show = true
  },
  methods: {
    close() {
      this.show = false

      // reset every 2 days
      Cookie.set("cosmos-top-banner-hidden", true, { expires: "2D" })
    },
    beforeLeave(el) {
      el.style.marginTop = `-${el.offsetHeight}px`
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/
  strong
    color var(--white-100)
    font-weight 700

.banner
  display flex
  align-items stretch
  justify-content center
  position relative
  width 100%
  z-index 102

.banner__content
  font-size 0.875rem
  line-height 1.25rem
  letter-spacing 0.01em
  color var(--dark-txt)
  background linear-gradient(90deg, #CF36D2 0%, #F6743C 100%)
  text-align center
  display flex
  flex auto
  padding 0.75rem var(--pad320)
  align-items center
  justify-content center
  background-color #F8F9FC
  transition background-color 0.15s ease-out

  &:hover,
  &:focus
    background-color #F1F2F7
    opacity 0.96

.banner__dismiss
  position absolute
  top 0
  right 0
  bottom 0
  padding 0 1rem
  display flex
  align-items center

  &__icon
    padding 0.5rem
    border-radius 50%
    opacity 0.4
    transition opacity 0.15s ease-out, background-color 0.2s

    svg
      display block

  &:hover &__icon,
  &:focus &__icon
    opacity 0.7
    background-color rgba(0,0,0,0.1)

.fade-leave-active
  transition opacity 0.3s cubic-bezier(0.32, 0, 0.67, 0), margin 0.3s cubic-bezier(0.32, 0, 0.67, 0)

.fade-leave-to
  opacity 0

@media screen and (max-width: 414px)
  .banner__content
    text-align left
    justify-content flex-start
    padding-left 1rem
    padding-right 3rem

@media screen and (max-width: 320px)
  .banner__content
    font-size 0.8125rem
    line-height 1.125rem

  .banner__dismiss
    padding 0 0.5rem
</style>
