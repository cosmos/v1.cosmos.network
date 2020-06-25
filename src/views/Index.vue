<template lang="pug">
div
  modal(v-bind="{visible: !!(video), side: 'center', buttonClose: true, fullscreen: true, width: '900px', backgroundColor: 'rgba(0,0,0,.8)'}" @visible="video = $event" v-if="!!(video)")
    div.modal__content(v-if="!!(video)")
      iframe(width="100%" height="510" src="https://www.youtube.com/embed/Eb8xkDi_PUg?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  div
    tm-section#section-hero(theme="dark" layout="hero")
      app-launch-banner
      div(slot="suptitle" :style="`marginTop: 8rem`") The foundation for a new token economy
      div(slot="title")
        .phone Join the #[strong most powerful] ecosystem of connected blockchains
        .tablet.laptop.desktop Join the #[strong most {{ adjectiveCurrent }}] #[br] ecosystem of connected blockchains
      tm-btn(size="lg" value="watch video" icon="play_circle_outline" type="anchor"
        icon-pos="right" color="primary" @click.native="videoPlay(true)")
      tm-btn(size="lg" value="learn more" v-scroll-to="'#section-problems'"
        icon="arrow_downward" icon-pos="right")
      div(slot="image")
        img.phone.tablet(src="~assets/images/home/section-hero-mobile.svg" alt="Hero image")
        img.laptop(src="~assets/images/home/section-hero-desktop.svg" alt="Hero image")
        img.desktop(src="~assets/images/home/section-hero-desktop.svg" alt="Hero image")

    tm-section#section-problems(layout="center")
      div(slot="title") Cosmos solves today's hardest blockchain problems
      .tm-cards-issue

        tm-card-issue(icon="scalability")
          template(slot="problem-title") Scalability
          template(slot="problem-subtitle") Proof-of-Work protocols are slow, expensive, unscalable, and environmentally harmful.
          template(slot="solution-title") Tendermint BFT fixes this.
          template(slot="solution-subtitle") Tendermint BFT is a byzantine fault tolerant consensus engine that powers Cosmos Proof-of-Stake.

        tm-card-issue(icon="usability")
          template(slot="problem-title") Usability
          template(slot="problem-subtitle") Blockchain applications are complex and difficult to understand for developers.
          template(slot="solution-title") Cosmos SDK fixes this.
          template(slot="solution-subtitle") Cosmos SDK is a modular framework for building interoperable, application-specific blockchains.

        tm-card-issue(icon="interoperability")
          template(slot="problem-title") Interoperability
          template(slot="problem-subtitle") Blockchain economies are siloed and cannot transfer assets between each other.
          template(slot="solution-title") IBC Protocol fixes this.
          template(slot="solution-subtitle") Interblockchain Communication (IBC) is a TCP/IP-like messaging protocol for blockchains.

      tm-btn(
        value="Tools" size="lg" type="link" :to="{ name: 'tools' }"
        icon="arrow_forward" icon-pos="right")

    tm-section#section-sdk(layout="split" theme="dark")
      div(slot="project-title") SDK
      div(slot="title") Launch your application-specific blockchain today
      p Our SDK is the first ever modular framework for developers to quickly and easily build custom blockchains in Go.
      tm-btn(size="lg" value="Learn More" type="link" :to="{ name: 'product-sdk' }"
        icon="arrow_forward" icon-pos="right")
      div(slot="image")
        .phone: img(src="~assets/images/home/section-sdk-mobile.svg" alt="SDK")
        .tablet: img(src="~assets/images/home/section-sdk-mobile.svg" alt="SDK")
        .laptop
        .desktop

    tm-section(layout="split" theme="stars")
      div(slot="suptitle") #cosmoslaunch
      div(slot="title") BLASTOFF! The Cosmos Hub Is Live
      p The Cosmos Hub blockchain launched in March 2019. Learn about the ATOM token and read guides & documentation on the brand-new Cosmos Hub website.
      tm-btn(size="lg" value="Cosmos Hub" type="anchor"  icon="arrow_forward"
        icon-pos="right" href="https://hub.cosmos.network" target="_blank" rel="noreferrer noopener")
      div(slot="image")
        img(src="~assets/images/home/section-launch.svg" alt="Launch")

    section-news
    section-logos
</template>

<script>
import { mapGetters } from "vuex"
import AppLaunchBanner from "common/AppLaunchBanner"
import TmBtn from "common/TmBtn"
import TmCardIssue from "cards/TmCardIssue"
import TmSection from "common/TmSection"
import { Modal } from "@cosmos-ui/vue"
import SectionLogos from "sections/SectionLogos"

export default {
  name: "page-index",
  metaInfo: { title: "Internet of Blockchains" },
  components: {
    SectionNews: () => import("sections/SectionNews"),
    SectionLogos,
    AppLaunchBanner,
    TmBtn,
    TmCardIssue,
    TmSection,
    Modal
  },
  computed: {
    ...mapGetters(["email", "urls"])
  },
  data: function() {
    return {
      video: null,
      adjectiveId: 0,
      adjectives: ["powerful", "interoperable", "scalable", "customizable"],
      adjectiveCurrent: "powerful"
    }
  },
  mounted() {
    setInterval(() => {
      if (this.adjectiveId === 4) {
        this.adjectiveId = 0
      }
      this.adjectiveCurrent = this.adjectives[this.adjectiveId]
      this.adjectiveId++
    }, 2000)
  },
  methods: {
    videoPlay(bool) {
      this.$gtm.trackEvent({
        event: "event",
        category: "Video",
        action: "play",
        label: "Cosmos: The Vision",
        value: true
      })
      this.video = bool
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.modal__content
  background black
  width 100%
  line-height 0
  display flex
  align-items center
  height: 100%

@media screen and (max-width: 900px)
  .modal__content iframe
    max-height 75vh

#section-hero
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
  background-size 256px 256px, auto

#section-validators .tm-section__image
  img
    width 53vw
    margin 0 auto

#section-sdk
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, #202854, #171B39)
  background-size 256px 256px, 100%

@media screen and (min-width: 768px)
  #section-validators .tm-section__image
  #section-ethermint .tm-section__image
    img
      max-width 300px

  #section-sdk .tm-section__image
    img
      max-width 450px

@media screen and (min-width: 1024px)
  #section-sdk
    background url('~images/home/section-sdk-desktop.svg') right center no-repeat, url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, #202854, #171B39)
    background-size auto 100%, 256px 256px, auto

@media screen and (min-width: 1920px)
  #section-explorer
    .tm-section__image
      padding-top var(--pad768)
      padding-bottom var(--pad768)
</style>
