<template lang="pug">
div
  tm-section.component__hero__container(theme="dark" layout="hero")
    div(slot="goz-wordmark")
    div(slot="title").title #[strong Mission complete]
    div(slot="subtitle").subtitle By the team who brought you last year’s Game of Stakes, Game of Zones is another series of adversarial testnet challenges designed to prepare the Cosmos ecosystem for the upcoming launch of the #[router-link(:to="{ name: 'ibc' }") IBC module].
    div(slot="subtitle").subtitle #[br] The competition ended on June 6, 2020, with a prize pool of #[strong 100,000 ATOMs] to be distributed amongst winners.
    tm-btn(size="lg" value="learn more" type="anchor" icon="call_made" icon-pos="right" href="https://goz.cosmosnetwork.dev" target="_blank" rel="noreferrer noopener")
    div(slot="image")
      img.phone.tablet(src="~assets/images/home/section-goz-brandmark.svg" alt="GoZ hero image")
      img.laptop(src="~assets/images/home/section-goz-brandmark.svg" alt="GoZ hero image")
      img.desktop(src="~assets/images/home/section-goz-brandmark.svg" alt="GoZ hero image")

  tm-section(theme="dark")
    div(slot="title") Winners
    .winner-container
      .weekly-challenge
        .grid
          .text
            .h1 Weekly Challenge
          .content
            .content__card
              img(src="~assets/images/goz/trophy-octagon.svg").content__card__img
              .content__card__h1 Phase 1a
              .content__card__list Aurel | Dokia Capital
              .content__card__list IRISnet
              .content__card__list P2P Validator
              .content__card__list Sentinel
            .content__card
              img(src="~assets/images/goz/trophy-octagon.svg").content__card__img
              .content__card__h1 Phase 1B
              .content__card__list Kira Core
            .content__card
              img(src="~assets/images/goz/trophy-octagon.svg").content__card__img
              .content__card__h1 Phase 2
              .content__card__list Sentinel
            .content__card
              img(src="~assets/images/goz/trophy-octagon.svg").content__card__img
              .content__card__h1 Phase 3
              .content__card__list P2P Validator
        .cumulative-challenges
          .grid
            .text
              .h1 Cumulative Challenges
            .info
              .info__row(v-for="i in awards")
                img(src="~assets/images/goz/medal-octagon.svg").info__row__img
                .info__row__award {{ i.type }}
                .info__row__project {{ i.name }}
        .liveness-reward
          .grid
            .text
              .h1 Liveness Reward
            .info
              .info__col(v-for="i in liveness")
                .info__col__name {{i}}

  tm-section(theme="dark")
    div(slot="title") Explore the GoZ network
    div(slot="subtitle").subtitle Check out some of the stunning visualizers and applications built by the Cosmos community.
    .tm-cards-hz
      tm-card-hz(
        v-for="i in visualizers"
        flush="true"
        theme="dark"
        :key="i.id"
        :title="i.title"
        :img-src="i.imgUrl"
        :href="i.url")
        template(slot="subtitle") {{ i.description }}

  tm-section(theme="dark")
    div(slot="title") Revisit GoZ
    div(slot="subtitle").subtitle Take a look back on the resources provided for Game of Zones.
    .resources-container
      .left-item
        iframe(src="https://www.youtube.com/embed/1S-h1jl7B9o?autoplay=0&controls=1&rel=0&modestbranding=1&fs=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      a(href="https://github.com/cosmosdevs/gameofzones" target="_blank" rel="noreferrer noopener").right-item
        img.top-right-logo(src="~assets/brands/color/github-grey.svg" alt="Github")
        .text
          .text__title Explore the repo
          .text__desc cosmosdevs/GameOfZones
      a(href="https://twitter.com/cosmosdevs" target="_blank" rel="noreferrer noopener").right-item
        img.top-right-logo(src="~assets/brands/color/twitter-grey.svg" alt="Twitter")
        .text
          .text__title Communications
          .text__desc Follow @cosmosdevs on Twitter

  cosmos-newsletter-signup(v-bind="{...newsletter}")
    template(v-slot:icon)
      icon-ibc
    template(v-slot:h1) Sign up for updates on IBC
    template(v-slot:p1) Get engineering, development and ecosystem updates on IBC (Inter-Blockchain Communciation protocol) - straight to your inbox.
</template>

<script>
import { mapGetters } from "vuex"
import { CosmosNewsletterSignup, IconIbc } from "@cosmos-ui/vue"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"

export default {
  name: "page-goz",
  metaInfo: { title: "Game of Zones" },
  components: {
    TmSection,
    TmBtn,
    TmCardHz,
    CosmosNewsletterSignup,
    IconIbc
  },
  computed: {
    ...mapGetters(["visualizers", "liveness"])
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
      },
      awards: [
        {
          type: "Best Custom Zone",
          name: "FreeFlix Media"
        },
        {
          type: "Most Innovative / Deceptive State Machine",
          name: "IRISnet"
        },
        {
          type: "Creative Zone",
          name: "Stakefish"
        },
        {
          type: "Gaia Award",
          name: "Agoric"
        },
        {
          type: "Most packets sent",
          name: "Stakefish"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  color var(--secondary)
  text-decoration none

.subtitle
  color #BFBFBF
  font-size 1.125rem
  line-height 1.6875rem
  letter-spacing var(--tracking-0)

.component__hero__container
  background-image url('~assets/images/home/section-gameofzones.jpg')
  background-size cover
  background-repeat no-repeat
  background-position center center

  .title
    font-weight var(--fw-regular)
    font-size 2rem
    line-height 2.5rem

  .suptitle
    text-transform uppercase
    font-weight var(--fw-bold)
    font-size 1rem
    line-height 1.25rem
    letter-spacing var(--tracking-2-wide)

.winner-container
  .weekly-challenge
    .grid
      display grid
      grid-template-columns 30% 70%
      grid-template-rows 1fr
      align-items center
      .text
        align-self baseline
        .h1
          font-size 1.5rem
          line-height 2rem
          letter-spacing -0.01em
          color #FFFFFF
      .content
        display grid
        gap 2rem
        grid-template-columns repeat(4, 1fr)
        &__card
          text-align left
          &__img
            width 5rem
            height 5rem
            margin-bottom 1.5rem
          &__h1
            font-weight bold
            font-size 1rem
            line-height 1.25rem
            letter-spacing 0.07em
            text-transform uppercase
            color #FFFFFF
            margin-bottom 1.5rem
          &__list
            font-size 1rem
            line-height 1.5rem
            color #BFBFBF
            margin-bottom 0.25rem

  .cumulative-challenges
    margin-top 5.75rem
    .grid
      .text
        align-self baseline
        .h1
          font-size 1.5rem
          line-height 2rem
          letter-spacing -0.01em
          color #FFFFFF
      .info
        &__row
          display grid
          grid-auto-flow column
          grid-template-columns 5rem 52% auto
          gap 2rem
          align-items center
          font-size 1.125rem
          line-height 1.75rem
          letter-spacing -0.01em
          padding-bottom 1rem
          padding-top 2.5rem
          padding-bottom 2.5rem
          border-bottom 1px solid rgba(255, 255, 255, 0.1)
          &:first-child
            border-top 1px solid rgba(255, 255, 255, 0.1)
          &__img
            width 3rem
            height 3rem
          &__award
            font-weight bold
            font-size 0.75rem
            line-height 1.125rem
            letter-spacing 0.12em
            text-transform uppercase
            color #FFFFFF
          &__project
            font-size 1.125rem
            line-height 1.6875rem
            display flex
            align-items center
            letter-spacing -0.01em
            color #BFBFBF

  .liveness-reward
    margin-top 5.75rem
    .grid
      .text
        align-self baseline
        .h1
          font-size 1.5rem
          line-height 2rem
          letter-spacing -0.01em
          color #FFFFFF
      .info
        display grid
        grid-template-columns auto auto auto
        gap 0.75rem
        &__col
          &__name
            font-size 0.875rem
            line-height 1.25rem
            letter-spacing 0.01em
            color #BFBFBF

.resources-container
  display grid
  gap 2rem
  grid-template-columns repeat(4, 1fr)
  grid-auto-rows 5rem
  margin 0 auto

  .left-item
    background-color rgb(22, 25, 49)
    grid-area span 4 / span 2 / auto / auto
    border-radius 0.5rem
    padding-top 1.5625rem
    padding-bottom 56.25% /* 16:9 */
    height 0
    position relative

    iframe
      border-radius 0.5rem
      top 0
      left 0
      width 100%
      height 100%
      position absolute

  .right-item
    grid-area span 2 / span 2 / auto / auto
    border-radius 0.5rem
    position relative

    &:nth-child(2)
      background linear-gradient(180deg, #9214B1 0%, #3A1075 100%)

    &:nth-child(3)
      background linear-gradient(180deg, #3B1075 0%, #0E0E56 100%)

    img.top-right-logo
      position absolute
      width 3rem
      height 3rem
      top 1.5rem
      right 1.5rem

    .text
      position absolute
      left 1.5rem
      bottom 1.5rem
      word-break break-word
      display flex
      flex-direction column

      &__title
        color var(--dark-txt)
        font-weight var(--fw-semibold)
        font-size 1.125rem
        line-height 1.6875rem

      &__desc
        color var(--dark-dim)
        font-size 0.875rem
        line-height 1.25rem

@media screen and (max-width: 900px)
  .winner-container
    .weekly-challenge, .cumulative-challenges, .liveness-reward
      .grid
        display block
        .text
            margin-bottom 2rem

  .winner-container .weekly-challenge .grid .content
    grid-template-columns auto auto
    &__card
      margin 2rem
      text-align left

  .winner-container .cumulative-challenges .grid .info__row
    display block

  .winner-container .liveness-reward .grid .info
    grid-template-columns auto auto

@media screen and (max-width: 600px)
  .tm-btn
    display block !important

  .resources-container
    grid-template-columns repeat(2, 1fr)

  .winner-container .weekly-challenge .grid .content
    grid-template-columns auto auto

@media screen and (max-width: 592px)
  .resources-container
    .left-item
      grid-area span 3 / span 2 / auto / auto

    .right-item
      grid-area span 2 / span 2 / auto / auto

      .text
        left 1rem
        bottom 1rem

@media screen and (max-width: 460px)
  .winner-container .weekly-challenge .grid .content
    grid-template-columns auto
    &__card
      margin 1rem
      text-align center

@media screen and (max-width: 414px)
  .resources-container
    gap 3rem

    .left-item
      grid-area span 2 / span 2 / auto / auto

  .winner-container .liveness-reward .grid .info
    grid-template-columns auto
</style>
