<template lang="pug">
.card-design
  .card-design__text
    .card-design__title {{ title }}
    .card-design__description(v-if="$slots['description']"): slot(name='description')
    .card-design__description(v-else) {{ description }}
  .card-design__visual(v-if="$slots['visual']"): slot(name='visual')
  .card-design__visual(v-else-if="visual"): img(:src="imageSrc" alt="Card image")
  .card-design__visual(v-else): img
</template>

<script>
export default {
  computed: {
    imageSrc() {
      return require(`../../assets/images/design/${this.visual}.png`)
    }
  },
  props: ["title", "description", "visual"]
}
</script>

<style lang="stylus">
@import '~variables'

.card-design
  margin 0 0 2rem

.card-design__text
  padding-top 1rem
  border-top 4 * px solid var(--bc-dim)

.card-design__title
  line-height 2rem
  font-size 1.5rem
  color var(--bright)
  margin-bottom 1rem
  font-family var(--ff-brand)
  font-weight var(--fw-semibold)

.card-design__description p:last-child
  margin-bottom 0

.card-design__title, .card-design__description p
  margin-bottom 1rem

.card-design__visual
  background var(--app-nav)
  margin-top var(--pad320)

.card-design__visual
  img
    display block
    width 100%

@media screen and (min-width: 768px)
  .card-design
    margin-bottom 3rem

@media screen and (min-width: 1024px)
  .card-design
    display flex

  .card-design__text
    flex 2
    padding-right var(--pad320)
    margin-right var(--pad320)

  .card-design__visual
    flex 3
    margin-top 0
</style>
