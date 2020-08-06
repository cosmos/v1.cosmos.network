<template lang="pug">
.page-projects
  tm-header
    div(slot="title") Ecosystem
    div(slot="subtitle") Welcome! We're proud to have a strong network of Cosmos developers and contributors from all around the world. 
    div(slot="subtitle") 

  tm-section
    div(slot="title") Blockchain Projects
    div(slot="subtitle") Here is a showcase of projects that are actively building on the Cosmos ecosystem.

    .tm-cards-hz(v-if="projects.length > 0")
      tm-card-hz(
        v-for="i in projects"
        :title="i.title"
        flush="true"
        :img-src="i.imgFeature[0].url"
        :tags="i.tags"
        :key="i.slug"
        :href="i.projectUrl")
        template(slot="subtitle")
          | {{ i.description }}
          | #[a(v-if="i.referenceUrl" :href="i.referenceUrl" target="_blank" rel="noreferrer noopener") Announcement &raquo;]

    .ecosystem-community
      .ecosystem-community__icon
        img(src="~assets/images/site/icon-ecosystem.svg" alt="Ecosystem")
      .ecosystem-community__content
        p The community maintains a much larger list of projects that are building on top of Cosmos and Tendermint. Note that we have not officially vetted or contacted these projects for proof.
        tm-btn(type="anchor" href="https://cosmonauts.world" value="View More Projects" target="_blank" rel="noreferrer noopener")
</template>

<script>
import moment from "moment"
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"
import TmCardTags from "cards/TmCardTags"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"

export default {
  name: "page-ecosystem",
  metaInfo: {
    title: "Ecosystem"
  },
  components: {
    TmBtn,
    TmCardHz,
    TmCardTags,
    TmHeader,
    TmSection
  },
  computed: {
    ...mapGetters(["community"]),
    currentMonth() {
      return moment(new Date()).format("MMMM YYYY")
    },
    featuredProject() {
      if (this.community.ecosystem.length > 0) {
        let projects = this.community.ecosystem.filter(e => e.active)
        return projects.filter(e => e.featured)[0]
      } else {
        return []
      }
    },
    projects() {
      if (this.community.ecosystem.length > 0) {
        let projects = this.community.ecosystem.filter(e => e.active)
        return orderBy(projects, i => i.title.toLowerCase(), "asc")
      } else {
        return []
      }
    }
  },
  mounted() {
    if (this.community.ecosystem.length === 0) {
      this.$store.dispatch("initCommunityEcosystem")
    }
  }
}
</script>

<style lang="stylus" scoped>
.featured-project
  margin-bottom var(--pad320)

.featured-project__logo
.featured-project__feature
  display block

.featured-project__logo
  display flex
  align-items center
  background #000
  padding var(--pad320)
  margin-bottom 1rem
  img
    width 100%
    max-width 20rem
    display block

.featured-project__container
  background var(--app-fg)
  padding 1rem
  border 2px solid var(--bc)

.featured-project__text
  margin-bottom 1rem

.featured-project__title
  display block
  color var(--txt)
  font-weight var(--fw-bold)
  margin-bottom 0.5rem

.featured-project__title
.featured-project__description
  font-size 0.875rem

.featured-project__feature
  width 12rem
  height 12rem
  border-radius 20rem
  overflow hidden
  background-position center center
  background-repeat no-repeat
  background-size cover
  margin 0 auto

.ecosystem-community
  margin calc(var(--pad768) - var(--pad320)) 0 var(--pad320)
  padding var(--pad320)
  background var(--app-nav)
  color var(--dark-txt)
  border-radius 0.25rem
  width 100%

.ecosystem-updated
  color var(--dim)
  font-style italic

@media screen and (min-width: 768px)
  .ecosystem-community
    display flex

  .ecosystem-community__icon
    margin-right var(--pad320)

  .featured-project
    display flex
    margin-bottom var(--pad768)

  .featured-project__container
    padding var(--pad320)

  .featured-project__logo
    margin-bottom 0
    margin-right 1rem

  .featured-project__text
    margin-bottom var(--pad320)


  .featured-project__title
    font-size 1.125rem
  .featured-project__description
    font-size 1rem

@media screen and (min-width: 1024px)
  .featured-project__container
    display flex

  .featured-project__text
    flex 1
    margin-bottom 0
    padding-right var(--pad320)
</style>
