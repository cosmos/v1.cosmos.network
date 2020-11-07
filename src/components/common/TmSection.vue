<template lang="pug">
mixin tm-section-header
  .tm-section__header(v-if="$slots['title'] || title")
    .tm-section__suptitle(v-if="$slots['suptitle'] || suptitle")
      template(v-if='suptitle') {{ suptitle }}
      slot(v-else name='suptitle')
    .tm-section__project-title(v-if="$slots['project-title'] || projectTitle")
      template(v-if='projectTitle') {{ projectTitle }}
      slot(v-else name='project-title')
    .tm-section__goz-wordmark(v-if="$slots['goz-wordmark']")
      slot(v-if name='goz-wordmark')
    .tm-section__stargate-title(v-if="$slots['stargate-title']")
      slot(v-if name='stargate-title')
    .tm-section__title(v-if="$slots['title'] || title")
      template(v-if='title') {{ title }}
      slot(v-else name='title')
    .tm-section__subtitle(v-if="$slots['subtitle'] || subtitle")
      template(v-if='subtitle') {{ subtitle }}
      slot(v-else name='subtitle')

.tm-section(:class="cssClass" v-if="['split', 'hero'].includes(layout)")
  .tm-section__bg
  .tm-section__overlay(v-if="overlay")
  .tm-section__container
    .tm-section__text
      +tm-section-header
      .tm-section__main: slot
    .tm-section__image: slot(name='image')
    .tm-section__full-width: slot(name='full-width')

.tm-section(:class="cssClass" v-else-if="layout === 'center'")
  .tm-section__container
    .tm-section__text
      +tm-section-header
      .tm-section__main: slot
    .tm-section__image: slot(name='image')

.tm-section(:class="cssClass" v-else)
  .tm-section__container
    +tm-section-header
    .tm-section__main: slot
</template>

<script>
export default {
  name: "tm-section",
  computed: {
    cssClass() {
      let value = ""
      if (this.theme === "dark") {
        value += " tm-section--dark"
      }
      if (this.theme === "stars") {
        value += " tm-section--stars"
      }
      if (this.layout === "hero") {
        value += " tm-section--hero tm-section--split"
      }
      if (this.layout === "split") {
        value += " tm-section--split"
      }
      if (this.layout === "center") {
        value += " tm-section--center"
      }
      return value
    }
  },
  props: [
    "bg",
    "suptitle",
    "title",
    "subtitle",
    "theme",
    "layout",
    "overlay",
    "project-title",
    "goz-wordmark",
    "stargate-title"
  ]
}
</script>

<style lang="stylus">
@import '~variables'

.tm-field
  background var(--app-bg)
  color var(--bright)
  border-radius 0.25rem

.tm-btn
  text-transform uppercase
  .tm-btn__container
    font-family var(--ff-brand)
    border-color var(--link)
    padding 0 1.5rem
    height 2.667rem
    &.tm-btn--primary
      border-color var(--link)

  .tm-btn__container.tm-btn--size-lg
    height 4rem
  .tm-btn__value
    color var(--link)
  .tm-btn__icon
    font-size 1.25rem
    color var(--link)

.tm-btn__container.tm-btn--primary i.material-icons
  color var(--dark-txt)

.tm-section
  width 100%
  margin 0 auto
  position relative
  overflow hidden
  &__container
  background var(--app-fg)
  &:nth-of-type(2n -1)
    background transparent
  &.tm-section--dark, &.tm-section--stars
    background var(--dark-bg)
    color var(--dark-txt)
  &.tm-section--center
    text-align center

.tm-section--hero
  min-height 90vh

  .tm-section__title
    font-weight var(--fw-light)

  .tm-section__container
    position relative
    z-index var(--z-list-item)

  .tm-section__bg
  .tm-section__overlay
    z-index var(--z-zero)
    position absolute
    top 0
    left 0
    right 0
    bottom 0

  .tm-section__overlay
    background hsla(230, 40%, 15%, 0.8)
    mix-blend-mode hard-light

.tm-section__col
  padding 3rem 0

  .tm-section__title
    margin-bottom 1.5rem
    font-size 1.5em

  .tm-section__main
    padding 0

  &:last-child
    padding-bottom 0

.tm-section__cols + .tm-section__main
  margin-top 3rem

.tm-section__icon
  margin 0 auto 1.5rem
  display flex
  align-items center
  justify-content center
  i
    font-size 5rem
    color var(--primary)

    display flex
    align-items center
    justify-content center
    width 6.25rem
    height 6.25rem
  img
    display block
    width 6.25rem
    margin 0 auto

.tm-section__image:not(:empty)
  margin-top 3rem

.tm-section__image
  display flex
  align-items center
  justify-content center
  img
    display block
    width 100%
    max-width 512px

.tm-section__full-width
  display flex
  align-items center
  justify-content center
  img
    display block
    width 100%
    max-width 512px

.tm-section__bg
  position absolute
  top 0
  left 0
  z-index -1
  img
    width 50vw

.tm-section--cards .tm-section__main
  padding-left 0
  padding-right 0

.tm-section--cover
  position relative
  padding var(--pad320) 0
  &.tm-section--cover-faded:before
    content ''
    display block
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    width 100%
    height 100%
    background hsla(230, 40%, 15%, 0.5)
    mix-blend-mode hard-light

  .tm-section__title
  .tm-section__suptitle
  .tm-section__subtitle
    position relative
    z-index 5

  .tm-section__title
    color var(--dark-txt)
    text-shadow hsla(0,0,0,0.5) 0 0.25rem 0.5rem

  .tm-section__suptitle
    background var(--dark-txt)
    color var(--dark-txt) !important
    line-height 3rem
    font-size 1.25rem
    padding 0 0.75rem
    box-shadow hsla(0,0,0,0.25) 0 0.5rem 1rem

  img
    height 100%
    width 100%
    object-fit cover

.tm-section__container
  padding var(--pad320) 0

.tm-section__header
.tm-section__main
.tm-section__cols
.tm-section__image
  padding-left var(--pad320)
  padding-right var(--pad320)

.tm-section__full-width
  padding-left 0
  padding-right 0

.tm-section__main:not(:first-child)
  margin-top 2rem

.tm-section__header + tm-section__main:empty
  margin-top 0

.tm-section__main
  p, ul, ol
    max-width 40em
  p:not(:last-child)
    margin-bottom var(--pad320)
  .tm-btn + .tm-btn
    margin 1rem auto
  &:empty
    display none

.tm-section__title
.tm-section__suptitle
  font-family var(--ff-brand)

.tm-section__title
  font-weight var(--fw-semibold)

.tm-section__suptitle
  font-family var(--ff-brand)
  font-weight var(--fw-semibold)

.tm-section__title + p
  margin-top 0.75rem
  color var(--dim)

.tm-section__divider
  margin var(--pad320) 0 !important

.tm-section__divider + p
  margin-top calc(-0.75 * var(--pad320))

.tm-section__project-title
  display flex
  font-family var(--ff-brand)
  align-items center
  font-size 1.125rem
  font-weight var(--fw-semibold)
  line-height 1.25rem
  letter-spacing 0.25rem
  text-transform uppercase
  margin-bottom 2rem
  &:before
    content ''
    background-image url('~assets/images/site/cosmos-wordmark-black.svg')
    background-size 111px 20px
    width 111px
    height 20px
    display inline-block
    margin-right 0.75rem

.tm-section__goz-wordmark
  margin-top 2rem
  margin-bottom 1rem
  &:before
    content ''
    background-image url('~assets/images/site/goz-wordmark.svg')
    background-size contain
    background-repeat no-repeat
    width 100%
    height 4.25rem
    display inline-block

.tm-section__stargate-title
  text-transform uppercase
  font-weight var(--fw-semibold)
  font-size 1.1875rem
  line-height 1.75rem
  letter-spacing 0.2em
  color #FFFFFF
  margin-bottom 2rem

.tm-section--dark, .tm-section--stars
  .tm-btn
    .tm-btn__container:not(.tm-btn--primary)
      background var(--dark-bg)
      border-color var(--dark-txt)
    .tm-btn__value
    .tm-btn__icon
      color var(--dark-txt)

  .tm-section__project-title:before
    background-image url('~assets/images/site/cosmos-wordmark.svg')

.tm-section--stars
  background url('~images/site/bg-tile-stars.svg'), var(--dark-bg) !important
  background-size 256px 256px !important

.tm-section__suptitle
  color var(--secondary)
  text-transform uppercase
  font-weight var(--fw-bold)
  font-size 1rem
  letter-spacing var(--tracking-2-wide)
  line-height 1.25rem

.tm-section__title
  font-size 2rem
  line-height var(--lh-heading)
  strong
    font-weight var(--fw-semibold)

.tm-section__suptitle + .tm-section__title
.tm-section__title + .tm-section__subtitle
  margin-top 1rem

.tm-section.tm-section--stars
  .tm-section__text
    z-index 1
    position relative

@media screen and (max-width: 375px)
  .tm-section__image
    display none

  .tm-btn
    display flex
    justify-content center
    align-items center

@media screen and (min-width: 500px)
  .tm-section__main
    .tm-btn + .tm-btn
      margin-left 1rem

@media screen and (min-width: 768px)
  .tm-section__header
  .tm-section__main
  .tm-section__cols
    padding-left var(--pad768)
    padding-right var(--pad768)

  .tm-section__main
    .tm-btn + .tm-btn
      margin-top 0
      margin-left 1rem
  .tm-section__container
    padding var(--pad768) 0
    margin 0 auto

  .tm-section--hero .tm-section__title
    font-size 2.5rem
    letter-spacing var(--tracking-1-tight)

  .tm-section--hero .tm-section__image
    img
      max-width 450px

@media screen and (min-width: 1024px)
  .tm-section__col .tm-section__title
  .tm-section__icon
    margin-bottom 2rem

  .tm-cards
    display flex
    flex-flow row wrap
    > *
      flex 0 0 50%

  .tm-section__cols
    display flex

  .tm-section__col
    flex 1
    padding-left var(--pad320)
    padding-right var(--pad320)
    &:first-child
      padding-left 0
    &:last-child
      padding-right 0

  .tm-section__header
  .tm-section__main
  .tm-section__cols
    padding 0 var(--pad768)

  .tm-section--split
    &:nth-of-type(2n) .tm-section__container
      flex-flow row-reverse
    .tm-section__container
      padding 0 var(--pad768)
      display flex
    .tm-section__text
      flex 1
      margin 6.67rem 0
      display flex
      flex-flow column nowrap
      justify-content center
    .tm-section__image
      flex 1
      margin 0
      display flex
      align-items center
      &.phone, &.tablet, &.desktop
        display none
    // clear padding
    .tm-section__header
    .tm-section__main
      padding-top 0
      padding-left 0
      padding-right 0

  .tm-section--hero
    display flex
    .tm-section__container
      flex 1
      align-items center
      justify-content center
    .tm-section__text
      flex 2
    .tm-section__image
      flex 1
      padding-right 0

@media screen and (min-width: 1152px)
  .tm-section--hero
    .tm-section__header
      margin-bottom 1.5rem
    .tm-section__subtitle
      font-size 1.5vw
    .tm-section__title
      font-size 3vw
    .tm-section__text
      flex 3
    .tm-section__image
      flex 2

@media screen and (min-width: 1280px)
  .tm-section__header
  .tm-section__main
  .tm-section__cols
  .tm-section--split .tm-section__container
    padding 0 var(--pad1280)

@media screen and (min-width: 1920px)
  .tm-section__header
  .tm-section__main
  .tm-section__cols
  .tm-section--split .tm-section__container
    padding 0 var(--pad1920)

  .tm-section--hero
    .tm-section__title
      font-size 3rem
    .tm-section__text
      flex 1
    .tm-section__image
      flex 1

@media screen and (max-width: 600px)
  .tm-section__goz-wordmark
    margin-bottom 0rem
</style>
