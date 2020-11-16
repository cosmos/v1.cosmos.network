<template lang="pug">
page(title="Resources" subtitle="A curated list of resources about the Cosmos Network.")
  div(slot="menu"): tm-btn(icon="chat" value="Community Chat" type="anchor" href="https://t.me/cosmosproject" target="_blank" rel="noreferrer noopener" color="primary")
  part(title="Cosmos Network")
    tm-list-item(:to="{ name: 'whitepaper' }" title="Cosmos Whitepaper" icon="description")
    tm-list-item(:to="{ name: 'faq' }" title="Cosmos FAQ" icon="description")
  part(title="Cosmos Hub")
    tm-list-item(:to="{ name: 'plan' }" title="Fundraiser Plan" icon="description")
    tm-list-item(href="https://github.com/cosmos/cosmos/raw/master/Cosmos_Token_Model.pdf" title="Cosmos Token Model (PDF)" icon="cloud_download")
  part(title="Unofficial Resources")
    tm-list-item(href="https://cosmonauts.world" title="Projects Building on Cosmos" icon="link" target="_blank" rel="noreferrer noopener")
    tm-list-item(href="https://medium.com/@JesseLivermore/basic-notable-cosmos-resources-aff336febe15" title="Basic Notable Cosmos Resources" icon="link" target="_blank" rel="noreferrer noopener")

</template>

<script>
import TmBtn from "common/TmBtn"
import TmListItem from "common/TmListItem"
import Part from "common/NiPart"
import Page from "common/NiPage"
export default {
  name: "page-resources-index",
  metaInfo: { title: "Resources" },
  components: {
    TmBtn,
    TmListItem,
    Page,
    Part
  }
}
</script>
