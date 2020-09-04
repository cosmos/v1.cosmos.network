<template lang="pug">
.page-event
  .page-event__header
    .page-event__image(:style="{ backgroundImage: `url(${bgImgSrc ? bgImgSrc : logoImgSrc})`}")
      img(v-if="bgImgSrc && logoImgSrc" :src="logoImgSrc" alt="Background image")

  .page-event__container: .page-event__container-padding
    .page-event__text
      .page-event__title {{ conf.title }}
      .page-event__location {{ conf.type }}
      //- TODO: uncomment to use event location
      //- .page-event__location #[a(:href="googleMap" target="_blank" rel="noreferrer noopener") {{ venue }}] in {{ conf.location }}
      .page-event__date
        template(v-if="conf.dateStart") {{ hf.dates(conf.dateStart, conf.dateEnd) }}
        template(v-else) {{ conf.type }} on TBD
    .page-event__btns
      tm-btn(type="anchor" :href="conf.url" value="join event"
        target="_blank" rel="noreferrer noopener" icon="arrow_forward" icon-pos="right" v-if="conf.url")

  tm-section
    tm-content(v-if="htmlDescription" v-html="htmlDescription")
    tm-content(v-else="conf.logo && conf.logo[0]"): img(:src="conf.logo[0].url" alt="Conference")
</template>

<script>
import hf from "scripts/helpers"
import { mapGetters } from "vuex"
import MarkdownIt from "markdown-it"
import TmBtn from "common/TmBtn"
import TmColumn from "common/TmColumn"
import TmContent from "common/TmContent"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"

export default {
  name: "page-event",
  metaInfo: {
    title: "Event Details"
  },
  components: {
    TmBtn,
    TmColumn,
    TmContent,
    TmHeader,
    TmSection
  },
  watch: {
    htmlDescription: {
      handler: function() {
        this.$nextTick(() => {
          document.querySelectorAll("table [href]").forEach(element => {
            element.setAttribute(
              "style",
              `background-image: url(/profiles/${element.hash.substring(
                1
              )}.jpg)`
            )
          })
        })
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(["events"]),
    conf() {
      if (this.events && this.events.length > 0) {
        return this.events.find(e => e.slug === this.$route.params.event)
      } else {
        return {
          slug: ""
        }
      }
    },
    logoImgSrc() {
      return this.conf.logo && this.conf.logo[0] && this.conf.logo[0].url
    },
    bgImgSrc() {
      if (this.conf.bg) {
        return this.conf.bg[0].url
      }
      return ""
    },
    venue() {
      if (this.conf.venue) return this.conf.venue
      else return this.conf.location
    },
    googleMap() {
      let address = ""
      if (this.conf.address) {
        address = this.conf.address
      } else if (this.conf.venue) {
        address = this.conf.venue
      } else {
        address = this.conf.location
      }
      address = encodeURIComponent(address)
      return `https://www.google.com/maps/search/?api=1&query=${address}`
    },
    htmlDescription() {
      if (this.conf.description) {
        return this.md.render(this.conf.description)
      } else {
        return ""
      }
    }
  },
  data: () => ({
    hf: hf,
    md: new MarkdownIt({
      linkify: true,
      html: true
    })
  })
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.tm-section:nth-of-type(2n -1)
  background #fff

.page-event
  padding-top 4rem
  max-width 60rem
  margin auto

.page-event__image
  width 100%
  height 56.25vw
  display flex
  align-items center
  justify-content center
  background-position center center
  background-repeat no-repeat
  background-size cover

.page-event__image img
  max-width 100%
  max-height 100%

.page-event__container-padding
  padding var(--pad320)

.page-event__title
  font-weight var(--fw-bold)
  font-size 2rem
  font-family var(--ff-brand)
  line-height var(--lh-heading)
  margin-bottom 1rem
  color #2D2950

.page-event__location
.page-event__date
  border-top 2px solid var(--bc)
  padding-top 0.5rem
  padding-bottom 0.5rem

.page-event__btns
  margin-top var(--pad320)

.page-event table
  border-spacing 1px
  font-size 0.75rem
  margin-right calc(-1 * var(--pad320))
  margin-left calc(-1 * var(--pad320))
  margin-bottom var(--pad320)
  width 100vw

.page-event table td
.page-event table th
  border 1px solid var(--bc)
  padding 0.25rem
  min-width 20%

.page-event table tr td:first-child
  white-space nowrap
  font-weight var(--fw-bold)
  width 12%

.page-event table tr td:nth-child(2):last-child
  width 88%

.page-event table tr td:nth-child(3)
  width 44%

.page-event table em
  display block
  margin .5em 0 1em
  font-style normal

.page-event table strong
  display block
  margin .5em 0

.page-event table a[href]
  color inherit
  background #eee
  padding-right .5em
  display inline-flex
  align-items center
  background-size 1.5em auto
  min-height 1.5em
  background-repeat no-repeat
  padding-left 2em

@media screen and (min-width:375px)
  .page-event table
    font-size 0.875rem

  .page-event table td
  .page-event table th
    padding 0.333rem

@media screen and (min-width:768px)
  .page-event__container-padding
    padding-left var(--pad768)
    padding-right var(--pad768)
    padding-top var(--pad768)

  .page-event table
    margin-left 0
    margin-right 0
    width 100%

@media screen and (min-width:1024px)
  .page-event__header
    display flex
    flex-flow row

  .page-event__image
  .page-event__container
    flex 1

  .page-event__container-padding
    width -webkit-fill-available
    width -moz-available

  .page-event__image
    height auto
    min-height 33.75rem

  .page-event__container
    display flex

  .page-event__text
    flex 1

  .page-event table
    font-size 1rem
  .page-event table td
  .page-event table th
    padding 0.5rem 0.75rem

@media screen and (min-width:1280px)
  .page-event__container-padding
    padding-left var(--pad1280)
    padding-right var(--pad1280)
</style>
