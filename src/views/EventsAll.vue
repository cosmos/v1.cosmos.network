<template lang="pug">
.page-events
  tm-header
    div(slot="title") All Events
    div(slot="subtitle") Meet with the Cosmos team at one of our events.

  tm-section(v-if="!upcomingEvents.length")
    div(slot="title") Upcoming Events
    div(slot="subtitle") There are currently no upcoming events.
  tm-section(v-else)
    div(slot="title") Upcoming Events
    div(slot="subtitle") These are community events that we are either hosting or attending.
    cards-event(:events="upcomingEvents")
    section-banner.section-banner

  tm-section(v-if="pastEvents.length > 0")
    div(slot="title") Past Events
    cards-event(:events="pastEvents")
</template>

<script>
import moment from "moment"
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import CardsEvent from "cards/CardsEvent"
import TmBtn from "common/TmBtn"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import SectionBanner from "sections/SectionBanner"

export default {
  name: "page-events-all",
  metaInfo: { title: "All Events" },
  components: {
    CardsEvent,
    TmBtn,
    TmHeader,
    TmSection,
    SectionBanner
  },
  computed: {
    ...mapGetters(["events", "urls", "cwu", "meetup"]),
    datedEvents() {
      return [...this.events].filter(e => e.dateStart !== undefined)
    },
    cwuEvents() {
      let cwuEvents = this.cwu.cwu.map(e => {
        return {
          type: "Live Session",
          id: e.autonumber,
          featured: false,
          dateStart: e.date,
          dateEnd: e.date,
          title: e.title,
          href: `https://cosmos.network/series/code-with-us/${e.slug}`,
          logo: [
            {
              type: "image/jpeg",
              url: e.coverImg[0].url
            }
          ]
        }
      })
      return cwuEvents
    },
    upcomingEvents() {
      // fuzz search to current and future events within 1 day of today
      let events = [...this.datedEvents, ...this.cwuEvents].filter(
        e => moment(e.dateEnd).add(1, "days") >= moment()
      )

      events = [
        ...events,
        ...this.meetup.meetupEvents.map(e => {
          // TODO: some created events don't have country and venue
          // const country = e.event.venue.country
          // const venue = e.event.venue.name
          return {
            type: "Meetup",
            date: e.event.local_date,
            id: e.event.id,
            featured: true,
            dateStart: e.event.time,
            dateEnd: e.event.time,
            // location: `${venue}${country ? ", " + country : ""}`,
            location: "Online event",
            title: e.event.name,
            href: e.event.link,
            logo: [
              {
                type: "image/jpeg",
                url: e.event_image && e.event_image.photo_link
              }
            ]
          }
        })
      ]
      events = orderBy(
        events,
        [
          function(e) {
            return moment(e.dateStart)
          }
        ],
        "asc"
      )
      return events
    },
    pastEvents() {
      let events = this.datedEvents.filter(
        e => moment(e.dateEnd).add(1, "days") < moment()
      )
      return orderBy(
        events,
        [
          function(e) {
            return moment(e.dateEnd)
          }
        ],
        "desc"
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.section-banner
  margin-top 3rem
  margin-bottom 3rem
</style>
