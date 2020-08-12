<template lang="pug">
  .section-banner
    .content
      .text
        .text__suptitle Online workshops
        .text__title Code with Us
        .text__p Live, interactive workshops, designed to educate and provide real-time practice to developers in the Cosmos community.
      .btn
        tm-btn(value="Get involved" size="lg" color="primary" type="link" :to="{ name: 'series-code-with-us' }"
        icon="arrow_forward" icon-pos="right")
</template>

<script>
import TmBtn from "common/TmBtn"

export default {
  components: {
    TmBtn
  }
}
</script>

<style lang="stylus" scoped>
.section-banner
  background-image url('~assets/images/home/section-codewithus.jpg')
  background-size cover
  background-repeat no-repeat
  background-position center center
  border-radius 0.25rem
  .content
    padding 4rem
    display grid
    grid-template-columns 80% 20%
    grid-template-rows 1fr
    .text
      max-width 39.6875rem
      .text__suptitle
        color var(--secondary)
        text-transform uppercase
        font-weight var(--fw-bold)
        font-size 1rem
        letter-spacing var(--tracking-2-wide)
        line-height 1.25rem
      .text__title
        margin-top 0.5rem
        font-weight var(--fw-semibold)
        font-size 2rem
        line-height 2.5rem
        color #FFFFFF
      .text__p
        margin-top 1rem
        font-size 1.125rem
        line-height 1.6875rem
        color #FFFFFF
    .btn
      display flex
      align-items center
      justify-content flex-end

@media screen and (max-width: 1200px)
  .section-banner .content
    grid-template-columns auto
  .section-banner .content .btn
    justify-content flex-start
    margin-top 2rem

@media screen and (max-width: 767px)
  .section-banner
    .content
      padding 2rem
</style>
