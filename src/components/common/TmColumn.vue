<template lang="pug">
.tm-column: .tm-column__container
  .tm-column__icon(v-if="$slots['icon'] || icon")
    i.material-icons(v-if='icon'): i.material-icons {{ icon }}
    slot(v-else name='icon')
  .tm-column__title.h2(v-if="$slots['title'] || title")
    template(v-if='title') {{ title }}
    slot(v-else name='title')
  .tm-column__subtitle(v-if="$slots['subtitle'] || subtitle")
    template(v-if='subtitle') {{ subtitle }}
    slot(v-else name='subtitle')
  slot
</template>

<script>
export default {
  name: "tm-column",
  props: ["icon", "title", "subtitle"]
}
</script>

<style lang="stylus">
@import '~variables'

.tm-columns
  display flex
  flex-flow row wrap
  justify-content center

.tm-column
  margin-bottom var(--pad320)
  &:last-child
    margin-bottom 0

.tm-column__container
  display flex
  flex-flow column nowrap
  align-items center

  text-align center
  max-width 16rem
  margin 0 auto

.tm-column__icon
  padding 1.5rem
  margin-bottom 0.5rem
  i
    font-size 3rem
    color var(--primary)

.tm-column__title
  margin-bottom 1.5rem
  width 280px

.tm-column__subtitle
  margin-bottom 2rem

@media screen and (min-width:768px)
  .tm-columns
    margin 0 -1rem

  .tm-column
    flex 0 0 50%
    &:not(:last-child)
      margin-bottom var(--pad768)
    &:last-child
      margin-bottom 0

@media screen and (min-width:1024px)
  .tm-column
    flex 0 0 33.333%
    padding 0 1rem
    &:not(:last-child)
      margin-bottom 0

@media screen and (min-width:1280px)
  .tm-column
    padding 0 var(--pad320)
</style>
