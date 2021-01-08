<template lang="pug">
.tm-page
  tm-header#sdk-header
    div(slot="project-title") SDK
    div(slot="title") The world's most used framework for building blockchains
    tm-btn(value="Cosmos SDK Docs" type="anchor" href="https://docs.cosmos.network" target="_blank" rel="noreferrer noopener")

  tm-section
    div(slot="title"): .h2 Blockchain Applications in Three Steps
    .tm-steps
      tm-step(num="1")
        div(slot="title") Write your custom blockchain
        div(slot="subtitle") Compose your blockchain application with a mix of prebuilt modules and your own custom modules.
      tm-step(num="2")
        div(slot="title") Launch your brand-new blockchain
        div(slot="subtitle") Test your MVP with users, collect & iterate on feedback, and then launch your public mainnet.
      tm-step(num="3")
        div(slot="title") Connect to other Cosmos blockchains
        div(slot="subtitle") Increase adoption and liquidity of your blockchain by connecting it via IBC to Cosmos Network.

  tm-section.tm-section--dark#section-sdk-features(layout="center")
    div(slot="title") Cosmos SDK Features
    .tm-cards-icon
      tm-card-icon(title="Modular" subtitle="Use powerful SDK modules to customize your blockchain for specific user requirements." icon="modular")
      tm-card-icon(title="Scalable" subtitle="Run parallel chains to match the throughput requirements of your growing user base." icon="scalable")
      tm-card-icon(title="Interoperable" subtitle="Communicate tokens & value with other blockchains in Cosmos with the IBC module." icon="ibc")
      tm-card-icon(title="Secure" subtitle="Access control firewalls your blockchain application against malicious modules." icon="secure")
      tm-card-icon(title="Proof-of-Stake" subtitle="Use the Cosmos PoS module as a secure foundation for your custom blockchain application." icon="pos")
      tm-card-icon(title="Sovereign" subtitle="Propose changes and vote on blockchain upgrades with the governance module." icon="sovereign")
      tm-card-icon(title="Open Source" subtitle="Work together to build the free and open source Cosmos developer community." icon="foss")
      tm-card-icon(title="Go" subtitle="Write your decentralized app in Go to take advantage of the strong Golang ecosystem." icon="go")

  tm-section#section-sdk-cta(layout="split")
    div(slot="title") Get Started with the Cosmos SDK
    p Build a complete Cosmos SDK application in just a few hours. At the end you will have a fully functional full node client, CLI interface, REST interface, and much more.
    tm-btn(
      value="Start Tutorial" size="lg" type="anchor" href="https://tutorials.cosmos.network/"
      icon="arrow_forward" icon-pos="right")

  tm-section(layout="center").ecosystem
    div(slot="title") The Cosmos Ecosystem
    div(slot="subtitle") Discover an ever-expanding universe of application-specific blockchains built with Cosmos SDK
    tm-btn(
      value="Explore" size="lg" type="link" :to="{ name: 'ecosystem' }"
      icon="arrow_forward" icon-pos="right" color="transparent-bg")
    .logos-container
      .logos-container__left
        img(src="~images/sdk/section-ecosystem-logos-1.svg" alt="Section ecosystem logos")
      .logos-container__right
        img(src="~images/sdk/section-ecosystem-logos-2.svg" alt="Section ecosystem logos")

  tm-section(layout="center")
    div(slot="title") What Will You Build?
    div(slot="subtitle") Here's a list of blockchain use cases for inspiration
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-decentralized.jpg" alt="decentralized")
    div(slot="title") Open Finance
    div(slot="subtitle") Centralized exchanges are subject to the whims of their jurisdictions. Build a decentralized economy to let your users trade across connected token economies.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-gaming.jpg" alt="decentralized")
    div(slot="title") Gaming
    div(slot="subtitle") Gaming is one of the most obvious platforms for digital currency usage. Build an engaging game with digital goods, tradeable directly on your platform.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-medical.jpg" alt="medical")
    div(slot="title") Healthcare
    div(slot="subtitle") Maintain control of your personal health data with a fine grain permissions system. Only healthcare providers you approve can access your data.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-markets.jpg" alt="markets")
    div(slot="title") Prediction Markets
    div(slot="subtitle") Use the wisdom of crowds to build a global prediction market. Cosmos-SDK gives you full flexibility to build prediction market functionality into its library of modules.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-global.jpg" alt="global")
    div(slot="title") Cross-Border Payments
    div(slot="subtitle") Revolutionize traditional banking by reducing the friction and cost of cross-border transactions and payments.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-connections.jpg" alt="connections")
    div(slot="title") Connecting Chains
    div(slot="subtitle") Act as the payment router between many connected blockchains. Provide security and prevent double spend transactions.
  tm-use-case
    img.jarallax-img(slot="image" src="~images/sdk/use-case-realestate.jpg" alt="real estate")
    div(slot="title") Real Estate
    div(slot="subtitle") Store and transfer ownership of property rights and other licensing documents. Blockchains act as notaries in which you can use to verify ownership or revocation of property.

  tm-section: .tm-columns
    tm-column(
      title="SDK Docs"
      subtitle="Learn more with the official Cosmos SDK documentation.")
      img(slot="icon" src="~images/sdk/icon-footer-docs.svg" alt="Docs")
      tm-btn(value="Read Now" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://docs.cosmos.network")
    tm-column(
      title="SDK Forum"
      subtitle="Participate in the official forum to discuss SDK development.")
      img(slot="icon" src="~images/sdk/icon-footer-forum.svg" alt="Forum")
      tm-btn(value="Join Us" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://forum.cosmos.network/c/cosmos-sdk")
    tm-column(
      title="SDK Chat"
      subtitle="Discuss the SDK with developers in the unofficial chat.")
      img(slot="icon" src="~images/sdk/icon-footer-discord.svg" alt="chat")
      tm-btn(value="Chat Now" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://discord.gg/vcExX9T")
</template>

<script>
import hf from "scripts/helpers"
import TmBtn from "common/TmBtn"
import TmCardIcon from "cards/TmCardIcon"
import TmCardHz from "cards/TmCardHz"
import TmColumn from "common/TmColumn"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmStep from "cards/TmStep"
import TmUseCase from "cards/TmUseCase"
import { jarallax, jarallaxElement } from "jarallax"

export default {
  name: "page-product-sdk",
  metaInfo: {
    title: "Cosmos SDK"
  },
  components: {
    TmBtn,
    TmCardIcon,
    TmCardHz,
    TmColumn,
    TmHeader,
    TmSection,
    TmStep,
    TmUseCase
  },
  data: () => ({
    hf: hf
  }),
  mounted() {
    jarallaxElement()
    jarallax(this.$el.querySelectorAll(".jarallax"), {
      speed: 0.67
    })
  }
}
</script>

<style lang="stylus">
@require '~variables'

.ecosystem
  background-color #F8F9FC
  height 30rem

.logos-container
  display flex
  flex-direction row
  justify-content space-between

@media screen and (min-width: 768px)
  #section-sdk-cta
    background url('~images/home/section-sdk-desktop.svg') right center no-repeat
    background-size auto 100%, 256px 256px, auto

@media screen and (min-width: 1024px)
  #section-sdk-cta
    background-size 32% auto, 256px 256px, auto

    .tm-section__container
      flex-flow row

@media screen and (max-width: 945px)
  .logos-container
    &__left
      margin-right 1rem

@media screen and (max-width: 600px)
  .ecosystem
    height 34rem

  .logos-container
    margin-top 2rem
    justify-content center
</style>
