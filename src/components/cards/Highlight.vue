<template lang="pug">
.highlight
  .highlight__title {{ title }}
  .highlight__subtitle {{ subtitle }}
  .highlight__main: slot
  .highlight__main.desktop(v-if="this.$slots['desktop']")
    slot(name="desktop")
  .highlight__main.mobile(v-if="this.$slots['desktop']")
    slot(name="mobile")
</template>

<script>
export default {
  name: "highlight",
  props: ["title", "subtitle"]
}
</script>

<style lang="stylus">
@import '~variables'

.highlight
  padding 1rem
  background var(--app-fg)
  margin-bottom 1rem

.highlight__title
  font-weight var(--fw-bold)
  font-size 1.5rem
  color var(--bright)

.highlight__subtitle
  color var(--dim)
  margin 0 0 1rem

.highlight__main
  .tm-btn
    width 100%
  .tm-btn:first-child
  .tm-field:first-child
    margin-bottom 0.5rem

.highlight__main.desktop
  display none

@media screen and (min-width: 768px)
  .highlight
    flex 1
    padding 3rem
    border none
    &:first-of-type
      margin-right 0.5rem
    &:last-of-type
      margin-left 0.5rem

  .highlight
    display flex
    flex-flow column nowrap

  .highlight__title
    font-size 2rem

  .highlight__subtitle
    flex 1
    margin-bottom 1.5rem

  .highlight__main
    .tm-btn:first-child
    .tm-field:first-child
      margin-bottom 1rem

  .highlight__main.desktop
    display block
  .highlight__main.mobile
    display none
</style>
