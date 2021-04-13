<template lang="pug">
div
  tm-section.component__hero__container(theme="dark" layout="split")
    div(slot="suptitle") Contributors
    div(slot="title").title Grab your spacesuit
    div(slot="subtitle").subtitle Contributors, assemble! Like a Space Program, becoming a Cosmonaut means that you are not only at the forefront of the blockchain space race but you are pushing the boundaries into deep space exploration itself.
    img(slot="image" src="~images/community/community-section-cosmonaut.svg" alt="Cosmonauts").cosmonauts-img

  tm-section
    div(slot="title") Community Contributors Microgrants
    div(slot="subtitle").section-width Apply for a microgrant to kickstart your adventure into the Cosmos.
    .grants-section
      .panel
        img(src="~/assets/images/contributors/icon-code-editor.svg" alt="code editor icon").panel__icon
        .panel__title Build something
        ul.panel__list
          li.panel__list__item Build an integration
          li.panel__list__item Translate documentation
          li.panel__list__item Create tutorials
          li.panel__list__item Other contributions
        tm-btn(value="Apply" size="lg" color="primary" type="anchor" href="https://github.com/interchainio/funding" target="blank_" rel="noopener noreferrer").panel__btn
        .panel__footer
          .panel__footer__text Applications funded and processed by
          a(href="https://interchain.io" target="_blank" rel="noreferrer noopener")
            img(src="/images/logos/icf-horizontal-logo.svg" alt="ICF horizontal logo").panel__footer__logo
      .panel
        img(src="~/assets/images/contributors/icon-calendar-event.svg" alt="show icon").panel__icon
        .panel__title Host an event
        ul.panel__list
          li.panel__list__item Host a meetup / workshop
          li.panel__list__item Host a conference / hackathon
          li.panel__list__item Create a VR world
          li.panel__list__item Other events
        tm-btn(value="Apply" size="lg" color="primary" type="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLSfg8OrPeuRciyW8Iw-BW7JEvZvr_7ZYXQTpLeXXfzbxUwBM_w/viewform" target="blank_" rel="noopener noreferrer").panel__btn
        .panel__guidelines
          a(href="https://docs.google.com/document/d/1A0niIiQi5uZ2PwKS3YCzS5px7fRcNeXFwLrO-t11tsY" target="_blank" rel="noreferrer noopener") Guidelines for meetups &#8599;
        .panel__footer
          .panel__footer__text Applications funded and processed by
          a(href="https://www.tendermint.com" target="_blank" rel="noreferrer noopener")
            img(src="/images/logos/tendermint-logo-horizontal.svg" alt="Tendermint horizontal logo").panel__footer__logo
      .panel
        img(src="~/assets/images/contributors/icon-play-movie.svg" alt="play movie icon").panel__icon
        .panel__title Create media / content
        ul.panel__list
          li.panel__list__item Product / marketing video
          li.panel__list__item GIF / animation
          li.panel__list__item Technical blog post
          li.panel__list__item Other media
        tm-btn(value="Submit" size="lg" color="primary" type="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLSfhrKufDANtlOM66PxLz2HYdGruj5V7WP0oRuG8RvgJIx8kBw/viewform" target="blank_" rel="noopener noreferrer").panel__btn
        .panel__guidelines
          a(href="https://docs.google.com/document/d/1e0JTy2Xn4nywW24IneFLCAd9d2rEnyfBUv0yoWxKuEU" target="_blank" rel="noreferrer noopener") Guidelines for media and content &#8599;
        .panel__footer
          .panel__footer__text Submissions funded and processed by
          a(href="https://www.tendermint.com" target="_blank" rel="noreferrer noopener")
            img(src="/images/logos/tendermint-logo-horizontal.svg" alt="Tendermint horizontal logo").panel__footer__logo

    tm-box.tm-box--outline
      div(slot="main") #[strong Got something else to contribute?] We'd love to hear about it! #[a(href="mailto:hello@tendermint.com" target="_blank" rel="noreferrer noopener") Get in touch with Tendermint].

  tm-section
    div(slot="title") Resources
    div(slot="subtitle").section-width Here are some materials you can use to run your own community meetup, create Cosmos-related content, or build your own Cosmos project.
    .tm-cards-hz.tm-cards-hz--landscape
      tm-card-hz(
        icon="img-stack"
        iconType="svg"
        landscape="true"
        subtitle="Cosmos logos"
        title="Cosmos Design Kit"
        href="https://drive.google.com/open?id=1q1b9IhlxGHBG7wRByuBISHULu5o_D3hO")
      tm-card-hz(
        icon="img-stack"
        iconType="svg"
        landscape="true"
        subtitle="Tendermint logos"
        title="Tendermint Design Kit"
        href="https://drive.google.com/open?id=1rLKHqZvYDJX1nlneYtMnnZDFzhQTD9wM")
      tm-card-hz(
        icon="voice-record"
        iconType="svg"
        landscape="true"
        subtitle="Speaker headshots and bios"
        title="Cosmos Speakers Kit"
        href="https://drive.google.com/open?id=1bPeSP_uakN0sfi3Q71KJZaq20AgO5mlR")
      tm-card-hz(
        icon="news"
        iconType="svg"
        landscape="true"
        subtitle="Essential Cosmos info for publications"
        title="Press Kit"
        :to="{ name: 'presskit' }")
      tm-card-hz(
        icon="fireworks"
        iconType="svg"
        landscape="true"
        subtitle="Host your own launch party"
        title="Launch Party Kit"
        href="https://drive.google.com/open?id=1ZdpF92qTk70tlPabh4j4_ceE2wtaGItr")

</template>

<script>
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"
import TmBox from "common/TmBox"

export default {
  name: "page-contributors",
  metaInfo: { title: "Contributors" },
  components: {
    TmSection,
    TmBtn,
    TmCardHz,
    TmBox
  }
}
</script>

<style lang="stylus" scoped>
.cosmonauts-img
  position absolute
  bottom 0
  right 5%

.section-width
  max-width 38.25rem

.title
  font-size 3rem
  line-height 4rem
  font-weight 300

.subtitle
  font-size 1.125rem
  line-height 1.6875rem
  letter-spacing var(--tracking-1-tight)
  color #BFBFBF

.component__hero__container
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(144.85deg,#202854 9.49%,#070811 91.06%)
  background-size 256px 256px, auto
  padding-top 4rem

.tm-box--outline
  margin-top 4rem

.grants-section
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 2rem
  margin-top 4rem
  .panel
    &__icon
      width 4rem
      height 4rem
    &__title
      margin-top 1.5rem
      font-weight var(--fw-semibold)
      font-size 1.5rem
      line-height 2rem
      letter-spacing var(--tracking-0)
      color #000000
    &__list
      margin-top 24px
      display block
      list-style-image url('/images/icons/icon-rect.svg')
      margin-left 0
      margin-right 0
      padding-left 1.25rem
      &__item
        margin-top 0.75rem
        font-size 1rem
        line-height 1.5rem
        color #000000
        padding-left 0.5rem
    &__btn
      margin-top 2rem
    &__guidelines
      margin-top 2rem
      font-size 1rem
      line-height 1.5rem
    &__footer
      margin-top 2rem
      &__text
        font-size 1rem
        line-height 1.5rem
        color rgba(0, 0, 0, 0.667)
      &__logo
        margin-top 1rem

@media screen and (max-width: 1023px)
  /deep/
    .tm-section__container
      padding-bottom 0

  .tm-box--outline
    margin-top 4rem
    margin-bottom 5.75rem

  .cosmonauts-img
    position static

  .grants-section
    grid-template-columns repeat(2, 1fr)
    grid-row-gap 4rem

@media screen and (max-width: 900px)
  .grants-section
    grid-template-columns repeat(1, 1fr)
    grid-row-gap 6rem
</style>
