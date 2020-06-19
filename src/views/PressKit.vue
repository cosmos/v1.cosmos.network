<template lang="pug">
.page-press-kit
  tm-header
    div(slot="title") Press Kit
    tm-btn(icon="help_outline" value="Cosmos One-Pager" type="anchor" href="https://docs.google.com/document/d/1xSQF5Cq7eMJ411EtitMVb3QKAopnhlesRu_JMm9pWwU" target="_blank")
  .tm-sect-cols
    .tm-sect-col
      tm-section
        div(slot="title") Downloadable Logos
        .tm-logo
          .tm-logo__img.tm-logo__img--black
            img(src="~images/site/cosmos-wordmark-black.svg" alt="Cosmos wordmark black")
          .tm-logo__title Cosmos Wordmark (Black)
          .tm-logo__types
            a(href="/images/logos/cosmos-logo-black.png" target="_blank" rel="noreferrer noopener") PNG format
            a(href="/images/logos/cosmos-logo-black.svg" target="_blank" rel="noreferrer noopener") SVG format
            a(href="/images/logos/cosmos-logo-black.pdf" target="_blank" rel="noreferrer noopener") PDF format
        .tm-logo
          .tm-logo__img.tm-logo__img--white
            img(src="~images/site/cosmos-wordmark.svg" alt="Cosmos wordmark")
          .tm-logo__title Cosmos Wordmark (White)
          .tm-logo__types
            a(href="/images/logos/cosmos-logo-white.png" target="_blank" rel="noreferrer noopener") PNG format
            a(href="/images/logos/cosmos-logo-white.svg" target="_blank" rel="noreferrer noopener") SVG format
            a(href="/images/logos/cosmos-logo-white.pdf" target="_blank" rel="noreferrer noopener") PDF format
        .tm-logo
          .tm-logo__img.tm-logo__img--black
            img(src="/images/logos/tendermint-logo-black.svg" alt="Tendermint logo black")
          .tm-logo__title Tendermint Logo (Black)
          .tm-logo__types
            a(href="/images/logos/tendermint-logo-black.png" target="_blank" rel="noreferrer noopener") PNG format
            a(href="/images/logos/tendermint-logo-black.svg" target="_blank" rel="noreferrer noopener") SVG format
        .tm-logo
          .tm-logo__img.tm-logo__img--white
            img(src="/images/logos/tendermint-logo-white.svg" alt="Tendermint logo white")
          .tm-logo__title Tendermint Logo (White)
          .tm-logo__types
            a(href="/images/logos/tendermint-logo-white.png" target="_blank" rel="noreferrer noopener") PNG format
            a(href="/images/logos/tendermint-logo-white.svg" target="_blank" rel="noreferrer noopener") SVG format
      tm-section
        div(slot="title") Project Descriptions
        .tm-project
          .tm-project__title Cosmos SDK
          .tm-project__description The Cosmos SDK is a user-friendly, modular framework that allow developers to quickly and easily build a custom blockchain application, powered by the Tendermint BFT Proof of Stake protocol.
        .tm-project
          .tm-project__title Tendermint BFT
          .tm-project__description Tendermint BFT is a PBFT (practical byzantine fault tolerant) consensus protocol that prioritizes safety over liveliness. Tendermint BFT's application interface, ABCI allows transactions to be processed in any language

    .tm-sect-col
      section-who
      tm-section
        div(slot="title") Co-Buidler's Photos
        .tm-portraits
          .tm-portrait
            .tm-portrait__img
              img(src="~images/press/jae-kwon.jpg" alt="Jae Kwon")
            .tm-portrait__title Jae Kwon
            .tm-portrait__subtitle Founder of Cosmos
          .tm-portrait
            .tm-portrait__img
              img(src="~images/press/ethan-buchman.jpg" alt="Ethan Buchman")
            .tm-portrait__title Ethan Buchman
            .tm-portrait__subtitle Cofounder of Cosmos
</template>

<script>
import SectionWho from "sections/SectionWho"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-presskit",
  metaInfo: {
    title: "Press Kit"
  },
  components: {
    SectionWho,
    TmBtn,
    TmCardHz,
    TmHeader,
    TmSection
  }
}
</script>

<style lang="stylus">
.tm-logo, .tm-project, .tm-portrait
  &:not(:last-child)
    margin-bottom var(--pad320)

.tm-logo__title
.tm-project__title
.tm-portrait__title
  font-weight var(--fw-bold)

.tm-logo__img
.tm-portrait__img
.tm-logo__title
  margin-bottom 1rem

.tm-logo__img img
.tm-portrait__img img
  width 100%
  max-width 16rem
  display block

.tm-portrait__img
  display block

.tm-logo__img
  img
    padding 1.5rem
    border 1px solid var(--txt)

.tm-logo__img--white
  img
    background #000

.tm-logo__types
  a
    display block
    display list-item
    list-style square
    margin-left 1.5rem

@media screen and (min-width:1024px)
  .page-press-kit
    .tm-section
      background var(--app-bg) !important
      border-bottom 1px solid var(--bc)
      border-right 1px solid var(--bc)
      &:last-child
        border-bottom none

    .tm-sect-cols
      display flex
      > *
        flex 1
    .page-press-kit .tm-cards
      display block

    .tm-cards-hz--landscape
      display block
</style>
