<template lang="pug">
.page-intro
  toc-page(toc-page="intro" page-title="What is Cosmos?")
    nav-contents(slot="nav" toc-page="intro")
    text-en-us
  modal-definition
</template>

<script>
import ModalDefinition from "modals/ModalDefinition"
import { mapGetters } from "vuex"
import NavContents from "navigation/NavContents"
import TextEnUs from "../../content/md/what-is-cosmos.md"
import TocPage from "navigation/TocPage"

export default {
  name: "page-intro",
  metaInfo: {
    title: "What is Cosmos?"
  },
  components: {
    ModalDefinition,
    NavContents,
    TextEnUs,
    TocPage
  },
  computed: {
    ...mapGetters(["glossary"])
  },
  data: () => ({
    definitions: ""
  }),
  mounted() {
    this.$store.dispatch("initializeGlossary")

    this.definitions = Array.from(this.$el.querySelectorAll(".tm-def"))
    this.definitions.map(i => {
      i.addEventListener("click", event =>
        this.$store.commit("showDefinition", {
          event: event,
          glossary: this.glossary
        })
      )
    })
  }
}
</script>

<style lang="stylus">
.tm-content
  .term
    padding 0 0.2em
    cursor pointer
    background hsl(50,75%,97%)
    border-bottom 2px solid hsl(50,75%,78%)
    &:hover
      border-bottom 2px solid hsl(50,75%,60%)

  .tooltip
    margin-top .25rem
    z-index 97

    h1
      display block
      font-size .875rem
      font-weight var(--fw-semibold)
      margin initial
      margin-bottom .25rem

    p
      font-size .875rem
      color initial
      margin initial
      font-weight initial
</style>
