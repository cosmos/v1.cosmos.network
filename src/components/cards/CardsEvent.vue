<template lang="pug">
.tm-cards-hz
  tm-card-hz(
    v-for="i in events"
    :flush="hf.isFlush(hf.optionalImg(i.logo).type)"
    :ended="hf.pastDate(i.dateEnd)"
    :img-src="hf.optionalImg(i.logo).src"
    :key="i.id"
    :subtitle="subtitle(i)"
    :title="i.title"
    :type="i.type"
    :href="i.href"
    :to="{ name: 'event', params: { event: i.slug }}")
</template>

<script>
import hf from "scripts/helpers"
import TmCardHz from "cards/TmCardHz"
export default {
  name: "cards-events",
  components: {
    TmCardHz
  },
  data: () => ({
    hf: hf
  }),
  methods: {
    subtitle(event) {
      if (event.subtitle) {
        return event.subtitle
      }
      if (event.dateStart && event.dateEnd) {
        let value = `${this.hf.dates(event.dateStart, event.dateEnd)}`
        if (event.type) {
          return `${value} · ${event.type}`
        }
        // if (event.location) {
        //   return (value += " · " + event.location)
        // }
        return value
      }
      return `TBD · ${event.location}`
    }
  },
  props: ["events"]
}
</script>
