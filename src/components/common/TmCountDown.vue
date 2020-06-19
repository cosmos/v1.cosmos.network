<template lang="pug">
.tm-count-down(v-if='countingDown')
  .tm-count-down__label Launch!
  .tm-count-down__unit
    .tm-count-down__value {{ days }}
    .tm-count-down__key d
  .tm-count-down__unit
    .tm-count-down__value {{ hours }}
    .tm-count-down__key h
  .tm-count-down__unit
    .tm-count-down__value {{ minutes }}
    .tm-count-down__key m
  .tm-count-down__unit
    .tm-count-down__value {{ seconds }}
    .tm-count-down__key s
.tm-count-down(v-else)
  .tm-count-down__label Launch Initiated!
</template>

<script>
export default {
  name: "tm-count-down",
  computed: {
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
  props: ["now", "end"]
}
</script>
<style lang="stylus">
.tm-count-down__label
  padding-right 0.75rem

.tm-count-down
  display flex

.tm-count-down__unit
  display inline-block
  &:not(:last-child)
    padding-right 1rem

.tm-count-down__label
.tm-count-down__unit:not(:last-child)
  padding-right 0.3rem

.tm-count-down__key
.tm-count-down__value
  display inline
  line-height 1

.tm-count-down__key
  font-size 0.75rem
  font-weight var(--fw-regular)
  padding-left 0.1rem

.tm-count-down
  margin -0.25rem

.tm-count-down__label
.tm-count-down__unit
  border-radius 0.25rem
  margin 0.0625rem

.tm-count-down__unit
  background linear-gradient(to bottom, hsl(0,0,40%), hsl(0,0,15%))
  padding 0 0.125rem

.tm-count-down__key
  color hsla(0,0,100%,0.75)

.tm-count-down__value
  color var(--dark-txt)

@media screen and (min-width: 375px)
  .tm-count-down__label
  .tm-count-down__unit
    margin 0.125rem

  .tm-count-down__unit
    padding 0 0.25rem

@media screen and (min-width: 768px)
  .tm-count-down__unit
    padding 0 1.25vw !important

@media screen and (min-width: 1152px)
  .tm-count-down__label
  .tm-count-down__unit
    margin 0.25rem
@media screen and (min-width: 1280px)
  .tm-count-down__unit
    padding 0 1.5vw !important
</style>
