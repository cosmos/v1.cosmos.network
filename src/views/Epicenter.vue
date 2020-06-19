<template lang="pug">
.page-epicenter
  .epicenter
    .epicenter-container
      .epicenter-alert
        .epicenter-alert__image
          img(src="~images/epicenter/epicenter-podcast-logo.jpg" alt="Epicenter podcast logo")
        .epicenter-alert__text
          p Welcome to Cosmos, Epicenter listeners! We’re glad to have you with us. If you don’t know anything about Cosmos, we recommend starting with #[router-link(:to="{ name: 'intro' }") What is Cosmos]
      .epicenter__content
        .epicenter__graphic
          h1 We solve blockchain #[strong scalability]
        .epicenter__text
          p #[strong Building a dApp?] Consider using the Cosmos SDK. We can help you reduce transaction costs and scale your dApp to millions of users. Talk to us!
          p Get a free 30 minute consultation:
          tm-btn(type="anchor" value="Schedule a call" size="lg"
            color="primary" target="_blank" rel="noreferrer noopener" icon="event" icon-pos="right"
            href="https://goo.gl/forms/EpDXDErxP3ORAnKq2")
  tm-section
    div(slot="title") Do you have a passion for blockchain?
    p Tendermint is #[a(href="https://jobs.lever.co/tendermint") actively hiring] talent to help build and grow the Cosmos Network. We’re hiring for development, operations, and community management roles.

  tm-section
    div(slot="title") Exclusive Promotion
    div(slot="subtitle") This offer is only valid for people who listen to the #[a(href="https://epicenter.tv/") Epicenter Podcast].
</template>

<script>
import TmBtn from "common/TmBtn"
import TmSection from "common/TmSection"
export default {
  name: "page-epicenter",
  metaInfo: {
    title: "Epicenter"
  },
  components: {
    TmBtn,
    TmSection
  },
  computed: {},
  data: () => ({})
}
</script>

<style lang="stylus">
.epicenter-alert
  display flex
  background linear-gradient(90deg, #00949D, hsla(233,30%,50%,0.25) 90%)
  color var(--dark-txt)
  border-radius 0.25rem

.epicenter-alert__image img
  width 3rem
  display block
  border-radius 0.25rem 0 0 0.25rem

.epicenter-alert__text
  flex 1
  padding 0.5rem
  font-size 0.75rem
  line-height var(--lh-heading)
  a
    font-weight var(--fw-bold)
    color var(--dark-txt)
    text-decoration underline

.epicenter
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(to bottom, hsl(258,60%,15%), hsl(233,40%,47%)) !important
  background-size 256px 256px, auto
  color var(--dark-txt)

.epicenter-container
  padding var(--pad320)

.epicenter__graphic
  padding var(--pad320) 0
  h1
    font-size 3rem
    line-height 1.125
    font-family var(--ff-brand)
    font-weight var(--fw-regular)

.epicenter__text
  p
    margin-bottom 1.5rem

.epicenter-alert__text
.epicenter__text
  p
    max-width 40rem

@media screen and (min-width:768px)
  .epicenter-alert__image img
    width 4rem

  .epicenter-alert__text
    font-size 0.875rem

  .epicenter-container
    padding var(--pad768)

  .epicenter__graphic h1
    font-size 4rem
    max-width 8em

  .epicenter__text
    font-size 1.5rem
    font-family var(--ff-brand)
    font-weight var(--fw-regular)
    p
      margin-bottom var(--pad320)

@media screen and (min-width:1024px)
  .epicenter-alert__text
    font-size 1rem
    line-height var(--lh-paragraph)

  .epicenter__content
    display flex
    padding calc(var(--pad320) * 2) 0 var(--pad320)

  .epicenter__graphic
  .epicenter__text
    flex 1

  .epicenter__graphic
    padding 0

@media screen and (min-width:1280px)
  .epicenter-container
    padding-left var(--pad1280)
    padding-right var(--pad1280)

@media screen and (min-width:1920px)
  .epicenter-container
    padding-left var(--pad1920)
    padding-right var(--pad1920)
</style>
