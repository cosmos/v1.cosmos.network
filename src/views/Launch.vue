<template lang="pug">
.page-launch
  tm-count-down-large(
    :now="launch.countdown.now"
    :end="launch.countdown.genesis")

  tm-section(theme="stars" layout="split").launch-header
    div(slot="image")
      img(v-if="launch.step > 0" src="~assets/images/launch/rocket-prelaunch.svg" alt="Prelaunch")
      img(v-else-if="block.height === 0" src="~assets/images/launch/rocket-loading.svg" alt="Loading")
      img(v-else src="~assets/images/launch/rocket-launch.svg" alt="Launch")
    .launch-progress
      .launch-progress__steps(v-if="launch.step > 0")
        .border.b1: .border.b2: .border.b3: .border.b4: .border.b5
          .inner {{ launch.step }}
      .launch-progress__block.launch-progress__circle(v-else-if="block.height > 0")
        .value {{ block.height }}
        .key Block Height
    .launch-header__title(v-if="launch.step > 0")
      .h3 Countdown To
      .h1 #[strong Cosmos Hub] Launch
    .launch-header__title(v-else-if="block.height === 0")
      .h3 Launch Initiated
      .h1 Awaiting #[strong 67% Precommits]
      precommits-bar(:precommits="precommits")
    .launch-header__title(v-else)
      .h3 We have Liftoff
      .h1 Cosmos Hub #[strong Has Launched]
    .launch-header__text
      .launch-steps__steps
        .launch-steps__step(
          v-for="i in launch.steps"
          :class="i.id > launch.step ? 'complete' : ''"
          :key="`step-${i.id}`")
          .launch-step-status(v-if="i.id > launch.step")
            img(src="~assets/material-icons/baseline-check-24px.svg" alt="Baseline check")
          .launch-step-status(v-else)
            img(src="~assets/material-icons/baseline-hourglass_empty-24px.svg" alt="Hourglass")
          .key {{ i.id }}
          template(v-if="i.id === 1 && launch.step > 0")
            tm-count-down(:now="launch.countdown.now" :end="launch.countdown.genesis")
          template(v-else-if="i.url && launch.step > 0")
            | #[a.value.phone(:href="i.url" target="_blank" rel="noreferrer noopener") {{ i.mobile }}] #[a.value.tablet.laptop.desktop(:href="i.url" target="_blank" rel="noreferrer noopener") {{ i.desktop }}]
          template(v-else)
            | #[.value.phone {{ i.mobile }}] #[.value.tablet.laptop.desktop {{ i.desktop }}]

    .launch-action
      tm-btn(color="dark" value="Watch Livestream" type="anchor" href="https://www.youtube.com/watch?v=OALEhpn7ccM" target="_blank" rel="noreferrer noopener")
      tm-btn(color="primary" value="Tweet #cosmoslaunch" type="anchor" :href="launch.tweet" target="_blank" rel="noreferrer noopener")
    .launch-header__foreground.launch-header__foreground--city(v-if="launch.step > 0")
    .launch-header__foreground.launch-header__foreground--clouds(v-else-if="block.height === 0")

  tm-section: .page-launch__main
    .page-launch__secondary
      .launch-box
        .h3 Block Explorers
        p Monitor #[strong live mainnet status] with a community-maintained block explorer.
        .block-explorers
          card-block-explorer(
            href="https://bigdipper.forbole.com"
            title="Big Dipper"
            subtitle="bigdipper.forbole.com")
          card-block-explorer(
            href="https://cosmos-overview.genesislab.net/"
            title="Cosmos Overview"
            subtitle="genesislab.net")
          card-block-explorer(
            href="https://nylira.net/3d"
            title="Cosmos Visualizer"
            subtitle="nylira.net/3d")
          card-block-explorer(
            href="https://hubble.figment.network"
            title="Hubble"
            subtitle="hubble.figment.network")
          card-block-explorer(
            href="https://lunie.io"
            title="Lunie"
            subtitle="lunie.io")
          card-block-explorer(
            href="https://www.mintscan.io"
            title="Mintscan"
            subtitle="mintscan.io")
          card-block-explorer(
            href="https://stargazer.certus.one"
            title="Stargazer"
            subtitle="stargazer.certus.one")

      .launch-box
        .h3 Launch Parties
        p Are you an event organizer? Are you hyped about launch? Celebrate the mainnet launch by running a community launch party.
        tm-btn(value="Launch Party Assets" type="link" to='/events/launch')

      .launch-box
        .h3 Future Roadmap
        p Interested in a more detailed mainnet roadmap, including future community proposals?
        tm-btn(value="View Roadmap" type="link" :to="{ name: 'roadmap' }")

      a.launch-box.launch-box--twitter(target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/search?q=%23cosmoslaunch")
        img(src="~assets/brands/white/twitter.svg" alt="Twitter")
        | {{ launch.hashtag }}

    .page-launch__primary
      .launch-section
        .h3 Launch & Funding Announcements
        p We have important Cosmos Hub launch details and information about Tendermint Inc's new fundraising round to share.
        ul.faqs
          li
            a(href="https://www.coindesk.com/a-blockchain-to-connect-all-blockchains-cosmos-is-now-officially-live" target="_blank" rel="noreferrer noopener") A Blockchain to Connect All Blockchains, Cosmos Is Officially Live
            strong Coindesk
          li
            a(href="https://blog.cosmos.network/blastoff-the-cosmos-hub-mainnet-is-live-41a7c749e0d0" target="_blank" rel="noreferrer noopener") Blastoff - The Cosmos Hub Mainnet is Live
            strong Cosmos Blog
          li
            a(href="https://medium.com/tendermint/tendermint-inc-announces-series-a-round-9c062d1bd7de" target="_blank" rel="noreferrer noopener") Tendermint Inc Announces Series A Round
            strong Tendermint Blog

      .launch-section
        .h3 Launch FAQ
        ul.faqs
          li #[strong What is Cosmos?] #[router-link(:to="{ path: 'intro' }") Read the introduction]
          li
            strong Does the Cosmos Hub have a wallet?
            a(href="https://lunie.io" target="_blank" rel="noreferrer noopener") Lunie, A Cosmos Wallet
            a(href="https://hub.cosmos.network/main/delegators/delegator-guide-cli.html" target="_blank" rel="noreferrer noopener") CLI Guide
            a(href="https://hub.cosmos.network/ko/delegator-guide-cli.html" target="_blank" rel="noreferrer noopener") 위임자 가이드라인
            a(href="https://hub.cosmos.network/zh/delegator-guide-cli.html" target="_blank" rel="noreferrer noopener") 委托人指南
          li #[strong I have ATOM. How can I secure them? ] #[router-link(to="/atom-protection") Read security tips]
          li #[strong I'm a blockchain developer. How can I use Cosmos?] #[router-link(:to="{ name: 'tools' }") Go to the Developer Portal]
          li #[strong Who is building on Cosmos?] #[router-link(:to="{ path: 'ecosystem' }") See projects building on the ecosystem]
          li #[strong Why are mainnet halts considered normal?] #[a(href="https://blog.cosmos.network/the-4-classes-of-faults-on-mainnet-bfabfbd2726c" target="_blank" rel="noreferrer noopener") Learn about mainnet halts]
          li #[strong What can we expect post-launch?] #[a(href="https://blog.cosmos.network/the-3-phases-of-the-cosmos-hub-mainnet-fdff3a68c4c0") ATOM transfers enabled and more]

      .launch-section
        .h3 Official Communication Channels
        p With mainnet officially launched, security is of paramount importance. These are the only official Cosmos communication channels.
        .launch-social-media
          a(:href="urls.twitter" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/color/twitter.svg" alt="Twitter")
            span Twitter
          a(:href="urls.medium" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/color/medium.svg" alt="Medium")
            span Medium
          a(:href="urls.github" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/color/github.svg" alt="Github")
            span GitHub
        .warning #[router-link(to="/atom-protection") Important:] Do not share your 12 words with anyone, and never enter them into websites or an internet-connected computer. No one from Cosmos, the Tendermint team, or Interchain Foundation will ever ask you to share your 12 word mnemonic with us for any reason.


  section-logos
</template>

<script>
import moment from "moment"
import { mapGetters } from "vuex"
import CardBlockExplorer from "cards/CardBlockExplorer"
import PrecommitsBar from "common/PrecommitsBar"
import SectionLogos from "sections/SectionLogos"
import TmBtn from "common/TmBtn"
import TmCountDown from "common/TmCountDown"
import TmCountDownLarge from "common/TmCountDownLarge"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-launch",
  metaInfo: { title: "Cosmos Hub Launch" },
  components: {
    CardBlockExplorer,
    SectionLogos,
    PrecommitsBar,
    TmBtn,
    TmCountDown,
    TmCountDownLarge,
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["launch", "media", "urls"])
  },
  data: () => ({
    consensusState: {},
    precommits: 0.0,
    block: {
      height: "-",
      round: 0,
      step: 0
    }
  }),
  methods: {
    fetchBlockchain() {
      fetch("https://rpc.nylira.net/consensus_state").then(response => {
        // Examine the text in the response
        response.json().then(data => {
          let consensus_state = data.result

          // set block data
          let block = consensus_state.round_state["height/round/step"].split(
            "/"
          )
          this.block = {
            height: block[0],
            round: block[1],
            step: block[2]
          }

          // set precommits data
          let precommitsBitArray =
            consensus_state.round_state.height_vote_set[0].precommits_bit_array
          this.precommits = parseFloat(precommitsBitArray.split(" ")[3])
        })
      })
    },
    updateLaunchStep() {
      if (moment(this.launch.countdown.genesis).isBefore(moment())) {
        this.$store.commit("setLaunchStep", 0)
      }
    },
    showCountdown() {
      this.$store.commit("setLaunchCountdown", true)
    },
    maybeHideCountdown() {
      if (moment(this.launch.countdown.genesis).isBefore(moment())) {
        this.$store.commit("setLaunchCountdown", false)
      }
    },
    maybeShowCountdown() {
      let endDate = moment(this.launch.countdown.genesis)
      let startDate = moment(endDate).subtract(1, "hour")
      if (moment().isBetween(startDate, endDate)) {
        this.$store.commit("setLaunchCountdownButton", true)
        this.$store.commit("setLaunchCountdown", true)
      } else {
        this.$store.commit("setLaunchCountdownButton", false)
      }
    }
  },
  mounted() {
    this.maybeShowCountdown()
    this.updateLaunchStep()

    window.setInterval(() => {
      this.$store.commit("updateNow")
      this.updateLaunchStep()
      this.maybeHideCountdown()
      this.fetchBlockchain()
    }, 1000)

    window.setInterval(() => {
      this.maybeShowCountdown()
    }, 1000 * 60 * 5)
  }
}
</script>

<style lang="stylus">
.page-launch .tm-section
  background #fff

.launch-header
  padding-top 4rem
  margin-top -4rem
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(to bottom, hsl(258,60%,15%), hsl(233,40%,47%)) !important
  background-size 256px 256px, auto !important

  // this border fixes an issue with the SVG border
  &:after
    content ''
    width 100vw
    height 0.5vh
    background var(--app-bg)
    position absolute
    bottom -0.25vh
    left 0
    z-index 10

  .tm-section__container
    flex-flow row-reverse nowrap
    position relative
    z-index var(--z-list-item)
    overflow hidden

  .tm-section__image
    position relative
    z-index -2

.launch-header__foreground
  display block
  content ''
  width 100%
  height 100%

  background-size 768px auto

  position absolute
  bottom 0
  left 0
  z-index -1

.launch-header__foreground--city
  background url('~images/launch/city.svg') bottom center no-repeat

.launch-header__foreground--clouds
  background url('~images/launch/clouds-anim.svg') bottom center no-repeat

.launch-progress
  position absolute
  bottom 12.5vw
  left 50%
  width 12rem
  height 12rem
  margin-left -6rem
  border-radius 6rem
  color #000
  display flex
  align-items center
  justify-content center

.launch-progress__steps
  &:after
    display block
    position absolute
    top 50%
    left 50%
    margin-left -37.5vw
    content ''
    width 75vw
    height 1px
    background linear-gradient(to right, hsla(233,75%,75%,0.05), hsla(233,75%,75%,0.9), hsla(233,75%,75%,0.05))
    box-shadow hsla(233,65,75%,0.8) 0 0 1rem
    z-index 0

  .border, .inner
    display flex
    align-items center
    justify-content center
    position relative
    z-index 1

  .border
    border 1px solid hsla(233,60%,90%,0.33)
    border-radius 6rem
    box-shadow hsla(233,65%,60%,0.25) 0 0 5px 5px

  .b1
    width 12rem
    height 12rem
    border-width 2px
    background hsla(0,0,0,0.25)
    animation pulse-mobile 1s infinite alternate ease-in-out

  .b2
    width 11.33rem
    height 11.33rem
    border-color hsla(233,65%,90%,0.25)
  .b3
    width 10.67rem
    height 10.67rem
    border-color hsla(233,65%,90%,0.65)
  .b4
    width 10rem
    height 10rem
    border-width 0.67rem
    border-color hsla(233,65%,90%,0.75)
  .b5
    width 8rem
    height 8rem
    border-color hsla(233,65%,90%,0.15)
    border-width 2px
  .inner
    width 6rem
    height 6rem
    color var(--dark-txt)
    font-family var(--ff-brand)
    font-size 5rem
    font-weight var(--fw-bold)
    text-shadow hsla(233,100%,70%,1) 0 0 2rem

.launch-progress__circle
  width 12rem
  height 8rem
  border-radius 0.25rem
  background hsla(233,50%,5%,0.75)
  display flex
  flex-flow column nowrap
  align-items center
  justify-content center
  animation pulse-mobile 1s infinite alternate ease-in-out
  .key, .value
    line-height 1
  .key
    font-size 1.25rem
    color var(--dark-dim)
  .value
    font-size 3rem
    font-family var(--ff-brand)
    color var(--dark-txt)
    font-weight var(--fw-bold)
    margin-bottom 0.5rem

@keyframes pulse-mobile
  0%
    transform scale(0.475)
  100%
    transform scale(0.5)

@keyframes pulse-tablet
  0%
    transform scale(0.7125)
  100%
    transform scale(0.75)

.launch-header__title
.launch-steps__steps
  margin-bottom var(--pad320)

.launch-header__title
  .h3
    color var(--primary)
    margin-bottom 0.5rem
  .h1
    color var(--dark-txt)

.launch-steps__steps
  min-width 0

.launch-steps__step
  margin-bottom 0.5rem
  height 4rem
  border-radius 0.25rem
  display flex
  align-items center

  position relative

  .launch-step-status
    position absolute
    top 0.5rem
    right -1rem
    margin-top -1rem
    width 2rem
    height 2rem

    display flex
    align-items center
    justify-content center
    border-radius 1rem
    transform scale(0.75)
    img
      width 1.25rem

  &.complete .launch-step-status
    background var(--success)

  &:not(.complete) .launch-step-status
    background var(--app-fg)

.launch-header__title
.launch-steps__steps
  margin-bottom var(--pad320)

.launch-header__title
  .h3
    color var(--primary)
    margin-bottom 0.5rem
  .h1
    color var(--dark-txt)

.launch-header__text
  position relative
  z-index var(--z-list-item)

.launch-steps__steps
  min-width 0

.launch-steps__step
  margin-bottom 0.5rem
  height 4rem
  border-radius 0.25rem

  display flex
  align-items center

  padding-right 1rem

  font-family var(--ff-brand)

  background var(--app-bg)
  color var(--txt)

  .key
    font-size 1.5rem
    flex 0 0 2.25rem
    text-align center
    line-height 4rem
    margin-right 0.75rem
    border-right 1px solid var(--bc)

  .value
    min-width 0
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

  &.complete
    color var(--dark-txt)
    background hsla(0,0,0,50%)

.faqs
  list-style square
  padding-left 1.5rem
  li
    strong
      display block
    &:not(:last-child)
      margin-bottom 1rem
    a
      display block

.launch-box
.launch-section
  padding 2rem

.launch-box
  box-shadow 0 2px 0.5rem hsla(0,0,0,0.25)
  border-radius 0.25rem
  margin-bottom 1.75rem
  .h2
    color var(--primary)

.launch-box--twitter
  position relative
  background var(--twitter)
  color var(--dark-txt)
  display flex
  align-items center
  font-family var(--ff-brand)
  font-size 1.25rem
  &:hover
    color var(--dark-txt)
  img
    width 2rem
    margin-right 0.5rem

.launch-section
  background var(--app-fg)
  &:not(:last-child)
    margin-bottom 1.75rem
  .warning
    border-left 0.5rem solid var(--danger)
    padding 0.75rem
    background hsl(0,100%,95%)
    font-size 0.875rem
    color #4d0000
    &:not(:last-child)
      margin-bottom 1rem
    a
      font-weight var(--fw-bold)

.launch-social-media
  display flex
  flex-flow row wrap
  margin -1rem
  margin-bottom calc(var(--pad320) - 1rem)
  a
    display flex
    align-items center
    padding 1rem
  span
    color var(--txt)
  img
    height 2.5rem
    display block
    padding-right 0.75rem

@media screen and (max-width: 374px)
  .page-launch
    .tm-section__main
      padding-left 1rem
      padding-right 1rem

@media screen and (min-width: 375px)
  .launch-steps__step .launch-step-status
    transform scale(1)

  .launch-box--twitter
    font-size 1.5rem
    img
      width 3rem
      margin-right 0.75rem

@media screen and (max-width: 414px)
  .launch-action
    .tm-btn
      width 100%

@media screen and (min-width: 768px)
  .launch-header
    .tm-section__image
      margin-bottom -10vh

  .launch-header__foreground
    width 100vw
    background-size 1024px auto

  .launch-box--twitter
    img
      margin-right 1rem

  .launch-steps__step
    margin-bottom 0.75rem
    .key
      flex 0 0 4rem
      margin-right 1rem
      font-size 2rem

    .launch-step-status
      top 50%
      right 1rem
      margin-top -1rem
      width 2rem
      height 2rem

      display flex
      align-items center
      justify-content center

  .launch-progress
    bottom 7.5vh

  .launch-progress .b1
  .launch-progress__circle
    animation pulse-tablet 1s infinite alternate ease-in-out

    animation pulse-tablet 1s infinite alternate ease-in-out

  .launch-action
    display flex
    align-items center
    .tm-btn
      margin-bottom 0

@media screen and (min-width: 1024px)
  .launch-header
    background url('~images/site/bg-tile-stars.svg'), linear-gradient(to bottom, hsl(260,60%,15%), hsl(233,40%,50%)) !important
    background-size 256px 256px, auto !important

    .tm-section__main
      padding-bottom 3rem

  .launch-header__title
    position absolute
    top var(--pad768)
    left var(--pad1280)
    width 18rem

  .launch-progress
    bottom calc(var(--pad768) - 2rem)
    margin-left calc(-25vw - 6rem)

@media screen and (min-width: 1152px)
  .launch-header__foreground
    background-size 101% auto

  .launch-header__text
    margin-bottom var(--pad320)

  .page-launch__main
    display flex
    flex-flow row-reverse nowrap
    margin calc(-0.5 * 1.75rem)

  .page-launch__primary
    flex 3
    margin calc(0.5 * 1.75rem)

  .page-launch__secondary
    flex 2
    margin calc(0.5 * 1.75rem)


@media screen and (min-width: 1280px)
  .launch-header .tm-section__main
    padding-bottom 4.5rem

  .launch-header__title
    width 20rem
    .h1
      font-size 3rem
@media screen and (min-width: 1920px)
  .launch-header .tm-section__main
    padding-bottom 6rem
  .launch-header__title
    left var(--pad1920)
</style>
