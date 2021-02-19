<template lang="pug">
.page-developers
  tm-header
    div(slot="title") Developer Portal
  .pd-columns
    .tm-boxes.tm-boxes__spacing
      tm-box.tm-box--blue.tm-box--primary
        div(slot="title") Cosmos SDK
        div(slot="main")
          p Cosmos-SDK is a framework for building blockchains. Modular, secure, and fully customizable.
          tm-btn(type="anchor" target="_blank" rel="noreferrer noopener" size="lg" value="Get Started" href="http://tutorials.cosmos.network/" color="primary")
        div(slot="menu-title")
          a.tm-box__title(target="_blank" rel="noreferrer noopener" href="https://docs.cosmos.network/") Documentation
          a.tm-box__title(target="_blank" rel="noreferrer noopener" href="https://github.com/cosmos/cosmos-sdk/tree/master/docs/kr") Documentation (한국어)
          a.tm-box__title(target="_blank" rel="noreferrer noopener" href="https://github.com/cosmos/cosmos-sdk/tree/master/docs/cn") Documentation (中文)
        div(slot="menu-links")
          a(target="_blank" rel="noreferrer noopener" href="https://docs.cosmos.network/master/intro/overview.html") SDK intro
          a(target="_blank" rel="noreferrer noopener" href="https://godoc.org/github.com/cosmos/cosmos-sdk") API reference (godocs)
          a(target="_blank" rel="noreferrer noopener" href="https://cosmos.network/rpc/") REST docs
          a(target="_blank" rel="noreferrer noopener" href="https://hub.cosmos.network/main/gaia-tutorials/join-testnet.html") Join Cosmos Hub mainnet
          a(target="_blank" rel="noreferrer noopener" href="https://hub.cosmos.network/main/gaia-tutorials/deploy-testnet.html") Deploy your own testnet
        div(slot="footer") Can't find what you're looking for? Ask in #[a(href="https://discord.gg/vcExX9T" target="_blank" rel="noreferrer noopener") chat] or our #[a(href="https://forum.cosmos.network/c/cosmos-sdk") forum].

      tm-box.tm-box--outline
        div(slot="title") Other Frameworks
        div(slot="main")
          p #[strong Ethermint:] The Ethereum Virtual Machine implemented as a Cosmos-SDK module. #[a(href="https://github.com/cosmos/ethermint" target="_blank" rel="noreferrer noopener") Visit repository].
          p #[strong Lotion:] An easy-to-use JavaScript SDK for Tendermint applications. #[a(href="https://github.com/keppel/lotion" target="_blank" rel="noreferrer noopener") Visit repository].

    .tm-boxes
      tm-box.tm-box--gray.tm-box--primary
        div(slot="title") Tendermint BFT
        div(slot="main")
          p Tendermint BFT is a state-of-the-art byzantine fault tolerant consensus engine. It powers most blockchains in the Cosmos ecosystem.
        div(slot="menu-title")
          a.tm-box__title(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/") Documentation
        div(slot="menu-links")
          a(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/master/introduction/what-is-tendermint.html") What is Tendermint?
          a(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/") Tendermint docs
          a(target="_blank" rel="noreferrer noopener" href="https://godoc.org/github.com/tendermint/tendermint") API reference (godocs)
          a(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/master/rpc/") RPC docs
        div(slot="footer") Looking for help with Tendermint? Ask in #[a(href="https://discord.gg/vcExX9T" target="_blank" rel="noreferrer noopener") chat] or our #[a(href="https://forum.cosmos.network/c/tendermint") forum].

      tm-box.tm-box--gray
        div(slot="title") ABCI
        div(slot="main")
          p The Application BlockChain Interface lets you build Tendermint-based apps in any programming language.
        div(slot="menu-links")
          a(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/master/spec/abci/") ABCI spec
          a(target="_blank" rel="noreferrer noopener" href="https://docs.tendermint.com/master/app-dev/abci-cli.html") Go - abci
          a(target="_blank" rel="noreferrer noopener" href="https://github.com/tendermint/js-abci") JavaScript - js-abci
          a(target="_blank" rel="noreferrer noopener" href="https://github.com/jTendermint/jabci") Java - jabci
          a(target="_blank" rel="noreferrer noopener" href="https://github.com/KrzysiekJ/abci_server") Erlang - abci_server
          a(target="_blank" rel="noreferrer noopener" href="https://github.com/zbo14/ocaml-tmsp") Ocaml - ocaml-tmsp

  tm-box.tm-box--outline.tm-box--solo
    div(slot="main") #[strong Find out more: ] #[router-link(:to="{ name: 'intro' }") What is Cosmos?] | #[a(href="https://blog.cosmos.network/why-application-specific-blockchains-make-sense-32f2073bfb37" target="_blank" rel="noreferrer noopener") Application-specific blockchains vs Smart contracts]
</template>

<script>
import TmBox from "common/TmBox"
import TmBtn from "common/TmBtn"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-developers",
  metaInfo: {
    title: "Developer Portal"
  },
  components: {
    TmBox,
    TmBtn,
    TmHeader,
    TmSection
  }
}
</script>

<style lang="stylus" scoped>
.tm-boxes__spacing
  margin-right 1rem

.pd-columns
  padding var(--pad320) var(--pad320) 0

.tm-btn
  padding-right 1rem

@media screen and (min-width: 768px)
  .pd-columns
    padding-left var(--pad768)
    padding-right var(--pad768)

@media screen and (min-width: 1024px)
  .pd-columns
    display flex
    margin 0 0 0.5rem

  .tm-boxes__spacing
    margin-right 0

  .tm-btn .tm-btn__container.tm-btn--size-lg
    width 12rem

@media screen and (min-width: 1280px)
  .pd-columns
    padding-left var(--pad1280)
    padding-right var(--pad1280)

  .tm-btn .tm-btn__container.tm-btn--size-lg
    width 12rem

@media screen and (min-width: 1920px)
  .pd-columns
    padding-left var(--pad1920)
    padding-right var(--pad1920)
</style>
