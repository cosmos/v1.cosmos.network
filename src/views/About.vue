<template lang="pug">
.page-about
  tm-header
    div(slot="title") About

  tm-section#about-intro
    .about-intro__text
      p The Cosmos Network is a decentralized network of independent, scalable, and interoperable blockchains, creating the foundation for a new token economy.
      p Before the Cosmos Network, blockchains were siloed and unable to communicate with each other. They were hard to build and could only handle a small number of transactions per second. Cosmos solves some of the hardest blockchain problems of scalability, usability and interoperability.
      p The Cosmos SDK is a developer-friendly, modular framework, each powered by a Byzantine Fault-Tolerant consensus algorithm such as Tendermint BFT, allowing developers to fully customize their decentralized applications and focus on business logic.
      p At Cosmos, we’re building the "Internet of Blockchains." Join our growing network and plug into the most powerful blockchain ecosystem.

    tm-box.tm-box--outline.about-intro__links
      div(slot="title") New to Cosmos?
      div(slot="menu-links")
        router-link(:to="{ name: 'intro' }") Start Here
        a(href="https://www.youtube.com/watch?v=JOcUfZPi6Iw" target="_blank" rel="noreferrer noopener") Rearchitecting the Blockchain Ecosystem
        a(href="https://www.youtube.com/watch?v=LApEkXJR_0M" target="_blank" rel="noreferrer noopener") Cosmos Architecture
        a(href="https://blog.cosmos.network/understanding-the-value-proposition-of-cosmos-ecaef63350d" target="_blank" rel="noreferrer noopener") The Value Proposition of Cosmos
        a(href="https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/" target="_blank" rel="noreferrer noopener") History of BFT
        a(href="https://www.youtube.com/watch?v=XxZ04w2x4nk" target="_blank" rel="noreferrer noopener") Consensus via BPOS
        a(href="https://cosmos.network/resources/whitepaper" target="_blank" rel="noreferrer noopener") Cosmos Whitepaper
        a(href="https://courses.blockgeeks.com/course/cos101-intro-cosmos/" target="_blank" rel="noreferrer noopener") Blockgeeks Cosmos 101 Course

  section-who

  tm-section
    div(slot="title") Cosmos: A Brief History
    .tm-timeline
      .tm-timeline__year
        .tm-timeline__year-label.h3 2014
        ol
          li Jae Kwon was the first person who #[a(href="https://cdn.relayto.com/media/files/LPgoWO18TCeMIggJVakt_tendermint.pdf") applied Byzantine Fault Tolerance (BFT) research in a "Proof of Stake" (PoS) public blockchain context], and went on to found Tendermint Inc (All in Bits Inc)
          li Tendermint BFT is the most advanced implementation of BFT consensus algorithm and Proof-of-Stake (PoS) crypto economics to date. The project launched to address the speed, scalability, and environmental issues associated with Bitcoin and Ethereum’s "Proof of Work" (PoW)
      .tm-timeline__year
        .tm-timeline__year-label.h3 2015
        ol
          li Ethan Buchman joined forces with Jae Kwon to develop Tendermint after meeting at the Cryptocurrency Research Group and Crypto-economics Conference
          li All in Bits Inc and Monax collaborated to implement the EVM on top of Tendermint BFT (Ethermint 1.0)
          li #[a(href="https://github.com/tendermint/tendermint") Tendermint BFT] is pluggable with applications written in any language via the Application Blockchain Interface (ABCI)
      .tm-timeline__year
        .tm-timeline__year-label.h3 2016
        ol
          li Tendermint co-founders publish the whitepaper #[router-link(:to="{ name: 'whitepaper'}") Cosmos: A Network of Distributed Ledgers]
          li Cosmos wins the Shanghai Blockchain Week "Most Innovative Project"
          li Tendermint Inc was contracted to run the first BFT blockchain voting system for the Rock and Roll Hall of Fame in Cleveland, OH
          li The Interchain Foundation (ICF) was formed to support the development of Cosmos and the ecosystem that will contribute to the Cosmos Network
          li ICF contracts Tendermint Inc to make Cosmos a reality
      .tm-timeline__year
        .tm-timeline__year-label.h3 2017
        ol
          li The ICF raises $16.8M for the funding of the Cosmos Network in 30 minutes. It is cited as one of the most successful blockchain-based fundraising events in history
          li Tendermint Inc. focuses efforts on building the Cosmos Network architecture, brand and vision from scratch
          li Application developers begin evaluating Cosmos as the platform to build their blockchain-based applications
          li Early prototype of the Cosmos SDK begins
      .tm-timeline__year
        .tm-timeline__year-label.h3 2018
        ol
          li Tendermint Inc. pioneers the concept of Inter-Blockchain Communication (IBC), the cross-chain data passing mechanism for Cosmos, and development specification begins
          li Cosmos Validators #[a(href='https://medium.com/tendermint/2018-year-in-review-the-top-5-most-epic-cosmos-testnets-that-will-restore-your-faith-in-3b060974f9a7') launch 20+ public testnets]
          li Cosmos launches Game of Stakes, the first of its kind adversarial testnet deployed with the largest network of 200+ consensus nodes ever to have run in a BFT environment
      .tm-timeline__year
        .tm-timeline__year-label.h3 2019+
        ol
          li Cosmos continues to gain traction with #[router-link(:to="{ name: 'ecosystem' }") projects] building on top of the SDK.
          li Binance, the world's largest cryptocurrency exchange, #[a(href="https://blog.saturn.network/binance-chain-is-built-on-tendermint-cosmos-sdk/") announces Binance Chain], which is built on Tendermint BFT and Cosmos SDK.
          li The big bang: #[router-link(:to="{ name: 'launch' }") Cosmos Hub launches] successfully on March 13th, 2019.
</template>

<script>
import SectionWho from "sections/SectionWho"
import TmBox from "common/TmBox"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-about",
  metaInfo: {
    title: "About"
  },
  components: {
    SectionWho,
    TmBox,
    TmHeader,
    TmSection
  }
}
</script>

<style lang="stylus">
.tm-timeline__year
  margin-bottom var(--pad320)

.tm-timeline__year-label
  margin-bottom 1.5rem
  font-size 2rem

.tm-timeline__year li
  list-style square
  margin-left 1.5rem

.about-intro__text
  margin-bottom var(--pad320)

.about-intro__links
  a
    display list-item
    list-style square
    margin-left 1.5rem

@media screen and (min-width:768px)
  #about-intro .tm-section__main
    display flex
    align-items flex-start
  .about-intro__text
    padding-right var(--pad320)
    flex 2
    margin-bottom 0
  .about-intro__links
    flex 1
@media screen and (min-width:1280px)
  .about-intro__links
    .tm-box__links
      column-count 1
</style>
