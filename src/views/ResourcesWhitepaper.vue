<template lang="pug">
toc-page(toc-page="whitepaper" page-title="Cosmos Whitepaper")
  nav-contents(slot="nav" toc-page="whitepaper")
  text-ko(v-if="$route.params.locale === 'ko'")
  text-pt(v-else-if="$route.params.locale === 'pt'")
  text-zh-cn(v-else-if="$route.params.locale === 'zh-CN'")
  text-en-us(v-else)
</template>

<script>
import NavContents from "navigation/NavContents"
import PageMenu from "common/NiPageMenu"
import TextEnUs from "../../content/md/whitepaper.md"
import TextKo from "../../content/md/whitepaper-ko.md"
import TextPt from "../../content/md/whitepaper-pt.md"
import TextZhCn from "../../content/md/whitepaper-zh-CN.md"
import TocPage from "navigation/TocPage"
export default {
  name: "page-resources-whitepaper",
  metaInfo: {
    title: "Whitepaper - Resources"
  },
  components: {
    NavContents,
    PageMenu,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn,
    TocPage
  }
}
</script>
