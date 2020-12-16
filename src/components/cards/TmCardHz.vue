<template lang="pug">
mixin image
  .tm-card-hz__image-outer(v-if="!newsletters")
    .tm-card-hz__play(v-if="type === 'video'"): i.material-icons play_circle_outline
    .tm-card-hz__image-inner(v-if="imgSrc" :style="imgBgStyle")
      img(v-if="lazy" v-lazy="imgSrc" alt="Image")
      img(v-else v-lazy="imgSrc" alt="Image")
    .tm-card-hz__image-inner.tm-card-hz__image-inner--icon(v-else-if="icon")
      img(v-if="iconType === 'svg'" v-lazy="iconSrc" rel="noreferrer noopener" alt="Image")
      i.material-icons(v-else) {{ icon }}
    .tm-card-hz__image-inner.tm-card-hz__image-inner--type(v-else)
      span {{ type }}

mixin text
  .tm-card-hz__text
    template(v-if="$slots['title'] || title")
      a.tm-card-hz__title(v-if="href" :href="href" target="_blank" rel="noreferrer noopener")
        slot(name="title") {{ title }}
      router-link.tm-card-hz__title(v-else :to="to")
        slot(name="title") {{ title }}
      .tm-card-hz__subtitle
        slot(name="subtitle") {{ subtitle }}
      .tm-card-hz__description
        slot(name="description") {{ description }}
      .tm-card-hz__author(v-if="$slots['author']"): slot(name="author") {{ author }}
      .tm-card-hz__date(v-if="$slots['date']"): slot(name="date") {{ date }}

.tm-card-hz(:class="cssClass" v-if="href"): .tm-card-hz__container
  a.tm-card-hz__visual(:href="href" target="_blank" rel="noreferrer noopener")
    +image
  +text
  tm-card-tags(:tags="tags")

.tm-card-hz(:class="cssClass" v-else): .tm-card-hz__container
  router-link.tm-card-hz__visual(:to="to")
    +image
  +text
  tm-card-tags(:tags="tags")
</template>

<script>
import TmCardTags from "./TmCardTags"
export default {
  name: "tm-card-hz",
  components: {
    TmCardTags
  },
  computed: {
    imgBgStyle() {
      if (this.imgBgSrc) {
        return {
          background: `url(${this.imgBgSrc}) center center no-repeat`,
          backgroundSize: "cover"
        }
      }
      return {}
    },
    cssClass() {
      let value = ""
      if (this.ended) {
        value += " tm-card-hz--ended"
      }
      if (this.flush) {
        value += " tm-card-hz--flush"
      }
      if (this.icon) {
        value += " tm-card-hz--icon"
      }
      if (this.landscape) {
        value += " tm-card-hz--landscape"
      }
      if (this.vertical) {
        value += " tm-card-hz--vertical"
      }
      if (this.lazy) {
        value += " tm-card-hz--lazy"
      }
      if (this.theme === "dark") {
        value += " tm-card-hz--dark"
      }
      return value
    },
    iconSrc() {
      return require(`../../assets/brands/color/${this.icon}.svg`)
    }
  },
  props: [
    "ended",
    "flush",
    "href",
    "icon",
    "icon-type",
    "img-src",
    "img-bg-src",
    "landscape",
    "vertical",
    "lazy",
    "title",
    "subtitle",
    "description",
    "author",
    "date",
    "tags",
    "to",
    "type",
    "theme",
    "newsletters"
  ]
}
</script>

<style lang="stylus">
.tm-card-hz
  margin-bottom var(--pad320)
  display flex

.tm-card-hz--ended
  opacity 0.75
  filter grayscale(75%)

.tm-card-hz__container
  flex 1
  display flex
  flex-flow column nowrap

.tm-card-hz__image-outer
  position relative

.tm-card-hz__play
  position absolute
  top 50%
  left 50%
  margin-left -1rem
  margin-top -1rem

  z-index 99
  width 2rem
  height 2rem
  display flex
  align-items center
  justify-content center

  i.material-icons
    font-size 8rem
    color hsla(0,0,100%,0.75)

:not(.tm-card-hz--icon) .tm-card-hz__image-outer
  display block
  margin-bottom 1rem
  border-radius .25rem

  // aspect-ratio-box-outer
  height 0
  padding-top 56.25%
  overflow hidden
  position relative

// aspect-ratio-box-inner
.tm-card-hz__image-inner
  position absolute
  top 0
  left 0
  bottom 0
  width 100%
  min-height 100%

  display flex
  align-items center
  justify-content center

  background transparent

  border-radius 0.25rem

  &.tm-card-hz__image-inner--icon
    background var(--bc)

  &.tm-card-hz__image-inner--type
    font-size 2rem
    font-family var(--ff-brand)
    font-weight var(--fw-regular)

  span
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    color var(--dark-txt)

  img
    border-radius 0.25rem
    max-width 66.7%
    max-height 66.7%

.tm-card-hz--flush
  .tm-card-hz__image-inner
    padding 0

  img
    flex 1
    max-width 100%
    max-height none

.tm-card-hz__text
  flex 1
  display flex
  flex-flow column nowrap

.tm-card-hz__title
.tm-card-hz__subtitle
.tm-card-hz__description
  font-size 0.875rem

.tm-card-hz__author
.tm-card-hz__date
  font-size 0.8125rem

.tm-card-hz__subtitle
  line-height var(--lh-paragraph)
  color var(--dim)
  margin-bottom 0.5rem

.tm-card-hz__description
  line-height 1.25rem
  letter-spacing var(--tracking-1-wide)
  color var(--dim)

.tm-card-hz__author
  margin-top 1.25rem
  font-weight 500
  line-height 1.125rem
  letter-spacing 0.01em
  color #000000

.tm-card-hz__date
  line-height 1.5
  color var(--dim)

.tm-card-hz__title
  font-weight var(--fw-bold)
  margin-bottom 0.5rem
  color var(--txt)
  letter-spacing var(--tracking-0)

.tm-card-hz--dark .tm-card-hz__title
  color var(--dark-txt)

.tm-card-hz--dark .tm-card-hz__subtitle
  color var(--dark-dim)

.tm-card-hz--dark .tm-card-hz__description
  color var(--dark-dim)

.tm-card-hz--dark .tm-card-hz__date
  color var(--white-51)

.tm-card-hz__tags
  margin-top 1rem

.tm-card-hz__tag
  display inline-block
  background var(--app-fg)
  font-size 0.875rem
  line-height 1.5rem
  padding 0 0.5rem
  border-radius 0.25rem

.tm-card-hz__tag + .tm-card-hz__tag
  margin-left 0.5rem

.tm-card-hz--landscape
  .tm-card-hz__container
    flex-flow row nowrap

  .tm-card-hz__visual
    width 6rem
    margin-right 1rem

  .tm-card-hz__image-inner--icon
    img
      height 2rem
      max-height initial
    i
      font-size 2rem

  .tm-card-hz__image-outer
    margin 0

  &:not(.tm-card-hz--flush) .tm-card-hz__image-inner
    padding 0.5rem
  .tm-card-hz__title
    flex none

@media screen and (min-width: 768px)
  .tm-cards-hz, .tm-cards-hz--horizontal-scrolling
    margin -1rem
    display flex
    flex-flow row wrap
    // &.tm-cards-hz--landscape
    //   display block

  .tm-cards-hz--horizontal-scrolling
    flex-flow unset
    overflow-x scroll
    overflow-y hidden
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
      display none

  .tm-card-hz
    flex 0 0 50%

  .tm-card-hz__container
    padding 1rem


  .tm-card-hz__title
    font-size 1rem

  .tm-card-hz--landscape
    margin 0

    .tm-card-hz__visual
      width 8rem

    .tm-card-hz__image-inner--icon
      i
        font-size 2.5rem
      img
        height 2.5rem

@media screen and (min-width: 1024px)
  .tm-cards-hz, .tm-cards-hz--horizontal-scrolling
  // .tm-cards-hz.tm-cards-hz--landscape
    display flex
    flex-flow row wrap

  .tm-card-hz
    flex 0 0 33.333%
    max-width 30vw

  .tm-card-hz__title
    font-size 1.125rem

  .tm-card-hz--landscape
    flex 0 0 50%
    max-width 50vw

@media screen and (min-width: 1280px)
  .tm-card-hz--landscape
    .tm-card-hz__visual
      width 10rem
    .tm-card-hz__image-inner--icon
      i
        font-size 3rem
      img
        height 3rem
  .tm-card-hz.tm-card-hz--landscape.tm-card-hz--vertical
    .tm-card-hz__visual
      width 14rem

@media screen and (min-width: 1680px)
  .tm-card-hz
    flex 0 0 25%

  .tm-card-hz--landscape
    flex 0 0 33.333%

@media screen and (max-width: 400px)
  .tm-card-hz--vertical .tm-card-hz__container
    flex-flow column nowrap

  .tm-card-hz--vertical .tm-card-hz__visual
    width unset
    margin-right unset

  .tm-card-hz--vertical .tm-card-hz__image-outer
    margin-bottom 1rem
</style>
