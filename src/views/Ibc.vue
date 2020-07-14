<template lang="pug">
div
  tm-section.section-hero-star-color(theme="dark" layout="hero")
    app-launch-banner
    div(slot="suptitle" :style="`marginTop: 8rem`") Coming soon &#x2026;
    div(slot="title")
      .phone Inter-Blockchain Communication
      .tablet.laptop.desktop Inter-Blockchain Communication
    div(slot="subtitle") The interoperability protocol connecting the global economy to blockchain technology
    tm-btn(size="lg" value="get updates" type="anchor" icon="arrow_forward"
      icon-pos="right" color="primary" href="https://zc.vg/sf/zI6BW" target="_blank" rel="noreferrer noopener")
    tm-btn(size="lg" value="learn more" v-scroll-to="'.section-hero-black'"
      icon="arrow_downward" icon-pos="right")
    div(slot="image")
      img.phone.tablet(src="~assets/images/home/section-ibc-brandmark.svg" alt="IBC hero image")
      img.laptop(src="~assets/images/home/section-ibc-brandmark.svg" alt="IBC hero image")
      img.desktop(src="~assets/images/home/section-ibc-brandmark.svg" alt="IBC hero image")

  tm-section.section-hero-black(theme="dark" layout="center")
    div(slot="title") Building the Internet of Money
    div(slot="subtitle").section-subtitle The protocols that power the Internet are great for information transfer, but they were never designed for money and other digital assets. Enter the Inter-Blockchain Communication (IBC) protocol. The proposed IBC standard provides the foundation for a new token economy, permitting anyone around the world to accomplish quick and secure exchanges. #[br]#[br] Now the global economy can connect to the blockchain, and parties on existing blockchains can interact and exchange with each other across chains.

  .section-hero-star-dark
    div.image(slot="image")
      img.ibc-web.phone.tablet(src="~assets/images/home/section-ibc-web.svg" alt="IBC web image")
      img.ibc-web.laptop(src="~assets/images/home/section-ibc-web.svg" alt="IBC web image")
      img.ibc-web.desktop(src="~assets/images/home/section-ibc-web.svg" alt="IBC web image")

  tm-section.section-hero-dark-blue(theme="dark" layout="center")
    div(slot="title") How IBC changes everything
    div(slot="subtitle").section-subtitle Connecting blockchains is at the heart of interoperability.
    .tm-cards-grid
      tm-card-icon(title="Community Empowerment" subtitle="IBC gives communities the ability to build new economic instruments. It now allows any small group of people to launch a fast blockchain and connect it to a global ecosystem." icon="globe")
      tm-card-icon(title="Multi-Language" subtitle="IBC is supported by a growing number of open-source blockchain frameworks, all written in different programming languages. Developers can build with the stack they're most familiar with." icon="code")
      tm-card-icon(title="Decentralized Finance" subtitle="IBC empowers the community to extend the Cosmos Network with new tokens, protocols, cryptography, or other financial instruments." icon="defi")

  tm-section.section-hero-star-dark(theme="dark" layout="center")
    div(slot="title") Meet the IBC team
    div(slot="subtitle").section-subtitle The IBC team is a cross-organizational effort that incorporates members from #[a(href="https://tendermint.com" target="_blank" rel="noreferrer noopener") Tendermint], #[a(href="https://interchain.io" target="_blank" rel="noreferrer noopener") Interchain Foundation], and #[a(href="https://agoric.com" target="_blank" rel="noreferrer noopener") Agoric].
    ul
      li
        img.profile-img(src='~assets/images/ibc/team-mark.jpg')
        div.team-profile
          p.name Mark Miller
          p.title Chief Scientist
          p.company Agoric
      li
        img.profile-img(src='~assets/images/ibc/team-jae.jpg')
        div.team-profile
          p.name Jae Kwon
          p.title CTO & Founder of Cosmos
          p.company Tendermint
      li
        img.profile-img(src='~assets/images/ibc/team-christopher.jpg')
        div.team-profile
          p.name Christopher Goes
          p.title Researcher / IBC Lead
          p.company Interchain Berlin
      li
        img.profile-img(src='~assets/images/ibc/team-dean.jpg')
        div.team-profile
          p.name E. Dean Tribble
          p.title CEO
          p.company Agoric
      li
        img.profile-img(src='~assets/images/ibc/team-ethan.jpg')
        div.team-profile
          p.name Ethan Buchman
          p.title CEO
          p.company Informal
      li
        img.profile-img(src='~assets/images/ibc/team-zaki.jpg')
        div.team-profile
          p.name Zaki Manian
          p.title Co-founder
          p.company Iqlusion
      li
        img.profile-img(src='~assets/images/ibc/team-brian.jpg')
        div.team-profile
          p.name Brian Warner
          p.title Software Developer
          p.company Agoric
      li
        img.profile-img(src='~assets/images/ibc/team-chris.jpg')
        div.team-profile
          p.name Chris Hibbert
          p.title Software Engineer
          p.company Agoric
      li
        img.profile-img(src='~assets/images/ibc/team-joon.jpg')
        div.team-profile
          p.name Joon Yun
          p.title Software Developer
          p.company Tendermint
      li
        img.profile-img(src='~assets/images/ibc/team-haifeng.jpg')
        div.team-profile
          p.name Haifeng Xi
          p.title CTO
          p.company IRISnet
      li
        img.profile-img(src='~assets/images/ibc/team-anca.jpg')
        div.team-profile
          p.name Anca Zamfir
          p.title Distributed Systems Engineer
          p.company Informal
      li
        img.profile-img(src='~assets/images/ibc/team-fede.jpg')
        div.team-profile
          p.name Federico Kunze
          p.title Software Developer
          p.company Interchain Berlin

    .ibc-working-group-container
      .left
        img(src="~assets/images/sdk/icon-ibc-grid-light.svg").left-img
      .mid
        .title Join the IBC Working Group
        .subtitle Discuss the future of IBC with the team building it.
      .right
        a(href="https://zc.vg/sf/zI6BW" target="_blank" rel="noreferrer noopener").chevron-text
          span Join working group

  tm-section.section-hero-dark(theme="dark" layout="center")
    div(slot="title") Frameworks committed to IBC support
    tm-base-grid(:value="frameworks")

  tm-section.section-hero-star-dark(theme="dark" layout="center")
    div(slot="title") Make an impact
    div(slot="subtitle").section-subtitle Now’s the time to get involved in building the future of blockchain standards. #[br]#[br] IBC requires cross-industry collaboration to support developing standards that are secure, open, and deployable. The IBC working group is a growing team of contributors supporting the standardization of blockchain development from protocol level to applications.
    .tm-impact-cards-grid
      .impact-card
        img.top-right-logo(src="~assets/brands/color/ibc-grey.svg" alt="IBC")
        h1 IBC Working Group
        p Get updates on Working Group activity.
        a(href="https://zc.vg/sf/zI6BW" target="_blank" rel="noreferrer noopener")
          span Join working group
      .impact-card
        img.top-right-logo(src="~assets/brands/color/github-grey.svg" alt="Github")
        h1 Interchain Standards
        p Standards for the Cosmos network &amp; interchain ecosystem.
        a(href="https://github.com/cosmos/ics" target="_blank" rel="noreferrer noopener")
          span Explore on Github

  tm-section.section-hero-dark(theme="dark" layout="center")
    div(slot="title") Learn more about IBC
    tm-base-grid(:value="resources")

  cosmos-newsletter-signup(v-bind="{...newsletter}")
    template(v-slot:icon)
      icon-ibc
    template(v-slot:h1) Sign up for updates on IBC
    template(v-slot:p1) Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.
</template>

<script>
import { mapGetters } from "vuex"
import AppLaunchBanner from "common/AppLaunchBanner"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import TmBaseGrid from "common/TmBaseGrid"
import TmCardIcon from "cards/TmCardIcon"
import { CosmosNewsletterSignup, IconIbc } from "@cosmos-ui/vue"

export default {
  name: "page-ibc",
  metaInfo: { title: "Inter-Blockchain Communication" },
  components: {
    AppLaunchBanner,
    TmHeader,
    TmSection,
    TmBtn,
    TmBaseGrid,
    TmCardIcon,
    CosmosNewsletterSignup,
    IconIbc
  },
  computed: {
    ...mapGetters(["frameworks", "resources"])
  },
  created() {
    this.$emit("newsletter", false)
  },
  data() {
    return {
      newsletter: {
        h1: "Sign up for IBC updates",
        h2:
          "Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.",
        requestURL: "https://app.mailerlite.com/webforms/submit/y2i9q3",
        callback: "jQuery183003200065485233239_1594158714190",
        _: "1594158730789",
        svg: "/images/icons/icon-ibc.svg",
        background:
          'url("/images/background-stars.svg") repeat, linear-gradient(137.58deg, #161931 9.49%, #2D1731 91.06%)'
      }
    }
  }
}
</script>

<style lang="stylus">
.launch-banner
  background linear-gradient(90deg, #232652, rgba(48, 24, 99, 0.3))
</style>

<style lang="stylus" scoped>
a
  color var(--secondary)

.section-hero-star-color
  background-image url('~images/site/bg-tile-stars-multicolor.svg'), linear-gradient(62deg, #0F0D20 9.73%, #040405 32.37%, #21224D 54.16%, #6944B7 91.75%)

.section-hero-star-dark
  background-image url('~images/site/bg-tile-stars-multicolor.svg'), linear-gradient(rgb(5, 5, 7, 0.6))
  position relative

  &:before
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background linear-gradient(180deg, rgb(5, 5, 7) 5%, rgba(5, 5, 7, 0) 60%)

  .image
    position relative

  img.ibc-web
    max-width 100%
    width 98vw
    margin-left auto
    margin-right auto
    margin-bottom 0rem

.section-hero-black
  background-color #050507

.section-hero-dark
  background-color var(--dark-bg)

.section-hero-dark-blue
  background-color #0B0C17

// created custom subtitle class because .tm-section__subtitle affects index.vue, community.vue, ecosystem.vue
.section-subtitle
  max-width 32rem
  display inline-block
  color rgba(255, 255, 255, 0.8)
  text-align center

.tm-section
  &__subtitle
    max-width 32rem
    display inline-block
    color rgba(255, 255, 255, 0.8)
    text-align inherit

.ibc-working-group-container
  align-items center
  border-radius 8px
  display flex
  flex-wrap wrap
  position relative
  padding 3rem
  background #0B0C17
  color #fff
  top 5rem
  margin-top 2rem
  margin-bottom 2rem

  .left
    display flex
    flex 1 5 150px
    flex-direction column
    align-items flex-start
    text-align right

    .left-img
      padding 1rem
      opacity 0.65

  .mid
    display flex
    flex 3 1 350px
    flex-direction column
    align-items center
    align-items flex-start
    text-align start

    .title
      font-weight var(--fw-bold)
      font-size 32px
      line-height 40px
      letter-spacing var(--tracking-1-tight)

    .subtitle
      margin-top 0.2rem
      font-size 19px
      line-height 28px
      letter-spacing var(--tracking-0)

  .right
    display flex
    flex 1 5 200px
    flex-direction column
    align-items flex-end

    .chevron-text
      color #66A1FF
      text-transform uppercase
      font-size 1.3rem
      font-weight var(--fw-bold)
      text-align left
      transition all 0.15s ease-in

      &:after
        font-family 'Material Icons'
        content '\e5c8'
        padding-left 0.5em
        top 0
        vertical-align bottom
        font-size 1.3rem

      &:hover
        transform translateX(5px)
        transition all 0.5s ease-out
        opacity 0.65

ul
  margin auto
  display grid
  grid-template-columns repeat(3, 3fr)
  row-gap 10rem
  column-gap 10rem
  max-width 35rem

  li
    .profile-img
      float left
      width 6.75rem
      height 6.75rem
      border-radius 4rem

    .team-profile
      position absolute
      top 6.5rem
      left 6rem
      width max-content
      color var(--dark-txt)

      p.name
        text-align start
        font-weight var(--fw-semibold)
        margin-top 0.3rem

      p.title
        text-align start
        font-size 1rem
        margin-top -2rem

      p.company
        text-align start
        font-size 1rem
        font-weight var(--fw-semibold)
        overflow auto
        margin-top -1.8rem

    &:nth-child(1)
      transform translate(-80px, 70px)

    &:nth-child(2)
      transform translateY(50px)

    &:nth-child(3)
      transform translate(50px, 80px)

    &:nth-child(4)
      transform translate(-290px, -30px)

    &:nth-child(5)
      transform translate(-150px, 20px)

    &:nth-child(6)
      transform translate(-40px, 60px)

    &:nth-child(7)
      transform translate(-190px, 0px)

    &:nth-child(8)
      transform translate(10px, 0px)

    &:nth-child(9)
      transform translate(50px, 20px)

    &:nth-child(10)
      transform translate(-300px, -40px)

    &:nth-child(11)
      transform translate(-160px, -110px)

    &:nth-child(12)
      transform translate(-38px, -22px)

.tm-cards-grid
  display grid
  grid-template-columns repeat(3, 1fr)
  justify-content center

.tm-impact-cards-grid
  display grid
  grid-template-columns repeat(2, 1fr)
  justify-content center
  gap 3rem
  padding-left 6rem
  padding-right 6rem
  margin-top 6rem

  .impact-card
    border-radius 0.5rem
    text-align left
    background-color #161931
    display flex
    flex 1 1 1%
    flex-direction column
    overflow hidden
    padding 2rem
    position relative
    width 90%

    img.top-right-logo
      position absolute
      width 3rem
      height 3rem
      top 1rem
      right 1rem

    h1
      font-weight var(--fw-bold)
      font-size 1.2rem
      line-height 2rem
      width fit-content

    p
      400
      font-size 1rem
      color rgba(255, 255, 255, 0.8)
      width fit-content
      max-width 25rem

    a
      color #66A1FF
      font-size 1.2rem
      font-weight var(--fw-bold)
      text-transform uppercase
      width fit-content
      position absolute
      bottom 20px
      transition all 0.15s ease-in

      &:hover
        transform translateX(5px)
        transition all 0.5s ease-out
        opacity 0.65

      &:after
        font-family 'Material Icons'
        content '\e5c8'
        padding-left 0.5em
        top 0
        vertical-align bottom
        font-size 1.3rem

@media screen and (max-width: 1280px)
  ul
    grid-template-columns repeat(3, 3fr)
    row-gap 2rem
    column-gap 1rem
    max-width 75rem

    li
      .profile-img
        padding 1rem

      .team-profile
        position unset
        margin-top 1rem
        width auto

      &:nth-child(odd)
        transform none

      &:nth-child(even)
        transform none

@media screen and (min-width: 1152px)
  .tm-section--hero
    .tm-section__title
      font-size 3rem

    .tm-section__subtitle
      font-size 1.5rem
      max-width 26em
      width 100%

  .tm-section
    &__title
      font-size 3rem
      margin-top 3rem

    &__title + &__subtitle
      margin-top 2.5rem

  .tm-card-icon
    &:nth-child(2)
      margin-top 8rem

@media screen and (max-width: 1029px)
  .ibc-working-group-container
    margin-top 0

    .right
      align-items center

@media screen and (max-width: 1024px)
  .tm-impact-cards-grid
    grid-template-columns repeat(auto-fit, minmax(320px, 1fr))

  ul
    grid-template-columns repeat(2, 3fr)
    row-gap 3rem
    column-gap 3rem

    li
      &:nth-child(odd)
        transform none

      &:nth-child(even)
        transform none

@media screen and (max-width: 920px)
  .tm-cards-grid
    grid-template-columns repeat(1, 1fr)

@media screen and (max-width: 799px)
  .ibc-working-group-container
    .left
      align-items center

    .mid
      align-items center

    .right
      align-items center
      margin-top 1rem

@media screen and (max-width: 767px)
  .ibc-working-group-container
    margin-bottom 6rem

@media screen and (max-width: 640px)
  ul
    grid-template-columns repeat(1, 3fr)
    display inline-grid
    row-gap 2rem
    column-gap 2rem
    width 20rem

    li
      .profile-img
        width 6.75rem
        height 6.75rem

@media screen and (max-width: 600px)
  .ibc-working-group-container
    .mid
      .title
        text-align center

      .subtitle
        text-align center

  .tm-impact-cards-grid
    .impact-card
      width auto

      &:nth-child(2)
        margin-top 2rem
        margin-bottom 3rem

@media screen and (max-width: 500px)
  .ibc-working-group-container
    .mid
      .title
        font-size 1.5rem

      .subtitle
        font-size 0.8125rem

    .right
      .chevron-text
        font-size 1rem
        width max-content

@media screen and (max-width: 375px)
  .ibc-working-group-container
    .mid
      .title
        font-size 1rem

      .subtitle
        font-size 0.9125rem

@media screen and (max-width: 320px)
  .ibc-working-group-container
    .right
      .chevron-text
        width auto

  ul
    grid-template-columns repeat(1, 3fr)
    width -webkit-fill-available
</style>
