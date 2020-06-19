<template lang="pug">
.tm-wall: .tm-wall__container
  .tm-wall__features: .tm-wall__features-container
    .tm-wall__header
      .h2 What's New
    a.tm-wall__news(:href="featuredNews.url" target="_blank" rel="noreferrer noopener"): .tm-wall__news-container(v-if="featuredNews")
      .tm-wall__image: img(:src="featuredNews.bg[0].url" target="_blank" rel="noreferrer noopener" alt="News image")
      .tm-wall__text
        .tm-wall__title {{ featuredNews.title }}
        .tm-wall__description {{ featuredNews.description }}
        .tm-wall__description.tm-wall__description--meta Published {{ hf.date(featuredNews.datePublished) }}
    .tm-wall__videos
      tm-card-hz(
        v-for="i in featuredVideos"
        :flush="true"
        :img-src="i.bg[0].url"
        :key="i.slug"
        :subtitle="i.description"
        :title="i.title"
        type="video"
        :href="i.url")
  .tm-wall__events: .tm-wall__events-container
    .tm-wall__header
      .h2 Events
      router-link(:to="{ name: 'events-all' }") View more &rarr;
    cards-event(:events="featuredEvents")
</template>

<script>
import moment from "moment"
import { orderBy } from "lodash"
import hf from "scripts/helpers"
import { mapGetters } from "vuex"
import CardsEvent from "cards/CardsEvent"
import TmCardHz from "cards/TmCardHz"
export default {
  name: "tm-wall",
  components: {
    CardsEvent,
    TmCardHz
  },
  data: () => ({
    hf: hf
  }),
  computed: {
    ...mapGetters(["community"]),
    featuredNews() {
      if (this.community.media.length > 0) {
        return this.community.media.find(i => i.featured)
      }
      return {}
    },
    featuredVideos() {
      if (this.community.media.length > 0) {
        return this.community.videos.filter(i => i.featured)
      }
      return []
    },
    featuredEvents() {
      let events = this.community.events
      if (events.length > 0) {
        return orderBy(
          events.filter(i => i.featured),
          [
            function(e) {
              return moment(e.dateEnd)
            }
          ],
          "asc"
        )
      }
      return []
    }
  },
  methods: {
    subtitle(event) {
      if (event.dateStart && event.dateEnd) {
        let value = `${this.hf.dates(event.dateStart, event.dateEnd)}`
        if (
          event.type === "Webinar" ||
          event.type === "AMA" ||
          event.type === "Podcast"
        ) {
          return `${value} · ${event.type}`
        }
        if (event.location) {
          return (value += " · " + event.location)
        }
        return value
      }
      return `TBD · ${event.location}`
    }
  }
}
</script>

<style lang="stylus">
.tm-wall
  .tm-card-hz
    margin-bottom 1rem

  .tm-card-hz__container
    position relative

  .tm-card-hz__image-outer
    margin-bottom 0

  .tm-wall__text
  .tm-card-hz__text
    padding 0.25rem + 0.5rem 0.5rem 0.25rem
    margin-top -0.25rem
    border-radius 0 0 0.25rem 0.25rem
    border 1px solid var(--bc)

  .tm-wall__title
  .tm-card-hz__title
    font-weight var(--fw-bold)
    color var(--txt)
    line-height var(--lh-heading)
    font-size 0.75rem
    margin-bottom 0.25rem

  .tm-wall__description
  .tm-card-hz__subtitle
    font-size 0.5rem
    color var(--dim)

.tm-wall__header
  display flex
  align-items center
  justify-content space-between
  margin-bottom 1rem

.tm-wall__features
  margin-bottom var(--pad320)

.tm-wall__news
.tm-wall__video
.tm-wall__event
  display block
  margin-bottom 1rem

.tm-wall__image img
  display block
  background var(--app-nav)
  width 100%
  height auto
  border-radius 0.25rem

.tm-wall__description + .tm-wall__description
  margin-top 0.5rem
  font-style italic

@media screen and (min-width: 768px)
  .tm-wall
    .tm-cards-hz
      flex-flow column nowrap
      margin 0
    .tm-card-hz__container
      padding 0

    .tm-wall__text
    .tm-card-hz__text
      padding 0.75rem + 0.5rem 1rem 0.75rem
      margin-top -0.5rem

    .tm-card-hz__title
      font-size 1rem

    .tm-card-hz__subtitle
      font-size 0.75rem

    .tm-wall__text
      padding 1rem + 0.5rem 1rem 1rem
      margin-top -0.5rem

    .tm-wall__title
      font-size 1.5rem
      font-family var(--ff-brand)
      margin-bottom 0.35rem
      font-weight var(--fw-semibold)

    .tm-wall__description
      font-size 1rem

  .tm-wall__container
    display flex

  .tm-wall__features
  .tm-wall__events
    flex 1

  // double padding
  .tm-wall__header
    margin-bottom 2rem

  .tm-wall__news
  .tm-wall .tm-card-hz
    margin-bottom 2rem

  .tm-wall__features-container
    padding-right 0.667rem

  .tm-wall__events-container
    padding-left 1.333rem

@media screen and (min-width: 1024px)
  .tm-wall
  .tm-wall__features
    flex 2
  .tm-wall__events
    flex 1

  // double padding
  .tm-wall__videos
    display flex
    margin -1rem
    .tm-card-hz
      flex 1
      padding 1rem
</style>
