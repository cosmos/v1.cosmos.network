<template lang="pug">
.nav-contents
  overlay-btns
    template(v-if="tocPage === 'whitepaper'")
      menu-locale(
        path='whitepaper'
        :langs="['en-US', 'ko', 'pt', 'zh-CN']")
      overlay-btn.print-btn(
        @click.native='downloadWhitepaper'
        icon='file_download')
</template>

<script>
import { mapGetters } from "vuex"
import PerfectScrollbar from "perfect-scrollbar"
import watchTocClicks from "scripts/watchTocClicks.js"
// import inViewport from "scripts/inViewport.js"
// import visibleTocActivate from "scripts/visibleTocActivate.js"
// import percentageScrolling from "scripts/percentageScrolling.js"
import MenuLocale from "navigation/MenuLocale"
import OverlayBtns from "buttons/OverlayBtns"
import OverlayBtn from "buttons/OverlayBtn"
export default {
  name: "nav-contents",
  components: {
    MenuLocale,
    OverlayBtns,
    OverlayBtn
  },
  computed: {
    ...mapGetters(["toc"])
  },
  data: () => ({ ps: "" }),
  methods: {
    downloadWhitepaper() {
      window.location.href = "https://cosmos.network/cosmos-whitepaper.pdf"
    },
    setTocVisOnWidth() {
      let width = document.documentElement.clientWidth
      if (width >= 1024) {
        this.setTocVisible(true)
      } else {
        this.setTocVisible(false)
      }
    },
    setTocVisible(value) {
      if (value) {
        document.querySelector(".minimal-toc").style.display = "block"
        this.initToc()
      } else {
        document.querySelector(".minimal-toc").style.display = "none"
        this.destroyToc()
      }
    },
    initToc() {
      let container = document.querySelector(".minimal-toc")
      this.ps = new PerfectScrollbar(container)
      this.$store.commit("setTocVisible", { id: this.tocPage, visible: false })
      watchTocClicks(this.setTocVisible)

      /*
      this.$store.commit("setElementsVisible", {
        id: this.tocPage,
        els: inViewport(document.querySelectorAll("h2, h3, h4, h5"))
      })
      percentageScrolling()
      */
    },
    destroyToc() {
      if (this.ps) {
        this.ps.destroy()
        this.$store.commit("setTocVisible", {
          id: this.tocPage,
          visible: false
        })
      }
    }
  },
  mounted() {
    // this.setTocVisOnWidth()
  },
  props: ["toc-page"]
  /*
  ,
  watch: {
    elementsVisible() {
      visibleTocActivate(this.toc[this.tocPage].elementsVisible)
    },
    "$route.params.locale"() {
      setTimeout(() => this.setTocVisOnWidth(), 100)
    }
  }
  */
}
</script>
