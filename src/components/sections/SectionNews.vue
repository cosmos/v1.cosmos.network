<template lang="pug">
tm-section
  div(slot="title") Latest News & Events
  .tm-cards-hz
    template(v-for="i in news")
      tm-card-hz(
        v-if="i.type === 'conference'"
        :flush="hf.isFlush(hf.optionalImg(i.value.logo).type)"
        :img-src="hf.optionalImg(i.value.logo).src"
        :key="i.value.id"
        :subtitle="`${hf.dates(i.value.dateStart, i.value.dateEnd)} · ${i.value.type}`"
        :title="i.value.title"
        :href="i.value.link ? i.value.link : false"
        :to="{ name: 'event', params: { event: i.value.slug }}")
      tm-card-hz(
        v-else-if="i.type === 'post'"
        flush="true"
        :href="i.value.link"
        :img-src="hf.blogImgSrc(i.value['content:encoded'])"
        :key="`post-${i.value.title}`"
        :subtitle="`Published ${hf.date(i.value.isoDate)}`"
        :title="i.value.title")

  section-banner.section-banner
</template>

<script>
import moment from "moment"
import hf from "scripts/helpers"
import { orderBy, reverse } from "lodash"
import { mapGetters } from "vuex"
import TmCardHz from "cards/TmCardHz"
import TmSection from "common/TmSection"
import SectionBanner from "sections/SectionBanner"

export default {
  name: "section-news",
  components: {
    TmCardHz,
    TmSection,
    SectionBanner
  },
  data: () => ({
    hf: hf
  }),
  computed: {
    ...mapGetters(["blog", "events", "meetup"]),
    news() {
      let items = [
        ...this.conferences.map(c => ({
          type: "conference",
          date: c.dateStart,
          value: c
        })),
        ...this.posts.map(p => ({
          type: "post",
          date: p.isoDate,
          value: p
        })),
        ...this.meetup.meetupEvents.map(e => {
          // TODO: some created events don't have country and venue
          // const country = e.event.venue.country
          // const venue = e.event.venue.name
          return {
            type: "conference",
            date: e.event.local_date,
            value: {
              id: e.event.id,
              dateStart: e.event.time,
              dateEnd: e.event.time,
              // location: `${venue}${country ? ", " + country : ""}`,
              location: "Online event",
              title: e.event.name,
              link: e.event.link,
              logo: [
                {
                  type: "image/jpeg",
                  url: e.event_image && e.event_image.photo_link
                }
              ]
            }
          }
        })
      ]
      items = orderBy(items, i => moment(i.date), ["desc"])
      items = items.slice(0, 6)
      return items
    },
    conferences() {
      if (this.events && this.events.length > 0) {
        let events = this.events.filter(e => e.active)
        events = orderBy(
          events,
          [
            function(e) {
              return moment(e.dateEnd)
            }
          ],
          "desc"
        )
        return reverse(events.slice(0, 3))
      } else {
        return ["1", "2", "3"].map(i => ({
          title: `Loading Event ${i}...`,
          location: "Loading...",
          logo: [{ url: "placeholder" }],
          dateStart: new Date(),
          dateEnd: new Date(),
          slug: "#"
        }))
      }
    },
    posts() {
      if (this.blog && this.blog.posts && this.blog.posts.length > 0) {
        return this.blog.posts.slice(0, 3)
      } else {
        return ["1", "2", "3"].map(i => ({
          title: `Loading News ${i}...`,
          "content:encoded": "placeholder",
          link: "#"
        }))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.section-banner
  margin 5rem auto
</style>
