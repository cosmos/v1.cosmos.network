<template lang="pug">
.overlay-btn
  i.material-icons {{ icon }}
</template>

<script>
export default {
  name: "overlay-btn",
  props: ["icon"]
}
</script>

<style lang="stylus">
@import '~variables'

.overlay-btn
  width 2.5rem
  height 2.5rem
  line-height 2.5rem
  border-radius 1.5rem

  text-align center
  color var(--txt)

  background var(--app-fg)
  box-shadow hsla(0,0,0,0.2) 0 2px 5px

  cursor pointer
  i
    line-height 2.5rem
    font-size 1.25rem

@media screen and (min-width: 360px)
  .overlay-btn
    width 3rem
    height 3rem
    line-height 3rem
    i
      line-height 3rem
</style>
