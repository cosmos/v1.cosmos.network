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
        img(v-lazy="hf.optionalImg(item.logo).src" alt="App logo").logo
        .name
          a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website !== 'x'") {{ item.name }}
          div(v-else) {{ item.name }}
        .status(v-if="!item.status || item.status !== '?'") {{ item.status }}
        .category(v-if="!item.category || item.category !== '?'") {{ item.category }}
        .list
          a(:href="item.docs" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/white/docs.svg" alt="Docs" v-if="item.docs !== 'x'").icon
          a(:href="item.github" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/color/github.svg" alt="GitHub" v-if="item.github !== 'x'").icon
          a(:href="item.chat" target="_blank" rel="noreferrer noopener")
            img(src="~assets/brands/white/chat.svg" alt="Chat" v-if="item.chat !== 'x'").icon
          a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-if="item.twitter !== 'x'")
            img(src="~assets/brands/color/twitter.svg" alt="Twitter").icon

</template>

<script>
import hf from "scripts/helpers"
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
  data() {
    return {
      hf: hf
    }
  },
  computed: {
    ...mapGetters(["ecosystem"]),
    apps() {
      if (this.ecosystem.apps.length > 0) {
        // let projects = this.ecosystem.apps.filter(
        //   e => e.status !== "Deprecated"
        // )
        let projects = this.ecosystem.apps
        return orderBy(projects, i => i.name.toLowerCase(), "asc")
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// /deep/
//   a[href]
//     color inherit
//     text-decoration none

.grid-container
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 4rem

.grid-item
  display inline-grid
  gap 0.5rem

.logo
  width 4rem
  height 4rem

.name
  font-weight bold

.status
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

.icon
  width 2rem
  height 2rem
</style>
