<template lang="pug">
page(
  title="Fundraiser Plan"
  subtitle="Our original plan and roadmap for the April 2017 fundraiser.")
  div(slot="menu"): tm-btn(icon="chat" value="Community Chat" type="anchor" href="https://t.me/cosmosproject" target="_blank" rel="noreferrer noopener" color="primary")
  tm-content: text-content
</template>

<script>
import TmBtn from "common/TmBtn"
import Page from "common/NiPage"
import TextContent from "content/md/resources-plan.md"
import TmContent from "common/TmContent"
export default {
  name: "page-plan",
  metaInfo: { title: "Fundraiser Plan - Resources" },
  components: {
    Page,
    TextContent,
    TmBtn,
    TmContent
  }
}
</script>
