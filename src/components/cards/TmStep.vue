<template lang="pug">
.tm-step
  .tm-step__num {{ num }}
  .tm-step__icon: img(:src="icon" alt="Image")
  .tm-step__text
    .tm-step__title.h3(v-if="$slots['title'] || title")
      template(v-if='title') {{ title }}
      slot(v-else name='title')
    .tm-step__subsubtitle(v-if="$slots['subtitle'] || subtitle")
      template(v-if='subtitle') {{ subtitle }}
      slot(v-else name='subtitle')
</template>
<script>
export default {
  name: "tm-step",
  computed: {
    icon() {
      return require(`../../assets/images/sdk/step-0${this.num}.svg`)
    }
  },
  props: ["title", "subtitle", "num"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-step
  position relative
  text-align left
  margin-bottom var(--pad320)

  &:last-child
    margin-bottom 0

.tm-step__num
  font-family var(--ff-brand)
  font-size 22.5rem
  line-height 1
  font-weight var(--fw-bold)
  position absolute
  top -3rem
  left -5rem
  color var(--app-fg)
  filter brightness(97%)
  z-index -1

.tm-step__icon
  margin-bottom 1rem

  img
    width 6rem

.tm-step__text
  margin-left 2rem

.tm-step__subtitle
  font-size 0.875rem

@media screen and (min-width: 768px)
  .tm-step
    margin-bottom var(--pad768)

  .tm-step__num
    font-size 25rem

  .tm-step__icon
    margin-left var(--pad320)

    img
      width 8.75rem

  .tm-step__text
    margin-left var(--pad768)

@media screen and (min-width: 1024px)
  .tm-steps
    display flex

  .tm-step
    flex 1
    margin 0

  .tm-step__num
    font-size 22.5rem

  .tm-step__icon
    margin-left 0

    img
      width 6rem

  .tm-step__text
    margin-left var(--pad320)
    max-width 15rem

@media screen and (min-width: 1280px)
  .tm-step__icon
    margin-left var(--pad320)

  .tm-step__text
    margin-left 3.5rem
</style>
