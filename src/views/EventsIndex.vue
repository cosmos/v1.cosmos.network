<template lang="pug">
tm-scroll-spy(:sections="5")
  tm-header
    div(slot="title") Events & News
    div(slot="subtitle") Learn about the latest happenings and events in the greater Cosmos community.

  tm-section
    tm-wall

  tm-section
    div(slot="title") Upcoming Events
    div(slot="subtitle") These are the upcoming events that we are either hosting or attending. #[router-link(:to="{ name: 'events-all' }") View more &rarr;]
</template>

<script>
import moment from "moment"
import hf from "scripts/helpers"
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmWall from "common/TmWall"
export default {
  name: "page-events-index",
  metaInfo: {
    title: "Events"
  },
  components: {
    TmCardHz,
    TmBtn,
    TmHeader,
    TmSection,
    TmWall
  },
  data: () => ({
    hf: hf
  }),
  computed: {
    ...mapGetters(["links", "community", "meetup"]),
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
      if (this.community.events.length > 0) {
        return this.community.events.filter(i => i.featured)
      }
      return []
    },
    featuredProjects() {
      if (this.community.ecosystem.length > 0) {
        return this.community.ecosystem.filter(e => e.featured)
      }
      return []
    },
    recentEvents() {
      let allEvents = this.community.events
      allEvents = [
        ...allEvents,
        ...this.meetupEvents.map(e => ({
          // TODO: some created events don't have country and venue
          // const country = e.event.venue.country
          // const venue = e.event.venue.name
          // const city = e.event.venue.city
          // const localized_country = e.event.venue.localized_country_name
          type: "conference",
          date: e.event.local_date,
          id: e.event.id,
          featured: true,
          dateStart: e.event.time,
          dateEnd: e.event.time,
          // location: `${venue}, ${city}, ${localized_country}`,
          location: "Online event",
          title: e.event.name,
          url: e.event.link,
          logo: [
            {
              type: "image/jpeg",
              url: e.event_image && e.event_image.photo_link
            }
          ]
        }))
      ]
      if (allEvents.length > 0) {
        let events = orderBy(
          allEvents,
          [
            function(e) {
              return moment(e.dateStart)
            }
          ],
          "desc"
        )
        events = events.slice(0, 10)
        events = orderBy(
          events,
          [
            function(e) {
              return moment(e.dateStart)
            }
          ],
          "asc"
        )
        events = events.filter(i => moment(i.dateEnd).isAfter(new Date()))
        return events
      }
      return []
    }
  },
  mounted() {
    if (this.community.media.length === 0) {
      this.$store.dispatch("initCommunityMedia")
    }
    if (this.community.videos.length === 0) {
      this.$store.dispatch("initCommunityVideos")
    }
    if (this.community.ecosystem.length === 0) {
      this.$store.dispatch("initCommunityEcosystem")
    }
  }
}
</script>

<style lang="stylus">
@media screen and (min-width:768px)
  .community-cols
    display flex
    margin -1rem
  .community-col
    flex 1
@media screen and (min-width:1152px)
  .community-cols
    display flex
    margin -1rem
  .community-col
    flex 1
  .community-col.community-col-2
    flex 2

    .community-col__container
      display flex
      flex-flow row wrap
</style>
