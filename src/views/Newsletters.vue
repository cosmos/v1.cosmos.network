<template lang="pug">
  div
    tm-header
      div(slot="title") Cosmos newsletters
    tm-section
      div(slot="title") Ecosystem Updates
      .tm-cards-hz.tm-cards-hz--horizontal.tm-section-margin
        tm-card-hz(v-for="item in filtered('community')" :key="item[0]" :title="title(item)" :subtitle="date(item)" :href="`/newsletters/community/${item[0]}/`" :img-src="true" :img-bg-src="`/newsletters/community/${item[0]}/cover.jpg`")
    tm-section
      div(slot="title") Engineering Updates
      .tm-cards-hz.tm-cards-hz--horizontal.tm-section-margin
        tm-card-hz(v-for="item in filtered('engineering')" :key="item[0]" :title="title(item)" :subtitle="date(item)" :href="`/newsletters/engineering/${item[0]}/`" :newsletters="true")
</template>

<style lang="stylus" scoped>
.tm-section-margin
  margin-top 4rem

@media screen and (max-width: 767px)
  .tm-section-margin
    margin-top 3rem
</style>

<script>
import list from "@/newsletters.txt"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmCardHz from "cards/TmCardHz"
import moment from "moment"
import { reverse } from "lodash"
import { CosmosNewsletterSignup } from "@cosmos-ui/vue"

export default {
  components: { TmHeader, TmSection, TmCardHz, CosmosNewsletterSignup },
  data: function() {
    return {
      list: reverse(
        list
          .split("\n")
          .filter(e => e.length > 0)
          .map(e => e.split("|").map(e => e.trim()))
      )
    }
  },
  methods: {
    filtered(category) {
      return this.list.filter(e => e[2] === category)
    },
    title(item) {
      const title = item[1].replace(/<(.*?)>/g, "").trim()
      return title
    },
    date(item) {
      return `Published ${moment(item[0]).format("MMMM, YYYY")}`
    }
  }
}
</script>
