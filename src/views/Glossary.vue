<template lang="pug">
.page-roadmap
  tm-header
    div(slot="title") Glossary
  tm-section
    tm-definition(v-for="item in dict" :definition="item" :key="item.title")
</template>

<script>
import { map } from "lodash"
import TmBtn from "common/TmBtn"
import TmDefinition from "common/TmDefinition"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import source from "@cosmos-ui/vue/src/Tooltip/dict.json"
import MarkdownIt from "markdown-it"

export default {
  name: "page-about",
  metaInfo: { title: "About" },
  components: {
    TmBtn,
    TmDefinition,
    TmHeader,
    TmSection
  },
  data: function() {
    return {
      dict: map(source, item => {
        const html = new MarkdownIt().render(item)
        const doc = new DOMParser().parseFromString(html, "text/html")
        return {
          title: doc.querySelector("h1").innerText,
          description: item
            .split("\n")
            .filter(e => !/^#/.test(e))
            .join("\n"),
          url: "url"
        }
      })
    }
  }
}
</script>
