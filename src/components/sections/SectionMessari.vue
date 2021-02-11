<template lang="pug">
  tm-section#section-messari(layout="split" theme="dark")
    div(slot="title") Over ${{ totalMarketcap }}B USD of digital assets under management
    p Explore an ever-expanding ecosystem of blockchain apps, powered by Cosmos technology.
    tm-btn(size="lg" value="view stats" type="anchor" href="https://messari.io/screener/cosmos-ecosystem-FCB5C9E8" target="_blank" rel="noreferrer noopener"
      icon="north_east" icon-pos="right")
    .disclaimer Screener powered by Messari
    div(slot="image")
      .phone: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener").graphics
      .tablet: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener").graphics
      .laptop: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener").graphics
      .desktop: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener").graphics
</template>

<script>
import { mapGetters } from "vuex"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"

export default {
  components: {
    TmSection,
    TmBtn
  },
  computed: {
    ...mapGetters(["marketcap"]),
    totalMarketcap() {
      return this.marketcap.totalMarketcap
    }
  },
  mounted() {
    this.$store.commit("initTotalMarketcap")
  }
}
</script>

<style lang="stylus" scoped>
/deep/
  .tm-section__image
    position relative

#section-messari
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
  background-size 256px 256px, auto
  overflow visible

.disclaimer
  margin-top var(--pad320)
  font-size 0.8125rem
  font-weight 400
  line-height 1.125rem

.graphics
  position absolute
  bottom -8%
  right -17%
  max-width 50rem
  height auto
  width 100%

@media screen and (max-width: 1023px)
  .graphics
    position revert
</style>
