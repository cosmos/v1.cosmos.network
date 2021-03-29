<template lang="pug">
.page-projects
  tm-header
    div(slot="suptitle") Ecosystem
    div(slot="title") Explore Cosmos Network
    div(slot="subtitle").subtitle Welcome, Cosmonauts! Discover a wide variety of apps, blockchains, wallets and explorers, built in the Cosmos ecosystem by developers and contributors from across the globe.
    div(slot="tabs").tabs
      .tabs__item #[router-link(:to="{ name: 'ecosystem-apps'}") Apps &amp; projects]
      .tabs__item #[router-link(:to="{ name: 'ecosystem-wallets'}") Wallets]

  tm-section
    ais-instant-search(:search-client="searchClient" index-name="apps")
      .layout
        .layout__sidebar
          ais-search-box(placeholder="Search" class="searchbox")
          .header
            .heading
              .heading__title Categories
              ais-clear-refinements(:excluded-attributes="['status']")
                div(slot-scope="{ canRefine, refine }" :disabled="!canRefine" v-show="canRefine" @click="refine()").heading__clear Clear
            span.sr-only Categories Filter
            ais-menu(attribute="category" :sort-by="['count:desc', 'name:asc']" :limit="20" :transform-items="transformItems")

          .header
            .heading
              .heading__title Status
              ais-clear-refinements(:excluded-attributes="['category']")
                div(slot-scope="{ canRefine, refine }" :disabled="!canRefine" v-show="canRefine" @click="refine()").heading__clear Clear
            span.sr-only Status Filter
            ais-refinement-list(attribute="status" operator="or" :sort-by="['count:desc']" :transform-items="transformItems")
          .faq
            .faq__title Be Advised
            .faq__desc We have not officially vetted or contacted these projects for proof. Do your own research before using any service in this open network.

        .layout__results
          div
            ais-hits
              template(slot="item" slot-scope="{ item }")
                .item
                  a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website && item.website !== 'x'")
                    .logo-wrapper
                      img(:src="item.logo[0].url" :alt="`${item.name} App logo`" v-if="item.logo").logo-wrapper__base
                      img(:src="item.logo[0].url" :alt="`${item.name} App logo`" v-if="item.logo").logo-wrapper__top
                      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.name} App logo`" v-if="!item.logo").logo-wrapper__base
                      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.name} App logo`" v-if="!item.logo").logo-wrapper__top
                      .logo-wrapper__color
                  div(v-else)
                    .logo-wrapper
                      img(:src="item.logo[0].url" :alt="`${item.name} App logo`" v-if="item.logo").logo-wrapper__base
                      img(:src="item.logo[0].url" :alt="`${item.name} App logo`" v-if="item.logo").logo-wrapper__top
                      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.name} App logo`" v-if="!item.logo").logo-wrapper__base
                      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.name} App logo`" v-if="!item.logo").logo-wrapper__top
                      .logo-wrapper__color
                  .text
                    .text__top
                      a(:href="item.website" target="_blank" rel="noreferrer noopener" v-if="item.website && item.website !== 'x'").text__top__name {{ item.name }}
                        span(v-tooltip.top="item.status" v-if="item.status !== 'Unknown'").dot
                          icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanText(item.status)]}`}")
                      .text__top__name__none(v-else) {{ item.name }}
                        span(v-tooltip.top="item.status" v-if="item.status !== 'Unknown'").dot
                          icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanText(item.status)]}`}")
                    .text__category(v-if="!item.category || item.category !== '?'") {{ item.category }}
                    .text__list
                      a(:href="item.docs" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Docs'" v-if="item.docs && item.docs !== 'x'").list-item
                        img(src="~assets/brands/gray/docs.svg" alt="Docs").icon
                      a(:href="item.github" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'GitHub'" v-if="item.github && item.github !== 'x'").list-item
                        img(src="~assets/brands/gray/github.svg" alt="GitHub").icon
                      a(:href="item.chat" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Chat'" v-if="item.chat && item.chat !== 'x'").list-item
                        img(src="~assets/brands/gray/chat.svg" alt="Chat").icon
                      a(:href="item.twitter" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Twitter'" v-if="item.twitter && item.twitter !== 'x'").list-item
                        img(src="~assets/brands/gray/twitter.svg" alt="Twitter").icon

            ais-state-results
              .no-results(slot-scope="{ state: { query }, results: { hits } }" v-show="!hits.length") No results found matching <em>{{ query }}</em>.

            .pagination
              ais-pagination
                template(slot="first" slot-scope="{ refine, isFirstPage }")
                  div(@click="refine" :disabled="isFirstPage" v-show="!isFirstPage")
                template(slot="previous" slot-scope="{ refine, isFirstPage }")
                  div(@click="refine" :disabled="isFirstPage" v-show="!isFirstPage") previous
                template(slot="next" slot-scope="{ refine, isLastPage }")
                  div(@click="refine" :disabled="isLastPage" v-show="!isLastPage") next
                template(slot="last" slot-scope="{ refine, isLastPage }")
                  div(@click="refine" :disabled="isLastPage" v-show="!isLastPage") last

  section-messari

  tm-section.cta-bg
    .cta-container
      .cta-container__item
        .cta-container__item__title Want to build your own Cosmos app?
        .cta-container__item__btn
          tm-btn(
            value="Build now" size="lg" type="link" :to="{ name: 'tools' }"
            icon="arrow_forward" icon-pos="right" color="transparent-bg")
      .cta-container__item
        .cta-container__item__title Need funding to build your great idea?
        .cta-container__item__btn
          tm-btn(
            value="Get a grant" size="lg" type="link" :to="{ name: 'contributors' }"
            icon="arrow_forward" icon-pos="right" color="transparent-bg")
      .cta-container__item
        .cta-container__item__title Built something with Cosmos tools?
        .cta-container__item__btn
          tm-btn(
            value="Submit a project" size="lg" type="anchor" href="https://airtable.com/shrHJJ4U4ChUxjILk" target="_blank" rel="noreferrer noopener"
            icon="arrow_forward" icon-pos="right" color="transparent-bg")
</template>

<script>
import algoliasearch from "algoliasearch"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
import TmBtn from "common/TmBtn"
import SectionMessari from "sections/SectionMessari"
import IconDot from "common/IconDot"

const searchApiKey = process.env.VUE_APP_ALGOLIA_SEARCH_API_KEY
const searchClient = algoliasearch("ME7376U3XW", searchApiKey)

export default {
  name: "page-ecosystem",
  metaInfo: {
    title: "Ecosystem"
  },
  components: {
    TmHeader,
    TmSection,
    TmBtn,
    SectionMessari,
    IconDot
  },
  data() {
    return {
      searchClient: searchClient,
      dotColor: {
        mainnet: "#4ACF4A",
        testnet: "#BA3FD9",
        development: "#FF9500",
        proofofconcept: "#3B427D",
        beta: "#66A1FF",
        alpha: "#BCE7FF",
        live: "#4ACF4A"
      }
    }
  },
  methods: {
    moveToTheEnd(arr, word) {
      arr.map((elem, index) => {
        if (elem.label.toLowerCase() === word.toLowerCase()) {
          arr.splice(index, 1)
          arr.push(elem)
        }
      })
      return arr
    },
    transformItems(items) {
      this.moveToTheEnd(items, "Uncategorized")
      this.moveToTheEnd(items, "Unknown")

      return items.map(item => ({
        ...item
      }))
    },
    cleanText(item) {
      return item
        .split(" ")
        .join("")
        .toLowerCase()
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

.tabs
  display flex
  flex-direction row

.tabs__item
  cursor pointer

.tabs__item > a
  padding 0.75rem 0
  font-weight 500
  font-size 1.3125rem
  line-height 100%
  letter-spacing -0.007em
  color rgba(0, 4, 56, 0.738)
  line-height 2rem

  &.router-link-exact-active
    background inherit
    border-bottom 2px solid #4251FA

.tabs__item + .tabs__item
  margin-left 2rem

.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.hits
  color var(--dim)

.cta-bg
  background-color var(--app-fg)

.heading
  display flex
  justify-content space-between

  &__title
    padding-left 1rem
    padding-right 1rem

  &__clear
    color var(--link)
    text-transform uppercase
    font-weight var(--fw-bold)
    font-size 0.75rem
    line-height 1.125rem
    letter-spacing var(--tracking-2-wide)
    cursor pointer
    padding-right 1rem

.dot
  padding 0.25rem

.subtitle
  max-width 40em

.cta-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap 4rem

  &__item
    display flex
    flex-direction column

    &__btn
      display inline-flex
      justify-content flex-start
      flex-direction row
      margin-top 2rem

    &__title
      font-weight 600
      font-size 1.5rem
      line-height 2rem
      color #000000

.header
  margin-top 2rem
  color var(--dim)
  text-transform uppercase
  font-weight var(--fw-bold)
  font-size 0.75rem
  line-height 1.125rem
  letter-spacing var(--tracking-2-wide)

.faq
  margin-top 3rem
  color rgba(0, 0, 0, 0.8)
  font-size 1rem
  letter-spacing var(--tracking-2-wide)
  line-height 1.25rem
  padding 1rem
  background var(--app-fg)
  border-radius 0.5rem
  max-width 24rem

  &__title
    text-transform uppercase
    font-weight var(--fw-bold)
    font-size 0.75rem

  &__desc
    margin-top 0.5rem
    font-size 0.8125rem
    line-height 1.125rem
    letter-spacing 0.03em
    color rgba(0, 0, 0, 0.667)

.layout
  display grid
  width 100%
  grid-template-columns var(--sidebar-width) 1fr
  gap 3rem
  margin-left auto
  margin-right auto
  position relative

.layout__sidebar
  flex 1
  margin-right 1em
  margin-left -1rem

.layout__results
  max-width var(--layout-max-width,1540px)
  flex 3

  &__title
    font-weight 600
    font-size 2rem
    line-height 2.5rem
    letter-spacing -0.01em
    color #000000
    margin-bottom 3rem
    display flex
    justify-content space-between

.item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  text-decoration none
  border-radius .5rem
  transition all .25s
  gap 1.5rem

.logo-wrapper
  width fit-content
  height fit-content
  padding 1.25rem
  border-radius 20%
  display flex
  align-items center
  background linear-gradient(135deg,#fff,#e0e0e0)
  overflow hidden
  filter blur(0px)
  position relative

  &__color
    width 4.5rem
    height 4.5rem

  &__base
    width 4.5rem
    height 4.5rem
    position absolute
    filter blur(16px)
    transform scale(2.3)
    opacity 0.7

  &__top
    max-width 4.5rem
    max-height 4.5rem
    width 100%
    position absolute
    overflow hidden
    filter blur(0px)

.text
  display flex
  flex-direction column

  &__top

    &__name
      font-weight bold
      font-size 1.125rem
      line-height 1.6875rem
      color #5064FB

      &__none
        font-weight bold
        font-size 1.125rem
        line-height 1.6875rem
        color var(--txt)

  &__category
    color var(--dim)

  &__list
    display inline-flex
    justify-content flex-start
    flex-direction row
    margin-top auto

.list-item + .list-item
  margin-left 1rem

.list-item
  opacity 0.7

  &:hover
    opacity 1

.icon
  width 1.5rem
  height 1.5rem

.pagination
  margin-top 4rem
  margin-left auto
  margin-right auto
  text-align center
  display flex
  justify-content center
  align-items center
  width fit-content

.no-results
  margin-top 2rem

@media screen and (max-width: 832px)
  .layout
    display block

    &__sidebar
      margin-right -1rem

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

@media screen and (max-width: 320px)
  .logo-wrapper
    padding 0.75rem

    &__base
      max-width 3rem
      max-height 3rem

    &__top
      max-width 3rem
      max-height 3rem

    &__color
      max-width 3rem
      max-height 3rem

  .text
    &__list
      margin-top 0.5rem
    &__top__name,
    &__top__name__none
      font-size 1rem
    &__category
      font-size 0.75rem
</style>

<style src="../styles/algolia.css" lang="css" />
<style src="../styles/tooltip.css" lang="css" />
