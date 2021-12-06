<template lang="pug">
.page-roadmap
  tm-header
    div(slot="title") Glossary
  tm-section
    tm-definition(v-for="item in sortedGlossary" :definition="item" :key="item.title")
</template>

<script>
import { orderBy } from "lodash"
import TmBtn from "common/TmBtn"
import TmDefinition from "common/TmDefinition"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import { mapGetters } from "vuex"

export default {
  name: "page-about",
  metaInfo: { title: "About" },
  components: {
    TmBtn,
    TmDefinition,
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["glossary"]),
    sortedGlossary() {
      return orderBy(this.glossary.entries, e => e.title, "asc")
    }
  },
  mounted() {
    this.$store.dispatch("initializeGlossary")
  }
}
</script>
