<template lang="pug">
tm-section
  div(slot="title") Who we are
  p The #[a(href="https://interchain.io/" target="_blank" rel="noreferrer noopener") Interchain Foundation (ICF)] is a Swiss non-profit foundation that was formed to support the development of Cosmos and the ecosystem that will contribute to the Cosmos Network. The ICF is accepting applications for grants.
  p All in Bits Inc (dba Tendermint Inc) is a software development company contracted by the ICF to develop the Cosmos Network. Check out the #[a(href="https://tendermint.com/about" target="_blank") Tendermint Inc team].
  p IRIS Foundation Ltd. is supported by the ICF to build IRISnet, a Cosmos Hub that facilitates construction of distributed business applications. Learn more about #[a(href="https://www.irisnet.org" target="_blank" rel="noreferrer noopener") IRISnet].
  p #[a(href="https://github.com/cosmos/gaia" target="_blank" rel="noreferrer noopener") Cosmos Hub] is the first hub among many hubs that has launched within the Cosmos Network of sovereign blockchains.
  p #[a(href="https://github.com/tendermint" target="_blank" rel="noreferrer noopener") Tendermint BFT] is the name of the Proof-of-Stake consensus protocol that powers the Cosmos Hub and the Cosmos SDK.

  p: strong View the #[a(href="https://docs.google.com/document/d/1xSQF5Cq7eMJ411EtitMVb3QKAopnhlesRu_JMm9pWwU" target="_blank" rel="noreferrer noopener") Cosmos Network one-pager].
</template>

<script>
import TmSection from "common/TmSection"
export default {
  name: "section-who",
  components: {
    TmSection
  }
}
</script>
