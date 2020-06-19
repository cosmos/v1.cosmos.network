<template lang="pug">
.card-locations
  .card-location
    a(:href='links.meetups.berlin' target='_blank')
      img(src='images/hackatom/loc-berlin.jpg' alt="Hackatom Berlin")
      .kv
        .key Cosmos
        .value Berlin
  .card-location
    a(:href='links.meetups.nyc' target='_blank')
      img(src='images/hackatom/loc-nyc.jpg' alt="Hackatom New York")
      .kv
        .key Cosmos
        .value New York City
  .card-location
    a(:href='links.meetups.toronto' target='_blank')
      img(src='images/hackatom/loc-toronto.jpg' alt="Hackatom Toronto")
      .kv
        .key Cosmos
        .value Toronto
  .card-location
    a(:href='links.meetups.toronto' target='_blank')
      img(src='images/hackatom/loc-san-francisco.jpg' alt="Hackatom San Francisco")
      .kv
        .key Cosmos
        .value San Francisco
  .card-location
    a(:href='links.meetups.seoul' target='_blank')
      img(src='images/hackatom/loc-seoul.jpg' alt="Hackatom Seoul")
      .kv
        .key Cosmos
        .value Seoul
  .card-location
    a(:href='links.meetups.shanghai' target='_blank')
      img(src='images/hackatom/loc-shanghai.jpg' alt="Hackatom Shanghai")
      .kv
        .key Cosmos
        .value Shanghai
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "meetup-locations",
  computed: {
    ...mapGetters(["links"])
  }
}
</script>
<style lang="stylus">
@require '~variables'

.card-locations
  display flex
  flex-flow column nowrap
  margin 0 0 0.5rem

.card-location
  margin-bottom 1rem
  display flex
  background var(--app-fg)

  a
    position relative
    flex 1
    min-width 0
    margin 0

    &:before
      content ''
      top 0
      left 0
      right 0
      bottom 0
      background transparent
      border 0.25rem solid transparent
      position absolute
      display block

    img
      width 100%
      display block
      margin 0

    .kv
      position absolute
      bottom 0
      left 0
      padding 0.5rem
      background hsla(0, 0, 0, 0.75)
      width 8rem
      height 3rem

      .key, .value
        line-height 1

      .key
        margin-bottom 0.375rem
        font-size 0.625rem
        text-transform uppercase
        font-weight var(--fw-bold)
        letter-spacing 0.05em
        color var(--dim)

      .value
        font-size 0.875rem
        color var(--bright)

    &:hover:before
      border-color var(--hover)

@media screen and (min-width: 768px)
  .card-locations
    flex-flow row wrap
    align-items center
    justify-content center
    margin 0 0 1.5rem

  .card-location
    flex 0 0 50%
    text-align left
    margin 0
</style>
