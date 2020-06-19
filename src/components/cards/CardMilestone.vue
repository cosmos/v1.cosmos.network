<template lang="pug">
.ni-milestone(:class="cardClass" :style="cardStyle")
  .ni-milestone__container(:id="milestone.id")
    .ni-milestone__header(v-if="milestone.date" @click="toggleDetails")
      .ni-milestone__icon
        i.material-icons.done done
      .ni-milestone__title {{ milestone.title }}
      .ni-milestone__action
        i.material-icons(v-if="!details") help_outline
        i.material-icons(v-else) close
    .ni-milestone__header(v-else)
      .ni-milestone__icon
        i.material-icons hourglass_empty
      .ni-milestone__title {{ milestone.title }}
    .ni-milestone__details(v-if="details")
      .ni-milestone__description
        | {{ milestone.description }}
        | 
        a(v-if="milestone.url" :href="milestone.url" target="_blank" rel="noreferrer noopener") Read more &raquo;
      .ni-milestone__footer.mobile-only(v-if="milestone.date")
        .ni-milestone__date {{ milestone.date }}
        .ni-milestone__network {{ milestone.network }}
    .ni-milestone__footer.desktop-only
      .ni-milestone__date {{ msDate }}
      .ni-milestone__network {{ msNetwork }}
</template>

<script>
export default {
  name: "ni-milestone",
  computed: {
    cardClass() {
      let value = ""
      if (this.milestone.date) {
        value += "ni-milestone--done "
      }
      if (this.type) {
        value += `ni-milestone--${this.type}`
      }
      return value
    },
    cardStyle() {
      let offset = this.milestone.offset
      let height = offset * 6 + 0.5
      return {
        marginBottom: height + "rem"
      }
    },
    msDate() {
      if (this.milestone.date) {
        return this.milestone.date
      } else {
        return "future"
      }
    },
    msNetwork() {
      if (this.milestone.network) {
        return this.milestone.network
      } else {
        return "tbd"
      }
    }
  },
  data: () => ({
    details: true
  }),
  mounted() {
    if (this.milestone.date) {
      this.details = false
    }
  },
  methods: {
    toggleDetails() {
      this.details = !this.details
    }
  },
  props: ["milestone", "type"]
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.ni-milestone
  margin 1rem 0
  &.ni-milestone--done
    .ni-milestone__header
      cursor pointer
    &:hover
      .ni-milestone__action i.material-icons
        color var(--hover)

.ni-milestone__container
  border 1px solid var(--bc)

.ni-milestone__header
  display flex
  align-items flex-start
  justify-content space-between

.ni-milestone__icon
.ni-milestone__action
  i.material-icons
    width 2rem
    height 2rem
    display flex
    align-items center
    justify-content center
    color var(--link)

.ni-milestone__action
  position relative
  z-index var(--z-list-item)

.ni-milestone__icon
  i.done
    color var(--success)

.ni-milestone__title
  flex 1
  padding 0.3125rem 0.5rem
  color var(--bright)
  font-family var(--ff-brand)
  line-height var(--lh-heading)

.ni-milestone__header + .ni-milestone__details
  border-top 1px solid var(--bc)

.ni-milestone__description
  color var(--txt)
  padding 0.5rem 0.75rem
  font-size sm

.ni-milestone__footer
  height 2rem
  background var(--app-bg)
  padding 0 0.75rem
  display flex
  align-items center
  justify-content space-between

  font-size sm
  color var(--dim)

.ni-milestone__network
  margin-left 0.5rem
  color var(--secondary)

@media screen and (min-width: 768px)
  .ni-milestone__header
    height 3rem
    align-items center
  .ni-milestone__icon
  .ni-milestone__action
    i.material-icons
      width 3rem
      height 3rem
      font-size 1.5rem
  .ni-milestone__title
    font-size 1.25rem
    padding 0 0.75rem

  .ni-milestone__description
    font-size 1rem
    padding 0.875rem 1rem
    max-width 32rem

  .ni-milestone__footer
    height 3rem
    font-size 1rem

@media screen and (max-width: 1023px)
  .mobile-only
    display flex
  .desktop-only
    display none

@media screen and (min-width: 1024px)
  .mobile-only
    display none
  .desktop-only
    display flex

  .ni-milestone
    position relative
    margin 1rem 0

  .ni-milestone__footer
    height 0

  .ni-milestone__header
    align-items center

  .ni-milestone__date
  .ni-milestone__network
    position absolute
    top 0

    line-height 3rem
    font-size 1rem
    font-weight var(--fw-bold)
    padding 0 0.75rem

  .ni-milestone__date
    width 9rem
    right 12rem

  .ni-milestone__network
    width 12rem
    right 0
</style>
