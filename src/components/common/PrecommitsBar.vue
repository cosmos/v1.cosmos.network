<template lang="pug">
.precommits-bar__container
  .precommits-bar__background
    .precommits-bar__progress(:style="progressStyle")
      .precommits-bar__label {{ Math.round(precommits * 1000) / 10 }}%
  .precommits-bar__target 67%
</template>

<script>
export default {
  name: "precommits-bar",
  computed: {
    progressStyle() {
      let barWidth = 0
      if (this.precommits) {
        barWidth = Math.round(this.precommits * 1000) / 10
      }
      return {
        width: barWidth + "%"
      }
    }
  },
  props: ["precommits"]
}
</script>

<style lang="stylus">

.precommits-bar__container
.precommits-bar__background
.precommits-bar__progress
  height 2.667rem
  width 18rem

.precommits-bar__container
  position relative
  margin-top 1rem

.precommits-bar__background
  background hsla(0,0,0,0.5)
  border-radius 0.25rem
  overflow hidden

.precommits-bar__progress
  position absolute
  top 0
  left 0

  background var(--primary)
  transition 150ms ease all

.precommits-bar__target
  position absolute
  top 2.667rem
  left 66.6667%
  background var(--dark-txt)
  padding 0 0.333rem

  font-size 0.5rem
  line-height 1rem
  color var(--txt)

  &:before
    content ''
    height 2.667rem
    width 1px
    background var(--dark-txt)
    position absolute
    top -2.667rem
    left 0

.precommits-bar__label
  position absolute
  top 0
  left 0.5rem
  height 2.667rem
  font-weight var(--fw-bold)

  display flex
  align-items center
</style>
