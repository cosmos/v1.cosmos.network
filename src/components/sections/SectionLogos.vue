<template lang="pug">
tm-section#section-logos: .cards-logo
  card-logo(v-for="i in pinnedMedia" :media="i" :key="i.id")
</template>

<script>
import { mapGetters } from "vuex"
import CardLogo from "cards/CardLogo"
import TmSection from "common/TmSection"
export default {
  name: "section-logos",
  components: {
    CardLogo,
    TmSection
  },
  computed: {
    ...mapGetters(["media"]),
    pinnedMedia() {
      if (this.media) {
        return this.media.filter(i => i.pinned)
      }
      return []
    }
  },
  mounted() {
    if (this.media.length === 0) {
      this.$store.dispatch("initializeMentions")
    }
  }
}
</script>
<style lang="stylus">
#section-logos .tm-section__container
  padding-top 3rem !important
  padding-bottom 3rem !important
</style>
