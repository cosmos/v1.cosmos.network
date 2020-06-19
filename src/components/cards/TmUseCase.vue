<template lang="pug">
.tm-use-case
  .tm-use-case__text: .tm-use-case__container
    .tm-use-case__title(v-if="$slots['title'] || title")
      template(v-if='title') {{ title }}
      slot(v-else name='title')
    .tm-use-case__subtitle(v-if="$slots['subtitle'] || subtitle")
      template(v-if='subtitle') {{ subtitle }}
      slot(v-else name='subtitle')
  .tm-use-case__visual.tm-use-case__visual--image.jarallax(v-if="$slots['image']")
    slot(name='image')
  .tm-use-case__visual.tm-use-case__visual--icon(v-else): .tm-use-case__container
    i.material-icons {{ icon }}
</template>

<script>
export default {
  name: "tm-use-case",
  props: ["title", "subtitle", "icon", "image"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-use-case
  display flex
  flex-flow column nowrap

.tm-use-case__container
  padding var(--pad320)

.tm-use-case__text
.tm-use-case__visual
  flex 1

.tm-use-case__text
  color var(--dark-txt)
  background var(--dark-fg)

.tm-use-case__title
  font-family var(--ff-brand)
  font-size 2rem
  font-weight var(--fw-semibold)
  margin-bottom 1rem

.tm-use-case__subtitle
  max-width 40rem

.tm-use-case__visual--image
  min-height 20vh
  img
    display block
    height 100%
    width 100%
    object-fit cover

.tm-use-case__visual--icon
  background hsl(230, 40%, 20%)
  display flex
  align-items center
  justify-content center
  i
    font-size 3rem
    color var(--primary)

@media screen and (min-width: 768px)
  .tm-use-case__container
    padding var(--pad768)
    display flex
    flex-flow column nowrap
    justify-content center
  .tm-use-case__text
    display flex
  .tm-use-case__visual--icon i
    font-size 6rem

@media screen and (min-width: 1024px)
  .tm-use-case
    flex-flow row
    &:nth-of-type(2n)
      flex-flow row-reverse

  .tm-use-case__text
  .tm-use-case__visual
    flex 1

@media screen and (min-width: 1280px)
  .tm-use-case:nth-of-type(2n- 1)
    .tm-use-case__text .tm-use-case__container
      padding-left var(--pad1280)
    .tm-use-case__visual .tm-use-case__container
      padding-right var(--pad1280)

  .tm-use-case:nth-of-type(2n)
    .tm-use-case__text .tm-use-case__container
      padding-right var(--pad1280)
    .tm-use-case__visual .tm-use-case__container
      padding-left var(--pad1280)

  .tm-use-case__visual--icon i
    font-size 9rem

@media screen and (min-width: 1920px)
  .tm-use-case:nth-of-type(2n- 1)
    .tm-use-case__text .tm-use-case__container
      padding-left var(--pad1920)
    .tm-use-case__visual .tm-use-case__container
      padding-right var(--pad1920)

  .tm-use-case:nth-of-type(2n)
    .tm-use-case__text .tm-use-case__container
      padding-right var(--pad1920)
    .tm-use-case__visual .tm-use-case__container
      padding-left var(--pad1920)
</style>
