<template lang="pug">
.page-projects
  tm-header
    div(slot="suptitle") Ecosystem
    div(slot="title") Explore Cosmos Network
    div(slot="subtitle").subtitle Welcome, Cosmonauts! Discover a wide variety of apps and blockchains built in the Cosmos ecosystem by developers and contributors from across the globe.

    //- .grid-container
    //-   .grid-item(v-for="item in apps")
    //-     img(v-lazy="hf.optionalImg(item.logo).src" alt="App logo").logo
    //-     .status(v-if="!item.status || item.status !== '?'") {{ item.status }}
    //-     .category(v-if="!item.category || item.category !== '?'") {{ item.category }}

  tm-section
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
          ais-stats
          ais-hits
            template(slot="item" slot-scope="{ item }")
              //- ais-highlight(:hit="item" attribute="name")
              img(:src="getImgUrl(item.logo)" alt="App logo").logo
              .name
                a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website !== 'x'") {{ item.name }}
                div(v-else) {{ item.name }}
              ais-highlight(:hit="item" attribute="category")
              .list
                a(:href="item.docs" target="_blank" rel="noreferrer noopener").list-item
                  img(src="~assets/brands/gray/docs.svg" alt="Docs" v-if="item.docs !== 'x'").icon
                a(:href="item.github" target="_blank" rel="noreferrer noopener").list-item
                  img(src="~assets/brands/gray/github.svg" alt="GitHub" v-if="item.github !== 'x'").icon
                a(:href="item.chat" target="_blank" rel="noreferrer noopener").list-item
                  img(src="~assets/brands/gray/chat.svg" alt="Chat" v-if="item.chat !== 'x'").icon
                a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-if="item.twitter !== 'x'").list-item
                  img(src="~assets/brands/gray/twitter.svg" alt="Twitter").icon

          //- .pagination
          //-   ais-pagination

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
import algoliasearch from "algoliasearch"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"

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
      searchClient: algoliasearch("ME7376U3XW", apiKey)
    }
  },
  methods: {
    getImgUrl(input) {
      const findUrlRegex = /(?:(?:https?:\/\/)|(?:www\.))[^\s]+.(?:jpg|jpeg|svg|png)/g
      const match = findUrlRegex.exec(input)
      return match
    }
  }
}
</script>

<style src="../styles/algolia.css" lang="css"></style>

<style lang="stylus" scoped>
/deep/
  a[href]
    color inherit
    text-decoration none

  .tm-section__main
    p, ul, ol
      max-width unset

  .ais-Hits-list
    display grid
    grid-template-columns repeat(3, 1fr)
    gap 2rem

.subtitle
  max-width 40em

.cta-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap 2rem

  &__item
    &__btn
      margin-top 2rem

// .grid-container
//   display grid
//   grid-template-columns repeat(4, 1fr)
//   gap 4rem

// .grid-item
//   display inline-grid
//   gap 0.5rem

.logo
  width 4.5rem
  height 4.5rem

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

  .list-item + .list-item
    margin-left 0.5rem

.icon
  width 1.5rem
  height 1.5rem

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

//- .searchbox
//-   margin-bottom 2rem

//- .pagination
//-   margin 2rem auto
//-   text-align center
</style>
