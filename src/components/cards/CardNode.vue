<template lang="pug">
.ni-card-node(:class="cardClass" :style="cardStyle")
  .ni-card-node__arrow(:class="arrowClass" :style="arrowStyle" )
    .ni-card-node__arrow-head
    .ni-card-node__arrow-body
  .ni-card-node__container
    .ni-card-node__node(@click="setPopup(true)" :id="node.id")
      .ni-card-node__key {{ node.title }}
      .ni-card-node__value {{ node.version }}
  modal-node(:node="node" :type="type" v-if="activePopup"
    @click.native="setPopup(false)")
</template>

<script>
import ModalNode from "modals/ModalNode"
export default {
  name: "ni-card-node",
  components: {
    ModalNode
  },
  computed: {
    cardClass() {
      let value = ""
      if (this.node.date) {
        value += "ni-card-node--done "
      }
      if (this.activePopup) {
        value += "ni-card-node--active "
      }
      if (this.type) {
        value += `ni-card-node--${this.type}`
      }
      return value
    },
    cardStyle() {
      let offset = this.node.offset
      let height = offset * 6 + 0.5
      return {
        marginBottom: height + "rem"
      }
    },
    arrowClass() {
      if (this.node.continues) {
        return "ni-card-node__arrow--continues"
      }
      return ""
    },
    arrowStyle() {
      let span = this.node.span
      let height = span * 3 + (span - 1) * 3
      return {
        height: height + "rem"
      }
    }
  },
  data: () => ({
    activePopup: false
  }),
  methods: {
    setPopup(state) {
      this.activePopup = state
    }
  },
  props: ["node", "type"]
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.ni-card-node
  flex 1
  &:last-of-type
    .ni-card-node__arrow:not(.ni-card-node__arrow--continues)
      display none
      visibility hidden

  &.ni-card-node--done
    .ni-card-node__node
      color var(--bright)
      background var(--app-fg)
      border-color var(--link)
      &:after
        color var(--bright)
        background var(--link)

    .ni-card-node__arrow
      .ni-card-node__arrow-body
        background alpha(link, 50%)
        &:after
          background var(--link)
      .ni-card-node__arrow-head
        border-bottom-color alpha(link, 50%)

    &.ni-card-node--hub
      .ni-card-node__node
        border-color var(--link)

    &.ni-card-node--sdk
      .ni-card-node__node
        border-color var(--tertiary)
        &:after
          background var(--tertiary)
      .ni-card-node__arrow
        .ni-card-node__arrow-body
          background alpha(var(--tertiary), 50%)
        .ni-card-node__arrow-head
          border-bottom-color alpha(var(--tertiary), 50%)

    &.ni-card-node--var(--tendermint)
      .ni-card-node__node
        border-color var(--tendermint)
        &:after
          background var(--tendermint)
      .ni-card-node__arrow
        .ni-card-node__arrow-body
          background alpha(var(--tendermint), 50%)
        .ni-card-node__arrow-head
          border-bottom-color alpha(var(--tendermint), 50%)

    &.ni-card-node--gui
      .ni-card-node__node
        border-color var(--secondary)
        &:after
          background var(--secondary)
      .ni-card-node__arrow
        .ni-card-node__arrow-body
          background alpha(mc, 50%)
        .ni-card-node__arrow-head
          border-bottom-color alpha(mc, 50%)

  &.ni-card-node--done.ni-card-node--hub
  &.ni-card-node--done.ni-card-node--sdk
  &.ni-card-node--done.ni-card-node--var(--tendermint)
  &.ni-card-node--done.ni-card-node--gui
    .ni-card-node__node:hover
      border-color var(--hover)
      &:after
        background var(--hover)


  &.ni-card-node--active
  &.ni-card-node--done.ni-card-node--active
    .ni-card-node__node
      position relative
      &:after
        color var(--bright)

    .ni-card-node__key
    .ni-card-node__value
      color var(--bright)

  &.ni-card-node--active
    .ni-card-node__node
      border-color var(--bc)
      background var(--bc)
      &:after
        background var(--bc)

  &.ni-card-node--done.ni-card-node--active
    .ni-card-node__node
      background var(--hover)
      border-color var(--hover)
      &:after
        background var(--hover)

.ni-card-node__container
  display flex
  align-items center
  justify-content center

.ni-card-node__node
  border-radius 0.25rem
  height 3rem
  max-width 12rem
  width 100%
  border 2*px solid var(--bc)
  background var(--app-bg)

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

  box-shadow var(--app-bg) 0 0 0 0.125rem
  position relative
  z-index var(--z-list-item)

  &:after
    position absolute
    bottom -2*px
    right -2*px
    width 1.25rem
    height 0.5rem
    background var(--bc)
    border-radius 0.25rem 0 0.25rem 0

    content 'more_horiz'
    font-family 'Material Icons'
    color var(--dim)
    font-size sm

    display flex
    align-items center
    justify-content center

  &:hover
    cursor pointer
    border-color var(--hover)
    &:after
      background var(--hover)

.ni-card-node__key
  color var(--dim)
  font-size xs

.ni-card-node__value
  font-size sm
  color var(--txt)
  font-weight var(--fw-bold)

arrow-size = 0.5rem
arrow-color = var(--bc)

.ni-card-node__arrow
  height 4rem
  display flex
  flex-flow column nowrap
  align-items center
  padding 0.5rem 0

  position relative
  z-index var(--z-list-item)

.ni-card-node__arrow-body
  width 2*px
  background arrow-color
  flex 1

.ni-card-node__arrow-head
  width 0
  height 0
  border-left arrow-size solid transparent
  border-right arrow-size solid transparent
  border-bottom arrow-size solid arrow-color

@media screen and (min-width: 768px)
  .ni-card-node__node
    &:after
      position absolute
      width 1.5rem
      height 0.75rem

@media all and (-ms-high-contrast:none)
  // ie11 support
  *::-ms-backdrop, .ni-card-node
    margin-bottom 1.5rem
  *::-ms-backdrop, .ni-card-node__arrow
    display none !important
    background var(--success)
</style>
