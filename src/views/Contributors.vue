<template lang="pug">
div
  tm-section.component__hero__container(theme="dark" layout="split")
    div(slot="suptitle") Contributors
    div(slot="title").title Grab your spacesuit
    div(slot="subtitle").subtitle Like a Space Program, becoming a Cosmonaut in Cosmos means that you are not only at the forefront of the blockchain space race but you are pioneering the pursuit of blockchain space exploration itself. #[br] #[br]
    div(slot="subtitle").subtitle Apply for a microgrant for development work, hosting an event, or creating some media.
    img(slot="image" src="~images/community/community-section-cosmonaut.svg" alt="Cosmonauts").cosmonauts-img

  tm-section
    div(slot="title") Resources
    div(slot="subtitle") Here are materials you can use to run your own community meetup, create Cosmos-related content, or build your own Cosmos project.
    .tm-cards-hz.tm-cards-hz--landscape
      tm-card-hz(
        icon="photo"
        landscape="true"
        subtitle="Cosmos logos"
        title="Cosmos Design Kit"
        href="https://drive.google.com/open?id=1q1b9IhlxGHBG7wRByuBISHULu5o_D3hO")
      tm-card-hz(
        icon="photo"
        landscape="true"
        subtitle="Tendermint logos"
        title="Tendermint Design Kit"
        href="https://drive.google.com/open?id=1rLKHqZvYDJX1nlneYtMnnZDFzhQTD9wM")
      tm-card-hz(
        icon="people"
        landscape="true"
        subtitle="Speaker headshots and bios"
        title="Cosmos Speakers Kit"
        href="https://drive.google.com/open?id=1bPeSP_uakN0sfi3Q71KJZaq20AgO5mlR")
      tm-card-hz(
        icon="public"
        landscape="true"
        subtitle="Essential Cosmos info for publications"
        title="Press Kit"
        :to="{ name: 'presskit' }")
      tm-card-hz(
        icon="flare"
        landscape="true"
        subtitle="Host your own launch party"
        title="Launch Party Kit"
        href="https://drive.google.com/open?id=1ZdpF92qTk70tlPabh4j4_ceE2wtaGItr")

</template>

<script>
// import moment from "moment-timezone"
// import { mapGetters } from "vuex"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"

export default {
  name: "contributors",
  metaInfo: { title: "Contributors" },
  components: {
    TmSection,
    TmBtn,
    TmCardHz
  }
}
</script>

<style lang="stylus" scoped>
a
  color #5064FB
  text-decoration none
  cursor pointer

.cosmonauts-img
  position absolute
  bottom 0

.title
  font-weight 300
  font-size 2.5rem
  line-height 3rem
  letter-spacing -0.03em
  color #FFFFFF

.subtitle
  max-width 38.25rem
  font-size 1.125rem
  line-height 1.6875rem
  letter-spacing -0.01em
  color #BFBFBF

.component__hero__container
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
  background-size 256px 256px, auto
  padding-top 4rem
</style>
