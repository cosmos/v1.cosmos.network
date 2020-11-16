<template lang="pug">
.page-projects
  tm-header
    div(slot="suptitle") Ecosystem
    div(slot="title") Explore Cosmos Network
    div(slot="subtitle") Welcome, Cosmonauts! Discover a wide variety of apps and blockchains built in the Cosmos ecosystem by developers and contributors from across the globe.

    //- .grid-container
    //-   .grid-item(v-for="item in apps")
    //-     img(v-lazy="hf.optionalImg(item.logo).src" alt="App logo").logo
    //-     .name
    //-       a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website !== 'x'") {{ item.name }}
    //-       div(v-else) {{ item.name }}
    //-     .status(v-if="!item.status || item.status !== '?'") {{ item.status }}
    //-     .category(v-if="!item.category || item.category !== '?'") {{ item.category }}
    //-     .list
    //-       a(:href="item.docs" target="_blank" rel="noreferrer noopener")
    //-         img(src="~assets/brands/white/docs.svg" alt="Docs" v-if="item.docs !== 'x'").icon
    //-       a(:href="item.github" target="_blank" rel="noreferrer noopener")
    //-         img(src="~assets/brands/color/github.svg" alt="GitHub" v-if="item.github !== 'x'").icon
    //-       a(:href="item.chat" target="_blank" rel="noreferrer noopener")
    //-         img(src="~assets/brands/white/chat.svg" alt="Chat" v-if="item.chat !== 'x'").icon
    //-       a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-if="item.twitter !== 'x'")
    //-         img(src="~assets/brands/color/twitter.svg" alt="Twitter").icon

  tm-section
    .container
      ais-instant-search(:search-client="searchClient" index-name="apps")
        .search-panel
          .search-panel__filters
            .category Categories
            ais-refinement-list(attribute="category")
            .category.status Status
            ais-refinement-list(attribute="status")

          .search-panel__results
            .search-panel__results__title Cosmos apps and projects
            ais-search-box(placeholder="Search here" class="searchbox")
            ais-hits
              template(slot="item" slot-scope="{ item }")
                ais-highlight(:hit="item" attribute="name")

            .pagination
              ais-pagination

  tm-section
    .cta-container
      .cta-container__item
        .cta-container__item__title Want to build your own Cosmos app?
        tm-btn(
          value="Build now" size="lg" type="anchor" href="https://tutorials.cosmos.network/" target="_blank" rel="noreferrer noopener"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
      .cta-container__item
        .cta-container__item__title Need funding to build your great idea?
        tm-btn(
          value="Get a grant" size="lg" type="anchor" href="https://tutorials.cosmos.network/" target="_blank" rel="noreferrer noopener"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
      .cta-container__item
        .cta-container__item__title Built something with Cosmos tools?
        tm-btn(
          value="Submit a project" size="lg" type="anchor" href="https://tutorials.cosmos.network/" target="_blank" rel="noreferrer noopener"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
</template>

<script>
import hf from "scripts/helpers"
// import { orderBy } from "lodash"
// import { mapGetters } from "vuex"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import algoliasearch from "algoliasearch"

import "instantsearch.css/themes/algolia-min.css"

const apiKey = process.env.VUE_APP_ALGOLIA_SEARCH_API_KEY

export default {
  name: "page-ecosystem",
  metaInfo: {
    title: "Ecosystem"
  },
  components: {
    TmHeader,
    TmSection,
    TmBtn
  },
  data() {
    return {
      hf: hf,
      searchClient: algoliasearch("ME7376U3XW", apiKey)
    }
  },
  computed: {
    // ...mapGetters(["ecosystem"]),
    // apps() {
    //   if (this.ecosystem.apps.length > 0) {
    //     // let projects = this.ecosystem.apps.filter(
    //     //   e => e.status !== "Deprecated"
    //     // )
    //     let projects = this.ecosystem.apps
    //     return orderBy(projects, i => i.name.toLowerCase(), "asc")
    //   } else {
    //     return []
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
// /deep/
//   a[href]
//     color inherit
//     text-decoration none

.cta-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap 2rem

  &__item
    &__btn
      margin-top 2rem

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
  color var(--dim)
  text-transform uppercase
  font-weight var(--fw-bold)
  font-size 1rem
  letter-spacing var(--tracking-2-wide)
  line-height 1.25rem

.status
  margin-top 2rem

.list
  display inline-flex
  flex-direction row
  gap 0.5rem

.icon
  width 2rem
  height 2rem

.container
  max-width 1200px
  margin 0 auto
  padding 1rem

.search-panel
  display flex

.search-panel__filters
  flex 1
  margin-right 1em

.search-panel__results
  flex 3

  &__title
    font-weight 600
    font-size 2rem
    line-height 2.5rem
    letter-spacing -0.01em
    color #000000
    margin-bottom 2rem

.searchbox
  margin-bottom 2rem

.pagination
  margin 2rem auto
  text-align center
</style>
