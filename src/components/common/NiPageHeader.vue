<template lang="pug">
header.ni-page-header
  .ni-page-header-container
    slot(name="votes")
    .text
      .h1.ni-page-header-title.break-lines
        i.material-icons(v-if="icon") {{ icon }}
        slot(name='title')
      .ni-page-header-subtitle.break-lines
        slot(name='subtitle')
    nav.ni-page-header-menu
      slot(name='menu')
</template>

<script>
export default {
  name: "ni-page-header",
  props: ["icon"]
}
</script>

<style lang="stylus">
@require '~variables'

.ni-page-header
  min-height 3rem
  padding-top 1rem
  padding-bottom 1rem
  display flex
  align-items center
  position relative
  overflow hidden

.ni-page-header-container
  display flex
  flex-flow column

.ni-page-header-title
  display flex
  align-items center

  &:empty
    display none

  > i.material-icons
    padding-right 0.375rem

.ni-page-header-title > div
  display flex
  align-items center
  color var(--bright)

.ni-page-header-subtitle > div
  max-width 40rem

.ni-page-header-title + .ni-page-header-subtitle
  margin-top 0.5rem

@media screen and (min-width: 768px)
  .ni-page-header
    padding-top 3rem
    padding-bottom 3rem

@media screen and (max-width: 1023px)
  .ni-page-header-menu
    margin-top 1rem

@media screen and (min-width: 1024px)
  .ni-page-header-container
    flex 1
    display flex
    flex-flow row nowrap
    align-items center
    .text
      flex 1
      margin-right 1rem

  .ni-page-header-menu
    display block
    .tm-btn
      margin-left 0.5rem
</style>
