<template lang="pug">
.overlay-btns: slot
</template>

<script>
export default {
  name: "overlay-btns"
}
</script>

<style lang="stylus">
@import '~variables'

.overlay-btns
  height auto

  position fixed
  bottom 0.5em
  right 0.5em
  z-index 99

  display flex
  flex-flow column nowrap

  > div
  > a
    margin-top 0.5em
</style>
