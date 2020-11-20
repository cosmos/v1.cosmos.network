<template lang="pug">
.page-projects
  tm-header
    div(slot="suptitle") Ecosystem
    div(slot="title") Explore Cosmos Network
    div(slot="subtitle").subtitle Welcome, Cosmonauts! Discover a wide variety of apps and blockchains built in the Cosmos ecosystem by developers and contributors from across the globe.

  tm-section
    ais-instant-search(:search-client="searchClient" index-name="apps")
      .layout
        .layout__sidebar
          ais-search-box(placeholder="Search" class="searchbox")
          .clear
            ais-clear-refinements
          .header
            .header__title Categories
            span.sr-only Filter
            ais-refinement-list(attribute="category" :sort-by="['name:asc']" :limit="20")
          .header
            .header__title Status
            span.sr-only Filter
            ais-refinement-list(attribute="status" :sort-by="['count:desc']")
          .faq
            .faq__title Be Advised
            .faq__desc We have not officially vetted or contacted these projects for proof. Do your own research before using any service in this open network.

        .layout__results
          .layout__results__title Cosmos apps and projects
          
          div
            ais-hits
              template(slot="item" slot-scope="{ item }")
                .item
                  .logo-wrapper
                    img(:src="getImgUrl(item.logo)" alt="App logo" v-if="item.logo").logo-wrapper__item
                    img(src="~assets/images/ecosystem/avatar-placeholder.svg" v-else).logo-wrapper__item
                  .text
                    .text__top
                      a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website !== 'x'").text__top__name {{ item.name }}
                        icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanTxt(item.status)]}`}" v-tooltip.top="item.status").dot
                      .text__top__name(v-else) {{ item.name }}
                        icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanTxt(item.status)]}`}" v-tooltip.top="item.status").dot
                    .text__category(v-if="!item.category || item.category !== '?'") {{ item.category }}
                    .text__list
                      a(:href="item.docs" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Docs'" v-if="item.docs").list-item
                        img(src="~assets/brands/gray/docs.svg" alt="Docs").icon
                      a(:href="item.github" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'GitHub'" v-if="item.github").list-item
                        img(src="~assets/brands/gray/github.svg" alt="GitHub").icon
                      a(:href="item.chat" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Chat'" v-if="item.chat").list-item
                        img(src="~assets/brands/gray/chat.svg" alt="Chat").icon
                      a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Twitter'" v-if="item.twitter").list-item
                        img(src="~assets/brands/gray/twitter.svg" alt="Twitter").icon

            ais-state-results
              .no-results(slot-scope="{ state: { query }, results: { hits } }" v-show="!hits.length") No results found matching <em>{{ query }}</em>.

            .pagination
              ais-pagination

  tm-section
    .cta-container
      .cta-container__item
        .cta-container__item__title Want to build your own Cosmos app?
        tm-btn(
          value="Build now" size="lg" type="link" :to="{ name: 'tools' }"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
      .cta-container__item
        .cta-container__item__title Need funding to build your great idea?
        tm-btn(
          value="Get a grant" size="lg" type="link" :to="{ name: 'contributors' }"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
      .cta-container__item
        .cta-container__item__title Built something with Cosmos tools?
        tm-btn(
          value="Submit a project" size="lg" type="anchor" href="https://airtable.com/tblii5D2VeOOFZA4c/viwDRWlFKDPpHZOII" target="_blank" rel="noreferrer noopener"
          icon="arrow_forward" icon-pos="right").cta-container__item__btn
</template>

<script>
import algoliasearch from "algoliasearch"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import IconDot from "common/IconDot"

const apiKey = process.env.VUE_APP_ALGOLIA_SEARCH_API_KEY

const searchClient = algoliasearch("ME7376U3XW", apiKey)

export default {
  name: "page-ecosystem",
  metaInfo: {
    title: "Ecosystem"
  },
  components: {
    TmHeader,
    TmSection,
    TmBtn,
    IconDot
  },
  data() {
    return {
      searchClient: searchClient,
      dotColor: {
        mainnet: "#4ACF4A",
        testnet: "#66A1FF",
        development: "#FF9500",
        proofofconcept: "rgba(59, 66, 125, 0.12)",
        beta: "linear-gradient(95.47deg, #086108 0%, #018A01 100%)",
        alpha: "linear-gradient(95.47deg, #086108 0%, #018A01 100%)"
      }
    }
  },
  methods: {
    getImgUrl(input) {
      const findUrlRegex = /(?:(?:https?:\/\/)|(?:www\.))[^\s]+.(?:jpg|jpeg|svg|png)/g
      const match = findUrlRegex.exec(input)

      return match
    },
    cleanTxt(item) {
      return item.replace(/\s+/g, "").toLowerCase()
    }
  }
}
</script>

<style lang="stylus" scoped>
/deep/
  .tm-section__main ol
    max-width -webkit-fill-available

  @media screen and (max-width: 400px)
    .tm-section__main ol
      margin auto

.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.dot
  margin-left 5px

.subtitle
  max-width 40em

.cta-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap 2rem

  &__item
    &__btn
      margin-top 2rem

    &__title
      font-weight 600
      font-size 1.5rem
      line-height 2rem
      color #000000

.clear
  margin-top 2rem

.header
  margin-top 2rem
  color var(--dim)
  text-transform uppercase
  font-weight var(--fw-bold)
  font-size 0.75rem
  line-height 1.125rem
  letter-spacing var(--tracking-2-wide)

  &__title
    padding-left 0.9063rem
    padding-right 0.9063rem

.faq
  margin-top 3rem
  color rgba(0, 0, 0, 0.8)
  font-size 1rem
  letter-spacing var(--tracking-2-wide)
  line-height 1.25rem
  padding 1.25rem
  background rgba(176, 180, 207, 0.087)
  border-radius 0.5rem
  margin-left 0.9063rem
  margin-right 0.9063rem

  &__title
    text-transform uppercase
    font-weight var(--fw-bold)

  &__desc
    margin-top 0.5rem
    font-size 0.8125rem
    line-height 1.125rem
    letter-spacing 0.03em
    color rgba(0, 0, 0, 0.667)

.layout
  display grid
  width 100%
  grid-template-columns var(--sidebar-width) calc(100% - var(--sidebar-width))
  max-width var(--layout-max-width,1540px)
  margin-left auto
  margin-right auto
  position relative

.layout__sidebar
  flex 1
  margin-right 1em

.layout__results
  flex 3

  &__title
    font-weight 600
    font-size 2rem
    line-height 2.5rem
    letter-spacing -0.01em
    color #000000
    margin-bottom 2rem

.item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  text-decoration none
  border-radius .5rem
  transition all .25s
  gap 1.5rem

.logo-wrapper
  background linear-gradient(135deg, #EEEEEE 0%, #E0E0E0 100%, #E0E0E0 100%)
  width fit-content
  height fit-content
  padding 1.25rem
  border-radius 1.5rem
  display flex
  align-items center

  &__item
    width 4.5rem
    height 4.5rem

.text
  display flex
  flex-direction column

  &__top

    &__name
      font-weight bold
      font-size 1.125rem
      line-height 1.6875rem
      color #5064FB

  &__list
    display inline-flex
    justify-content flex-start
    flex-direction row
    margin-top auto

.list-item + .list-item
  margin-left 1rem

.icon
  width 1.5rem
  height 1.5rem

.pagination
  margin 2rem auto
  text-align center
  display flex
  justify-content center
  align-items center

.no-results
  margin-top 2rem

@media screen and (max-width: 832px)
  .layout
    display block

    &__results
      margin-top 2rem

  .cta-container
    display flex
    flex-direction column
    justify-content flex-start
    align-items flex-start
    margin 2rem 0

    &__item + &__item
      margin-top 3rem

@media screen and (max-width: 600px)
  .cta-container

    &__item + &__item
      margin-top 2rem

@media screen and (max-width: 400px)
  .item
    gap 1rem

  .logo-wrapper

    &__item
      width 2.5rem
      height 2.5rem

  .text

    &__top
      &__name
        font-size 1rem

    &__list
      margin-top 1rem
</style>

<style src="../styles/algolia.css" lang="css" />
<style src="../styles/tooltip.css" lang="css" />
