<template lang="pug">
  div
    .columns
      .columns__container
        .columns__container__item(v-for="item in value")
          .columns__container__item__heading
            .columns__container__item__heading__text.columns__container__item__heading__text__large
              template {{ item.title }}
          a(:href="item.url" target="_blank" rel="noopener")
            .columns__container__item__image(:style="{'background-image': `url(${item.img})`, 'background-color': `${item.color}`}")
</template>

<style lang="stylus" scoped>
.columns
  margin 0 auto 80px
  display grid
  max-width var(--grid-width)
  width 100%
  grid-template-columns repeat(var(--grid-column-count), 1fr)
  grid-auto-rows min-content
  &__container
    grid-area 1 / 2 / -1 / -2
    display grid
    grid-template-columns repeat(3, 1fr)
    &__item
      grid-column span 1
      display grid
      position relative
      grid-auto-rows minmax(min-content, 130px)
      &__icon
        width 100%
        max-width 200px
        box-sizing border-box
        padding-right 20px
      &__image
        min-height 210px
        background-position center
        background-repeat no-repeat
        margin-right 1.5rem
        border-radius 4px
        -webkit-transform perspective(1px) translateZ(0)
        transform perspective(1px) translateZ(0)
        box-shadow 0 0 1px rgba(0, 0, 0, 0)
        -webkit-transition-duration 0.3s
        transition-duration 0.3s
        -webkit-transition-property transform
        transition-property transform
        &:hover
          -webkit-transform scale(1.125)
          transform scale(1.125)
          z-index 1
          position relative
          filter brightness(110%)
      &__heading
        display flex
        align-items center
        &__text
          font-weight var(--fw-bold)
          display flex
          align-items flex-end
          height 70px
          position relative
          line-height 1.2
          text-transform uppercase
          font-weight var(--fw-semibold)
          &__large
            font-size 24px
            font-weight var(--fw-semibold)
            text-transform none
            &:after
              margin-top 0 !important
          &:after
            content: url('/images/logos/polygon.svg')
            position absolute
            top 1.7em
            left -0.8em
            -webkit-transform scale(1.2)
            transform scale(1.2)
      &__desc
        align-items flex-start
        display flex
        padding 2em 20px 1em 0
        &__title
          font-size 20px
          font-weight var(--fw-semibold)
          margin 1em 0
          margin-top 0
      &__cta
        color #1A71FF
        font-weight var(--fw-semibold)
        padding-bottom 1em
        text-decoration none
        border-bottom 2px solid #1A71FF

@media screen and (max-width: 900px)
  .columns
    &__container
      grid-template-columns repeat(2, 1fr)
      &__item
        &__heading
          &__text
            &::after
              display none

@media screen and (max-width: 600px)
  .columns, .hero
    display block
    padding 0 20px
    box-sizing border-box

  .columns
    &__container
      display block
      &__item
        &__heading
          &__text
            &::after
              display none
        &__image
          margin-right 0

@media screen and (max-width: 414px)
  .columns
    // padding 0
    &__container__item
      &__image
        min-height 180px
</style>

<script>
export default {
  name: "tm-base-grid",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>
