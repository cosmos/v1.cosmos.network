<template lang="pug">
.page-media
  tm-header
    div(slot="title") Media & News
    tm-btn(type="link" :to="{ name: 'presskit' }" value="Press Kit")
  .tm-sect-cols
    tm-section
      div(slot="title") Media Mentions
      .card-news(v-for="i in mentions" v-if="i.quote" :key="`mention-${i.id}`")
        a.card-news__anchor(:href="i.url" target="_blank" rel="noreferrer noopener") {{i.publication}}: {{i.title}}
        .card-news__quote {{i.quote}}
        .card-news__date {{ hf.date(i.datePublished) }}
    tm-section
      div(slot="title") Latest Network Updates
      .card-news(v-for="i in posts" :key="`post-${i.isoDate}`")
        a.card-news__anchor(:href="i.link" target="_blank" rel="noreferrer noopener") {{i.title}}
        .card-news__date {{ hf.date(i.isoDate) }}
  section-logos
</template>

<script>
import TmBtn from "common/TmBtn"
import hf from "scripts/helpers"
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "media-news",
  metaInfo: {
    title: "Media & News"
  },
  components: {
    SectionLogos: () => import("sections/SectionLogos"),
    TmBtn,
    TmHeader,
    TmSection
  },
  data: () => ({
    hf: hf
  }),
  computed: {
    ...mapGetters(["blog", "media", "urls"]),
    mentions() {
      if (this.media && this.media.length > 0) {
        return orderBy(this.media, ["datePublished"], ["desc"])
      }
      return []
    },
    posts() {
      if (this.blog && this.blog.posts && this.blog.posts.length > 0) {
        return this.blog.posts.slice(0, 10)
      }
      return []
    }
  }
}
</script>

<style lang="stylus">
.section-logos .tm-section__container
  padding-top 3rem !important
  padding-bottom 3rem !important

.card-news
  &:not(:last-child)
    margin-bottom var(--pad320)
  a

.card-news__anchor
.card-news__quote
  margin-bottom 0.5rem

.card-news__anchor
  display block
  font-weight var(--fw-bold)

.card-news__quote
.card-news__date
  font-size 0.875rem

.card-news__quote
  border-left 0.25rem solid var(--bc)
  padding-left 0.75rem

  font-style italic

.card-news__date
  margin-bottom 0.25rem
  color var(--dim)

@media screen and (min-width:1024px)
  .page-media .tm-sect-cols
    display flex
</style>
