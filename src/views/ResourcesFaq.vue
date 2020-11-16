<template lang="pug">
page(title="Cosmos FAQ" subtitle="Answers to frequently asked questions about the Cosmos Network.")
  div(slot="menu"): tm-btn(icon="chat" value="Developer Chat" type="anchor" href="https://t.me/cosmosproject" target="_blank" rel="noreferrer noopener" color="primary")
  tm-content: text-content
</template>

<script>
import TmBtn from "common/TmBtn"
import Page from "common/NiPage"
import PageMenu from "common/NiPageMenu"
import TextContent from "content/md/resources-faq.md"
import TmContent from "common/TmContent"
export default {
  name: "page-resources-faq",
  metaInfo: {
    title: "Cosmos FAQ - Resources"
  },
  components: {
    TmBtn,
    Page,
    PageMenu,
    TextContent,
    TmContent
  }
}
</script>
