<template lang="pug">
a.card-logo(:href="media.url" target="_blank" rel="noreferrer noopener" v-if="imgSrc")
  .card-logo__image: img(v-lazy="imgSrc" alt="Card image")
</template>

<script>
export default {
  name: "card-logo",
  computed: {
    imgSrc() {
      if (this.media.logo && this.media.logo.length > 0) {
        return this.media.logo[0].url
      }
      return ""
    }
  },
  props: ["media"]
}
</script>

<style lang="stylus">
.cards-logo
  display flex
  flex-flow row wrap
  justify-content center
  margin -0.75rem 0

.card-logo
  padding 0.75rem

.card-logo__image
  img
    display block
    height 1.5rem
    filter grayscale(100%)
    opacity 0.5
    transition 150ms ease all

  &:hover img
    opacity 1
    filter none

@media screen and (min-width: 375px)
  .cards-logo
    margin -0.75rem

@media screen and (min-width: 768px)
  .cards-logo
    margin -1rem

  .card-logo
    padding 1rem

  .card-logo__image img
    height 2rem
</style>
