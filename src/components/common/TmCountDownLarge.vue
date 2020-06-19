<template lang="pug">
.tm-cdl
  .tm-cdl__action(@click="enableModal" v-if="launch.largeCountdownButton")
    i.material-icons zoom_in
    .text Toggle Countdown
  .tm-cdl__modal(v-if="launch.largeCountdown" @click="disableModal")
    .tm-cdl__container(v-if="countingDown")
      .tm-cdl__tick
      .tm-cdl__time
        .tm-cdl__value {{ minutes }}:{{ seconds }}
        .tm-cdl__key Until Launch
    .tm-cdl__container(v-else)
      .tm-cdl__tick
      .tm-cdl__time
        .tm-cdl__value 00:00
        .tm-cdl__key Launch Initiated
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "tm-cdl",
  computed: {
    ...mapGetters(["launch"]),
    countingDown() {
      return (
        this.days > 0 || this.hours > 0 || this.minutes > 0 || this.seconds > 0
      )
    },
    endDate() {
      return Math.trunc(Date.parse(this.end) / 1000)
    },
    seconds() {
      let value = (this.endDate - this.now) % 60
      if (value < 10) return "0" + value
      return value
    },
    minutes() {
      let value = Math.trunc((this.endDate - this.now) / 60) % 60
      if (value < 10) return "0" + value
      return value
    },
    hours() {
      let value = Math.trunc((this.endDate - this.now) / 60 / 60) % 24
      if (value < 10) return "0" + value
      return value
    },
    days() {
      let value = Math.trunc((this.endDate - this.now) / 60 / 60 / 24)
      if (value < 10) return "0" + value
      return value
    }
  },
  methods: {
    enableModal() {
      this.$store.commit("setLaunchCountdown", true)
    },
    disableModal() {
      this.$store.commit("setLaunchCountdown", false)
    }
  },
  props: ["now", "end"]
}
</script>
<style lang="stylus">

.tm-cdl
  position relative
  z-index var(--z-modal)

.tm-cdl__action
  display none
.tm-cdl__modal
  position fixed
  z-index var(--z-modal)
  top 0
  left 0
  bottom 0
  right 0
  -webkit-transform translate3d(0,0,0)
  backdrop-filter blur(0.125rem)

  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  background hsla(0,0,0,0.5)

.tm-cdl__container
.tm-cdl__tick
  width 75vw
  height 75vw
  border-radius 50vw

.tm-cdl__container
  position relative
  display flex
  align-items center
  justify-content center
  border 5vw solid var(--primary)
  animation pulse 500ms infinite alternate ease-in-out

.tm-cdl__tick
  position absolute
  top -5vw
  left -5vw
  transform rotate(45deg)
  &:after
    content ''
    display block
    width 5vw
    height 150vw
    background var(--primary)
    position absolute
    top -37.5vw
    left 37.5vw - 2.5vw

.tm-cdl__time
.tm-cdl__value
  width 65vw
  height 65vw
  border-radius 40vw

.tm-cdl__time
  z-index var(--z-modal)

  width 65vw
  height 65vw
  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

  background hsla(0,0,0,0.75)

.tm-cdl__value
  position absolute
  top 0
  left 0

  display flex
  align-items center
  justify-content center

  font-family var(--ff-brand)
  font-size 20vw
  line-height var(--lh-heading)
  text-align center

  color var(--dark-txt)
  color #fff
  animation shadow-pulse 1s infinite ease-in-out

.tm-cdl__key
  font-family var(--ff-brand)
  color var(--dark-txt)
  font-size 3.5vw
  text-transform uppercase
  letter-spacing 0.15em
  text-align center
  width 65vw
  height 10vw

  position absolute
  bottom 7.5vw
  left 0

@keyframes tick
  0%
    transform rotate(45deg)
  100%
    transform rotate(405deg)

@keyframes pulse
  0%
    transform scale(0.99)
  100%
    transform scale(1.01)

@keyframes shadow-pulse
  0%
    color #fff
    text-shadow var(--primary) 0 0 25px
  100%
    color #fff
    text-shadow var(--primary) 0 0 0px

@media screen and (min-width:768px)
  .tm-cdl__action
    position fixed
    top 50vh
    left 0
    width 7rem
    height 3rem

    display flex
    align-items center
    justify-content center

    padding 0.5rem

    border-radius 0 0.25rem 0.25rem 0
    background var(--link)
    color var(--dark-txt)

    font-size 0.75rem
    line-height var(--lh-heading)
    cursor pointer
    &:hover
      background var(--hover)
    i.material-icons
      padding-right 0.25rem

  .tm-cdl__container
  .tm-cdl__tick
    width 33vw
    height 33vw
  .tm-cdl__container
    border-width 2.5vw

  .tm-cdl__tick
    &:after
      width 2.5vw
      height 66vw
      top -16.5vw
      left 16.5vw + 1.25vw

  .tm-cdl__time
  .tm-cdl__value
    width 28vw
    height 28vw

  .tm-cdl__value
    font-size 8vw

  .tm-cdl__key
    font-size 1.25vw
    width 28vw
    bottom -2vw
</style>
