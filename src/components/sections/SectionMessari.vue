<template lang="pug">
  tm-section#section-messari(layout="split" theme="dark")
    div(slot="title") Over $12B USD of digital assets under management
    p Explore an ever-expanding ecosystem of blockchain apps, powered by Cosmos technology.
    tm-btn(size="lg" value="view stats" type="anchor" href="https://messari.io/screener/cosmos-ecosystem-FCB5C9E8" target="_blank" rel="noreferrer noopener"
      icon="north_east" icon-pos="right")
    .disclaimer Screener powered by Messari
    div(slot="image")
      .phone: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener")
      .tablet: img(src="~assets/images/ecosystem/messari-screener.svg" alt="Messari screener")
      .laptop
      .desktop
</template>

<script>
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"

export default {
  components: {
    TmSection,
    TmBtn
  }
}
</script>

<style lang="stylus" scoped>
#section-messari
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
  background-size 256px 256px, auto

.disclaimer
  margin-top var(--pad320)
  font-size 0.8125rem
  font-weight 400
  line-height 1.125rem

@media screen and (min-width: 1024px)
  #section-messari
    background url('~images/ecosystem/messari-screener.svg') right center no-repeat, url('~images/site/bg-tile-stars.svg'), linear-gradient(135deg, rgb(15,13,32,1) 0%, rgb(4,4,5) 25%, rgb(33,34,77) 53%, rgb(68,110,183) 100%)
    background-size auto 130%, 256px 256px, auto
</style>
