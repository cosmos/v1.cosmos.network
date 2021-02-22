<template lang="pug">
.page-developers
  tm-section.section-hero-dark-blue.section-hero(theme="dark")
    div(slot="suptitle") Tools
    h1(slot="title").title What will you build?
    .feature-container.feature-container__sdk
      .text
        .overline Build an application-specific chain
        .h3 Cosmos SDK
        .p Cosmos SDK is a framework for building blockchains in Go. Modular, secure, and fully customizable - Cosmos SDK makes it easy to build complex blockchains on top of Tendermint.
        tm-btn(size="lg" value="build a chain" color="primary" type="anchor"  href="https://tutorials.cosmos.network/scavenge/tutorial/01-background.html" target="_blank" rel="noreferrer noopener").gtm__tools__sdk__build-a-chain
        tm-btn(size="lg" value="learn more" color="dark" type="link" :to="{ name: 'product-sdk' }").gtm__tools__sdk__learn-more
        .resources
          .resources__item #[a(href="https://docs.cosmos.network" target="_blank" rel="noreferrer noopener") Documentation]
          .resources__item #[a(href="https://godoc.org/github.com/cosmos/cosmos-sdk" target="_blank" rel="noreferrer noopener") API]
          .resources__item #[a(href="https://cosmos.network/rpc" target="_blank" rel="noreferrer noopener") REST docs]
          .resources__item #[a(href="https://discord.gg/vcExX9T" target="_blank" rel="noreferrer noopener") Developer chat]
          .resources__item #[a(href="https://forum.cosmos.network/c/cosmos-sdk" target="_blank" rel="noreferrer noopener") Forum]
      .image
        a(href="https://github.com/cosmos/cosmos-sdk" target="_blank" rel="noreferrer noopener")
          img(src="~assets/brands/color/github-light.svg" alt="GitHub").image__github
        img(src="~assets/images/home/section-sdk-hex-brandmark.svg" alt="Cosmos SDK hex brandmark").image__brandmark

    .learn-box-sdk
      .banner #[router-link(:to="{ name: 'intro' }") #[strong What is Cosmos?]] Learn all about Cosmos technology and the vision of the Internet of Blockchains

  tm-section.section-extend-sdk
    div(slot="suptitle").suptitle Tools to extend Cosmos SDK
    h2(slot="title") Enable smart contracts on your blockchain
    .tools-container
      .tool-item.tool-item-agoric
        .tool-item__heading Program secure Javascript contracts
        .tool-item__inner
          .tool-item__box
            a(href="https://github.com/Agoric/agoric-sdk/tree/master/packages/SwingSet" target="_blank" rel="noreferrer noopener")
              img(src="~assets/brands/color/github-light.svg" alt="GitHub").tool-item__box__github
            img(src="~/assets/images/tools/tools-agoric.svg" alt="Agoric Swingset").tool-item__box__img
          .tool-item__content
            .tool-item__title Agoric Swingset
            .tool-item__desc Agoric's Cosmic SwingSet enables developers to test smart contracts build with ERTP in various blockchain setup environments.
            tm-btn(value="get started" type="anchor" color="primary" href="https://agoric.com/documentation/getting-started/" target="_blank" rel="noreferrer noopener").tool-item__first-btn.gtm__tools__smart-contracts__agoric__get-started
            .tool-item__resources
              .tool-item__resources__item #[a(href="https://t.me/agoricsystems" target="_blank" rel="noreferrer noopener") Developer chat]
      .tool-item.tool-item-cosmwasm
        .tool-item__heading Write multi-chain smart contracts in Rust
        .tool-item__inner
          .tool-item__box
            a(href="https://github.com/CosmWasm/cosmwasm" target="_blank" rel="noreferrer noopener")
              img(src="~assets/brands/color/github-light.svg" alt="GitHub").tool-item__box__github
            img(src="~/assets/images/tools/tools-cosmwasm.svg" alt="CosmWasm").tool-item__box__img
          .tool-item__content
            .tool-item__title CosmWasm
            .tool-item__desc A WASM-based Smart Contract Module for the Cosmos SDK.
            tm-btn(value="get started" color="primary" type="anchor" href="https://docs.cosmwasm.com/" target="_blank" rel="noreferrer noopener").tool-item__first-btn.gtm__tools__smart-contracts__cosmwasm__get-started
            .tool-item__resources
              .tool-item__resources__item #[a(href="https://t.me/joinchat/AkZriEhk9qcRw5A5U2MapA" target="_blank" rel="noreferrer noopener") Developer chat]
      .tool-item.tool-item-ethermint
        .tool-item__heading Run solidity code on proof of stake
        .tool-item__inner
          .tool-item__box
            a(href="https://github.com/cosmos/ethermint" target="_blank" rel="noreferrer noopener")
              img(src="~assets/brands/color/github-dark.svg" alt="GitHub").tool-item__box__github
            img(src="~/assets/images/tools/tools-ethermint.svg" alt="Ethermint").tool-item__box__img
          .tool-item__content
            .tool-item__title Ethermint
            .tool-item__desc The Ethereum Virtual Machine implemented as a Cosmos SDK module, making it possible to deploy proof-of-stake blockchains that support Ethereum smart contracts.
            tm-btn(value="get started" color="primary" type="anchor" href="https://docs.ethermint.zone" target="_blank" rel="noreferrer noopener").tool-item__first-btn.gtm__tools__smart-contracts__ethermint__get-started
            .tool-item__resources
              .tool-item__resources__item #[a(href="https://t.me/joinchat/AkZriEhk9qcRw5A5U2MapA" target="_blank" rel="noreferrer noopener") Developer chat]
              .tool-item__resources__item #[a(href="https://forum.cosmos.network/c/ethermint" target="_blank" rel="noreferrer noopener") Forum]

  tm-section(theme="stars")
    div(slot="suptitle") Explore the Cosmos
    h2(slot="title").title Connect to other blockchains
    .feature-container.feature-container__ibc
      .text
        .h3
          span.h3__text IBC Protocol
        .p The inter-blockchain communication protocol is a reliable & secure inter-module communication protocol that allows blockchains to connect to one another.
        tm-btn(size="lg" value="learn about ibc" color="dark" type="anchor"  href="https://ibcprotocol.org" target="_blank" rel="noreferrer noopener").gtm__tools__ibc__learn-about-ibc
        .resources
          .resources__item #[a(href="https://discord.gg/vcExX9T" target="_blank" rel="noreferrer noopener") Developer chat]
          .resources__item #[router-link(:to="{ name: 'ibc-signup' }") Get updates]
      .image
        a(href="https://github.com/cosmos/ics" target="_blank" rel="noreferrer noopener")
          img(src="~assets/brands/color/github-light.svg" alt="GitHub").image__github
        img(src="~assets/images/home/section-ibc-hex-brandmark.svg" alt="").image__brandmark

  tm-section
    h2(slot="title").title Discover more tools
    .feature-container.feature-container__tendermint
      .text
        .overline Build a blockchain from scratch, in any language
        .h3 Tendermint Core
        .p Tendermint BFT is a state-of-the-art byzantine fault tolerant consensus engine. It powers most blockchains in the Cosmos ecosystem.
        tm-btn(size="lg" value="Get started" color="primary" type="anchor" href="https://docs.tendermint.com" target="_blank" rel="noreferrer noopener").gtm__tools__tendermint__get-started
        tm-btn(size="lg" value="Learn more" color="link" type="anchor"  href="https://tendermint.com/core" target="_blank" rel="noreferrer noopener").gtm__tools__tendermint__learn-more
        .resources
          .resources__item #[a(href="https://godoc.org/github.com/tendermint/tendermint" target="_blank" rel="noreferrer noopener") API (godocs)]
          .resources__item #[a(href="https://docs.tendermint.com/master/rpc" target="_blank" rel="noreferrer noopener") REST docs]
          .resources__item #[a(href="https://discord.gg/vcExX9T" target="_blank" rel="noreferrer noopener") Developer chat]
          .resources__item #[a(href="https://forum.cosmos.network/c/tendermint" target="_blank" rel="noreferrer noopener") Forum]
      .image
        a(href="https://github.com/tendermint/tendermint" target="_blank" rel="noreferrer noopener")
          img(src="~assets/brands/color/github-dark.svg" alt="GitHub").image__github
        img(src="~assets/images/home/section-core-hex.svg" alt="").image__brandmark.image__circle__brandmark
    h3.h4 Additional tools & frameworks
    .more-tools(v-for="item in repos" :key="item.url")
      .more-tools__title {{item.title}}
      .more-tools__desc {{item.description}}
      .more-tools__url #[a(:href="item.url" target="_blank" rel="noreferrer noopener") {{ item.full_name }}]
</template>

<script>
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBox from "common/TmBox"
import TmBtn from "common/TmBtn"

export default {
  name: "tools",
  metaInfo: {
    title: "Tools"
  },
  components: {
    TmHeader,
    TmSection,
    TmBox,
    TmBtn
  },
  data() {
    return {
      repos: [
        {
          title: "Kadenamint",
          description:
            "An implementation of the Pact smart contract language on Tendermint.",
          full_name: "kadena-io/kadenamint",
          url: "https://github.com/kadena-io/kadenamint"
        },
        {
          title: "Kepler",
          description: "Haskell implementation of ABCI server on Tendermint.",
          full_name: "f-o-a-m/kepler",
          url: "https://github.com/f-o-a-m/kepler"
        },
        {
          title: "CosmosSwift",
          description: "Swift implementation on Tendermint.",
          full_name: "CosmosSwift",
          url: "https://github.com/CosmosSwift"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.h4
  font-size 1.5rem
  line-height 2rem
  letter-spacing var(--tracking-0)
  color var(--dim)
  margin-bottom 4rem

.title
  margin-bottom 4.5rem

.section-hero-dark-blue
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
  background-size 256px 256px, auto

.section-hero
  .title
    font-size 3rem
    line-height 4rem
    font-weight var(--fw-light)

.section-extend-sdk
  background var(--app-fg)
  .suptitle
    color var(--primary-alt)

.feature-container
  display grid
  grid-template-columns 50% 50%
  grid-template-rows 1fr
  align-items center
  width 100%
  height 100%
  max-width 104rem
  border-radius 0.5rem
  padding 4rem
  overflow hidden
  will-change transform
  position relative
  z-index 0
  .text
    z-index 1
    .overline
      font-weight var(--fw-bold)
      font-size 1rem
      line-height 1.25rem
      letter-spacing var(--tracking-2-wide)
      text-transform uppercase
      color #66A1FF
      margin-bottom 0.5rem
    .h3
      font-weight var(--fw-semibold)
      font-size 2rem
      line-height 2.5rem
      letter-spacing var(--tracking-1-tight)
      text-transform none
      color #FFFFFF
      margin-bottom 1.5rem
      &__text
        margin-right .5em
    .chip
      display inline-block
      vertical-align middle
      letter-spacing 0
      400
      font-size 0.875rem
      line-height 1.5rem
      padding 0 0.5rem
      border-radius 0.25rem
      background rgba(255,255,255,0.2)
    .p
      font-size 1.125rem
      line-height 1.6875rem
      letter-spacing var(--tracking-0)
      color rgba(255, 255, 255, 0.75)
      margin-bottom 2rem
      max-width 38rem
    .resources
      display flex
      flex-wrap wrap
      margin-top 2rem
      overflow-x hidden
      &__item
        font-size 1rem
        line-height 1.5rem
        color #66A1FF
        &:not(:last-child):after
          content '·'
          position relative
          padding 0 1rem
          color #fff
      &__item a
        color #66A1FF
  .image
    &:before
      content ""
      opacity 0.1
      border-radius 50%
      width 60rem
      height 60rem
      position absolute
      right -15rem
      top calc(50% - 960px/2 - 0px)
      z-index 0
    &__github
      position absolute
      width 2rem
      height 2rem
      top 2rem
      right 2rem
      opacity 0.5
      z-index 10
      transition opacity .2s ease-out
      &:hover
        opacity 0.8
    &__brandmark
      position absolute
      width 45rem
      height 41.25rem
      right -10.5rem
      top calc(50% - 660px/2 - 0px)
      z-index -1

  &__sdk
    background linear-gradient(133.65deg, #343F7C 9.49%, #1F254D 91.06%)
    .image
      &:before
        background linear-gradient(90deg, #5C66B8 0%, rgba(92, 102, 184, 0) 100%)

  &__ibc
    background #161931
    .image
      &:before
        background linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)

  &__tendermint
    background var(--app-fg)
    border 2px solid var(--bc)
    margin-top 4rem
    margin-bottom 6rem
    .image
      &__circle__brandmark
        top calc(50% - 15rem/2)
        right 5rem
        width 15rem
        height 15rem
      &:before
        background linear-gradient(90deg, #5BC75B 0%, rgba(91, 199, 91, 0) 100%)

    .text
      .overline
        color var(--primary-alt)
      .h3
        color #000000
      .p
        color rgba(0, 0, 0, 0.8)
      .resources
        &__item
          a
            color var(--link)
          &:not(:last-child):after
            color var(--dim)

.learn-box-sdk
  margin-top 5rem
  a
    color var(--secondary)
    &:hover,
    &:focus
      color var(--dark-txt)

.tools-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(320px, 1fr))
  gap 2rem
  max-width 104rem
  .tool-item
    margin-top 2rem
    display flex
    flex-direction column
    &__heading
      font-size 1.5rem
      line-height 2rem
      letter-spacing var(--tracking-0)
      color var(--dim)
      min-height 4rem
    &__inner
      margin-top 2rem
      border 2px solid var(--bc)
      border-radius .5rem
      background var(--app-bg)
      flex 1
    &__box
      position relative
      margin -2px -2px 0 -2px
      border-radius .5rem .5rem 0 0
      padding 2rem 0
      text-align center
      &__github
        position absolute
        width 2rem
        height 2rem
        top 1rem
        right 1rem
        opacity 0.5
        transition opacity .2s ease-out
        &:hover
          opacity 0.8
    &-agoric .tool-item__box
      background linear-gradient(90deg, #B12029 0%, #C04A51 100%)
    &-cosmwasm .tool-item__box
      background linear-gradient(240.92deg, #332F24 0%, #331C1C 26.04%, #331C2C 52.08%, #191133 75.52%, #172633 100%)
    &-ethermint .tool-item__box
      background linear-gradient(90deg, #336699 0%, #CCD9E6 100%)
    &__content
      padding 2rem
    &__title
      font-weight var(--fw-semibold)
      font-size 1.5rem
      line-height 2rem
      letter-spacing var(--tracking-1-tight)
      color #000000
    &__desc
      font-size 1rem
      line-height 1.5rem
      color rgba(0, 0, 0, 0.8)
      margin-top 1rem
    &__first-btn
      margin-top 2rem
    &__resources
      display flex
      flex-wrap wrap
      justify-content flex-start
      margin-top 2rem
      font-size 1rem
      line-height 1.5rem
      &__item
        &:not(:last-child):after
          content '·'
          position relative
          padding 0 1rem
          color rgba(0, 0, 0, 0.667)

.more-tools
  display grid
  width 100%
  grid-template-columns 177px 1fr auto
  gap 1.5rem
  align-items center
  font-size 1.125rem
  line-height 1.75rem
  letter-spacing var(--tracking-0)
  margin 0.5rem auto
  padding-bottom 1rem
  &__title
    text-align left
    font-weight var(--fw-semibold)
  &__desc
    text-align left
  &__url
    text-align right

.tm-btn + .tm-btn
  margin-left 0
  margin-top 1rem
.tm-btn
  margin-right 1rem
  margin-top 1rem

@media screen and (max-width: 856px)
  .feature-container
    grid-template-columns 1fr
    padding 3rem
    .text
      margin-top 18rem
    .image
      &:before
        width 45rem
        height 45rem
        right calc(50% - 720px/2)
        top 11rem - (45/2)
      &__brandmark
        width 33.75rem
        height auto
        left calc(50% - 540px/2 + 0.5px);
        top 11rem - (30.93/2)
    &__tendermint
      .image
          &__brandmark
            width 11.25rem
            left calc(50% - 180px/2)
            top 11rem - (11.25/2)
  .learn-box-sdk
    margin-top 2rem

@media screen and (max-width: 767px)
  .feature-container
    padding 2rem

@media screen and (max-width: 600px)
  .tm-btn
    display block
    padding-bottom 1rem
    margin 0 !important
  .tools-container .tool-item__first-btn
    margin-top 2rem !important
  .more-tools
    display block
    &__url
      text-align left

@media screen and (max-width: 480px)
  .section-hero
    .title
      font-size 2.5rem
      line-height 3rem

  .tools-container
    grid-template-columns repeat(auto-fit, minmax(256px, 1fr))
    display block
    .tool-item
      flex none
      &__inner
        margin-left -1rem
        margin-right -1rem
      &__content
        padding 1rem

  .feature-container
    padding 1rem
    margin-left -1rem
    margin-right -1rem
    width auto
    .text
      margin-top 12rem
      .overline
        font-size 0.75rem
        margin-bottom 0
      .h3
        font-size 1.5rem
        margin-bottom 1rem
      .p
        font-size 0.875rem
        line-height 1.25rem
        margin-bottom 2rem
    .image
      &:before
        top 6rem - (45/2)
      &__brandmark
        width 22.5rem
        height auto
        left calc(50% - 360px/2 + 0.5px);
        top 6rem - (20.625/2)
      &__github
        top 1rem
        right 1rem
    &__tendermint
      .image
          &__brandmark
            width 7.5rem
            left calc(50% - 120px/2)
            top 6rem - (7.5/2)
</style>
