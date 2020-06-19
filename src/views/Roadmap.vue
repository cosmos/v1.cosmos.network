<template lang="pug">
.page-roadmap
  tm-header
    div(slot="title") Cosmos Hub Roadmap
  tm-section
    .ms-labels(v-if="showCompletedMilestones")
      .ms-label.h5 Past Milestones
      .ms-label.ms-label--date.h5 Date
      .ms-label.ms-label--testnet.h5 Network
    .completed-milestones(v-if="showCompletedMilestones"): card-milestone(
      v-for="milestone in completedMilestones"
      :key="milestone.slug"
      :milestone="milestone"
    )
    .ms-labels
      .ms-label.h5 Upcoming Milestones
      .ms-label.ms-label--date.h5 Date
      .ms-label.ms-label--testnet.h5 Network
    .ms-notice.h5(v-if="!showCompletedMilestones")
      a(@click="openCompletedMilestones") View past milestones
    card-milestone(
      v-for="milestone in upcomingMilestones"
      :key="milestone.slug"
      :milestone="milestone"
    )
    .ms-labels
      .ms-label.h5 Governance Milestones
      .ms-label.ms-label--date.h5 Date
      .ms-label.ms-label--testnet.h5 Network
    .ms-notice.h5 The following milestones will require voting by on-chain governance.
    card-milestone(
      v-for="milestone in communityMilestones"
      :key="milestone.slug"
      :milestone="milestone"
    )
</template>

<script>
import { sortBy } from "lodash"
import { mapGetters } from "vuex"
import TmBtn from "common/TmBtn"
import CardMilestone from "cards/CardMilestone"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-roadmap",
  metaInfo: { title: "Roadmap" },
  components: {
    TmBtn,
    CardMilestone,
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["roadmap", "urls"]),
    interchainMilestones() {
      let milestones = []
      if (this.roadmap) {
        milestones = this.roadmap.milestones.filter(m => !m.governance)
        milestones = milestones.filter(m => m.active)
        milestones = sortBy(milestones, "id")
      }
      return milestones
    },
    completedMilestones() {
      return this.interchainMilestones.filter(m => m.date)
    },
    upcomingMilestones() {
      return this.interchainMilestones.filter(m => !m.date)
    },
    communityMilestones() {
      let milestones = []
      if (this.roadmap) {
        milestones = this.roadmap.milestones.filter(m => m.governance)
        milestones = milestones.filter(m => m.active)
        milestones = sortBy(milestones, "id")
      }
      return milestones
    }
  },
  data: () => ({
    showCompletedMilestones: false
  }),
  methods: {
    openCompletedMilestones() {
      this.showCompletedMilestones = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.milestones
  max-width 64rem
  margin: 0 auto

.ms-labels
  display none

.ms-notice
  background var(--app-fg)
  font-family var(--ff-brand)
  padding 0.75rem 1rem
  color var(--dim)
  font-style italic
  font-size 0.875rem
  margin: 0 0 1rem

@media screen and (min-width: 1024px)
  .ms-labels
    display flex
    justify-content space-between
    align-items center
    background var(--bc)

  .ms-label
    flex 1
    padding 0 0.75rem
    line-height 3rem

  .ms-label.ms-label--date
    flex 0 0 9rem

  .ms-label.ms-label--testnet
    flex 0 0 12rem
</style>
