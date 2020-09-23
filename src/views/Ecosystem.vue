<template lang="pug">
.page-projects
  tm-header
    div(slot="title") Ecosystem
    div(slot="subtitle") Welcome! We're proud to have a strong network of Cosmos developers and contributors from all around the world. 
    div(slot="subtitle") 

  tm-section
    div(slot="title") Chains / Apps
    div(slot="subtitle") Here is a showcase of  {{ apps.length }} projects that are actively building on the Cosmos ecosystem.

    .grid-container
      .grid-item(v-for="item in apps")
        a(:href="item.website" target="_blank" rel="noreferrer noopener").name {{ item.name }}
        code.status(v-if="!item.status || item.status !== '?'") {{ item.status }}
        .category(v-if="!item.category || item.category !== '?'") {{ item.category }}
        .list
          a(:href="item.github" target="_blank" rel="noreferrer noopener" v-if="item.github !== 'x'")
            img(src="~assets/brands/color/github.svg" alt="GitHub").logo
          a(:href="item.chat" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/color/telegram.svg" alt="Chat").logo
          a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-if="item.twitter !== 'x'")
            img(src="~assets/brands/color/twitter.svg" alt="Twitter").logo

</template>

<script>
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"

export default {
  name: "page-ecosystem",
  metaInfo: {
    title: "Ecosystem"
  },
  components: {
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["ecosystem"]),
    apps() {
      if (this.ecosystem.apps.length > 0) {
        let projects = this.ecosystem.apps
        return orderBy(projects, i => i.name.toLowerCase(), "asc")
      } else {
        return []
      }
    }
  },
  mounted() {
    this.$store.dispatch("initEcosystem")
  }
}
</script>

<style lang="stylus" scoped>
/deep/
  a[href]
    color inherit
    text-decoration none

.grid-container
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 4rem

.grid-item
  display inline-grid
  gap 0.5rem

.name
  font-weight bold

code
  font-family monospace
  font-size 0.875rem

.category
  display inline-block
  background rgb(234, 235, 244)
  font-size 0.875rem
  padding 0px 0.5rem
  border-radius 0.25rem
  width fit-content
  height fit-content

.list
  display inline-flex
  flex-direction row
  gap 0.5rem

.logo
  width 2rem
  height 2rem
</style>
