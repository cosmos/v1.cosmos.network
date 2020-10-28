<template lang="pug">
.page-event
  .page-event__header
    .page-event__image(:style="{ backgroundImage: `url(${workshop.coverImg[0].url})`}")

  .page-event__container: .page-event__container-padding
    .page-event__heading #[router-link(:to="{ name: 'series-code-with-us'}") Code with Us online workshops]
    .page-event__text
      .page-event__title {{ workshop.title }}
      .page-event__date {{ moment(workshop.date).format("MMM DD") }}
      .page-event__date(v-if="workshop.time") {{ toTimezone(workshop.date, workshop.time) }}
    .page-event__btn(v-if="moment(workshop.date) > moment() || workshop.date === 'TBC' || !workshop.replay")
      tm-btn(size="lg" value="sign up now" color="primary" @click.native="openModal(true)")
    .page-event__btn(v-else)
      tm-btn(size="lg" value="watch replay" type="anchor" icon="play_circle_outline" icon-pos="right" color="primary" :href="workshop.replay" target="_blank" rel="noreferrer noopener")

  tm-section
    tm-content(v-html="this.md.render(`${workshop.description}`)")

  modal(v-bind="{visible: !!(signup), side: 'center', buttonClose: true, fullscreen: true, width: '44rem', backgroundColor: 'rgba(0,0,0,.8)'}" @visible="signup = $event" v-if="!!(signup)")
    .modal__content(v-if="!!(signup)")
      series-signup
        template(slot="h1") Sign up for {{ workshop.title }}
</template>

<script>
import moment from "moment-timezone"
import { mapGetters } from "vuex"
import MarkdownIt from "markdown-it"
import { Modal, SeriesSignup } from "@cosmos-ui/vue"
import TmBtn from "common/TmBtn"
import TmSection from "common/TmSection"
import TmContent from "common/TmContent"

export default {
  name: "page-event",
  metaInfo: {
    title: "Workshop Details"
  },
  components: {
    Modal,
    SeriesSignup,
    TmBtn,
    TmSection,
    TmContent
  },
  data: () => ({
    moment: moment,
    md: new MarkdownIt({
      linkify: true,
      html: true
    }),
    signup: null
  }),
  computed: {
    ...mapGetters(["cwu"]),
    workshop() {
      if (this.cwu.cwu && this.cwu.cwu.length > 0) {
        return this.cwu.cwu.find(e => e.slug === this.$route.params.workshop)
      } else {
        return {
          slug: ""
        }
      }
    }
  },
  methods: {
    openModal(bool) {
      this.signup = bool
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, "UTC")
          // use client's local time zone
          .tz(moment.tz.guess())
          .format("h:mma z")
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

>>> h3
  font-weight var(--fw-bold)

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
  padding-top 1rem
  padding-bottom 1rem
  color #2D2950

.page-event__date, .page-event__time
  border-top 2px solid var(--bc)
  padding-top 0.5rem
  padding-bottom 0.5rem

.page-event__btn
  margin-top var(--pad320)

@media screen and (min-width: 768px)
  .page-event__container-padding
    padding-top var(--pad768)
    padding-bottom 0
    padding-left var(--pad768)
    padding-right var(--pad768)

@media screen and (min-width: 1024px)
  .page-event__header
    display flex
    flex-flow row

  .page-event__image, .page-event__container
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

@media screen and (min-width: 1280px)
  .page-event__container-padding
    padding-left var(--pad1280)
    padding-right var(--pad1280)
</style>
