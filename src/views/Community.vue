<template lang="pug">
.page-community
  tm-section.section-hero-dark-blue.section-hero(theme="dark")
    div(slot="suptitle") Community
    h1(slot="title").title Become a star in the Cosmos
    div(slot="subtitle").subtitle Connect with a fast-growing community of developers and innovators all over the world, building the new era of the internet.
    .channels-container
      a(:href="i.url" target="blank_" rel="noopener noreferrer" v-for="i in links")
        .channels-item
          img.channels-item__img(:src="require(`@/assets/brands/color/${i.icon}.svg`)" :alt="i.title")
        .channels-item__title {{i.title}}
    .blocks
      .blocks__item
      .blocks__item
      .blocks__item
      .blocks__item
      .blocks__item

  tm-section(v-if="!upcomingEvents.length")
    div(slot="title") Upcoming Events
    .wrapper
      .container
        icon-calendar
        br
        .p Currently, there are no upcoming events.
        .p Please check again later.
        br
        .p #[router-link(:to="{ name: 'events-all' }") View past events &rarr;]
    section-banner.section-banner
    tm-box.tm-box--outline
      div(slot="main") #[strong Want to host your own Cosmos event? ] We can help you start a meetup, host a hackathon, and more. #[a(href="https://docs.google.com/forms/d/e/1FAIpQLSfg8OrPeuRciyW8Iw-BW7JEvZvr_7ZYXQTpLeXXfzbxUwBM_w/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener") Get in touch]
  
  tm-section(v-else)
    div(slot="title") Upcoming Events
    div(slot="subtitle") Check out the community events featuring or hosted by the Cosmos team. #[router-link(:to="{ name: 'events-all' }") View all events &rarr;]
    .container
      .left
        tm-card-hz(
          v-for="i in upcomingEvents.slice(0, 1)"
          :flush="hf.isFlush(hf.optionalImg(i.logo).type)"
          :ended="hf.pastDate(i.dateEnd)"
          :img-src="hf.optionalImg(i.logo).src"
          :key="i.id"
          :subtitle="subtitle(i)"
          :title="i.title"
          :type="i.type"
          :href="i.href"
          :to="{ name: 'event', params: { event: i.slug }}")
      .right
        tm-card-hz(
          v-for="i in upcomingEvents.slice(1, 4)"
          landscape="true"
          vertical="true"
          :flush="hf.isFlush(hf.optionalImg(i.logo).type)"
          :ended="hf.pastDate(i.dateEnd)"
          :img-src="hf.optionalImg(i.logo).src"
          :key="i.id"
          :subtitle="subtitle(i)"
          :title="i.title"
          :type="i.type"
          :href="i.href"
          :to="{ name: 'event', params: { event: i.slug }}")
    section-banner.section-banner
    tm-box.tm-box--outline
      div(slot="main") #[strong Want to host your own Cosmos event? ] We can help you start a meetup, host a hackathon, and more. #[a(href="https://docs.google.com/forms/d/e/1FAIpQLSfg8OrPeuRciyW8Iw-BW7JEvZvr_7ZYXQTpLeXXfzbxUwBM_w/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener") Get in touch]

  tm-section.section-meetup-dark-blue(layout="split" theme="dark")
    div(slot="suptitle") Cosmos Meetups
    div(slot="title") Find your local Cosmos community
    div(slot="subtitle") Communities in cities all over the world are forming meetups to unite Cosmos
    tm-btn(size="lg" value="join a meetup" color="primary" type="anchor" href="https://www.meetup.com/pro/cosmos_network" target="_blank" rel="noreferrer noopener")
    tm-btn(size="lg" value="start a meetup" color="dark" type="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLSfg8OrPeuRciyW8Iw-BW7JEvZvr_7ZYXQTpLeXXfzbxUwBM_w/viewform?usp=pp_url&entry.917300283=Meetup" target="_blank" rel="noreferrer noopener")
    .slide-container(slot="full-width")
      .slide-wrapper
        .first-box
          .box-container
            img(src="~images/community/community-grid-1.jpg").box-img
            img(src="~images/community/community-grid-2.jpg").box-img
            img(src="~images/community/community-grid-3.jpg").box-img
            img(src="~images/community/community-grid-4.jpg").box-img
            img(src="~images/community/community-grid-5.jpg").box-img
          .dupe-box-container
            img(src="~images/community/community-grid-1.jpg").box-img
            img(src="~images/community/community-grid-2.jpg").box-img
            img(src="~images/community/community-grid-3.jpg").box-img
            img(src="~images/community/community-grid-4.jpg").box-img
            img(src="~images/community/community-grid-5.jpg").box-img
        .second-box
          .box-container
            img(src="~images/community/community-grid-6.jpg").box-img
            img(src="~images/community/community-grid-7.jpg").box-img
            img(src="~images/community/community-grid-8.jpg").box-img
            img(src="~images/community/community-grid-9.jpg").box-img
          .dupe-box-container
            img(src="~images/community/community-grid-6.jpg").box-img
            img(src="~images/community/community-grid-7.jpg").box-img
            img(src="~images/community/community-grid-8.jpg").box-img
            img(src="~images/community/community-grid-9.jpg").box-img

  tm-section
    div(slot="title") Latest articles
    div(slot="subtitle").subtitle Read the latest news, features and announcements from the #[a(href="https://blog.cosmos.network" target="_blank" rel="noreferrer noopener") Cosmos Blog] and around the web.
    .tm-cards-hz
      tm-card-hz(
        v-for="i in blogPosts"
        flush="true"
        :href="i.value.link"
        :img-src="hf.blogImgSrc(i.value['content:encoded'])"
        :key="`post-${i.value.title}`"
        :title="i.value.title")
        div(slot="author") {{i.value.creator}}
        div(slot="date") {{moment(i.value.isoDate).format('MMM DD')}}
        div(slot="description" v-html="hf.blogContent(i.content)")

  tm-section(theme="stars")
    div(slot="title") Latest videos
    div(slot="subtitle").subtitle Learn about Cosmos technology, watch tutorials, catch up with event recaps, and more on the #[a(href="https://www.youtube.com/channel/UC8HFOUdnMnpoWmQMgeKoB3A" target="_blank" rel="noreferrer noopener" style="color: var(--secondary);") Cosmos YouTube channel].
    .tm-cards-hz
      tm-card-hz(
        v-for="i in playlistVideos"
        flush="true"
        theme="dark"
        :href="`https://www.youtube.com/watch?v=${i.resourceId.videoId}`"
        :img-src="i.thumbnails.standard.url"
        :key="`video-${i.resourceId.videoId}`"
        :title="i.title"
        :subtitle="moment(i.publishedAt).format('MMM DD')")

  tm-section(layout="split")
    div(slot="suptitle").suptitle Developers
    div(slot="title") Build a Cosmos Zone
    p Get up and running with your own sovereign blockchain application in a matter of minutes. Connect to the Cosmos Hub once IBC launches and join the Internet of Blockchains!
    img(slot="image" src="~images/community/community-section-sdk-chain.svg" alt="SDK")
    tm-btn(
      value="Install starport" size="lg" type="anchor" href="https://github.com/tendermint/starport#installation" target="blank_" rel="noopener noreferrer"
      icon="arrow_forward" icon-pos="right")
    .note #[strong Note:] You don’t need ATOM tokens to create a Cosmos Zone.

  tm-section.section-meetup-dark-blue(layout="split" theme="dark")
    div(slot="suptitle") Community Contributor Microgrants
    div(slot="title") Become a Cosmonaut
    p Apply now to get funding for your contribution to the Cosmos ecosystem, whether development work, hosting an event, research, or creating media.
    img(slot="image" src="~images/community/community-section-cosmonaut.svg" alt="Cosmonaut").cosmonauts-img
    tm-btn(
      value="Get a grant" size="lg" type="link" :to="{ name: 'contributors' }" target="blank_" rel="noopener noreferrer"
      icon="arrow_forward" icon-pos="right")

  tm-section(layout="split")
    div(slot="suptitle").suptitle Token Holders
    div(slot="title") What are ATOM tokens used for?
    p The ATOM token is the primary token of the Cosmos Hub blockchain. You can stake your ATOMs to a Cosmos Hub validator to passively earn more ATOMs. ATOMs staked on the Cosmos Hub may be used to vote for on-chain governance proposals. This allows ATOM token holders to collectively steer the future of the network.
    img(slot="image" src="~images/community/community-section-atom-stacks.png" alt="Atom")
    tm-btn(
      value="Learn more" size="lg" type="anchor" href="https://hub.cosmos.network" target="blank_" rel="noopener noreferrer"
      icon="arrow_forward" icon-pos="right")

  tm-section: .tm-columns
    tm-column(
      title="Validator Guide"
      subtitle="Learn how to become a Cosmos Hub validator.")
      img(slot="icon" src="~images/sdk/icon-footer-docs.svg" alt="Docs")
      tm-btn(value="Get started" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://hub.cosmos.network/main/validators/overview.html")
    tm-column(
      title="Developer Chat"
      subtitle="Have questions? Get them answered here.")
      img(slot="icon" src="~images/sdk/icon-footer-discord.svg" alt="Forum")
      tm-btn(value="Chat now" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://discord.gg/vcExX9T")
    tm-column(
      title="Cosmos Jobs"
      subtitle="Climb aboard the fleet of vessels, headed for the stars.")
      img(slot="icon" src="~images/sdk/icon-footer-briefcase.svg" alt="Jobs")
      tm-btn(value="Search jobs" size="lg" type="anchor"
        target="_blank" rel="noreferrer noopener" href="https://jobs.cosmos.network")
</template>

<script>
import hf from "scripts/helpers"
import moment from "moment"
import axios from "axios"
import MarkdownIt from "markdown-it"
import { orderBy } from "lodash"
import { mapGetters } from "vuex"
import TmBtn from "common/TmBtn"
import TmCardHz from "cards/TmCardHz"
import TmCardTags from "cards/TmCardTags"
import TmColumn from "common/TmColumn"
import TmSection from "common/TmSection"
import TmBox from "common/TmBox"
import SectionBanner from "sections/SectionBanner"
import { IconCalendar } from "@cosmos-ui/vue"

const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: "page-community",
  metaInfo: { title: "Community" },
  components: {
    TmBtn,
    TmCardHz,
    TmCardTags,
    TmColumn,
    TmSection,
    TmBox,
    SectionBanner,
    IconCalendar
  },
  data: () => ({
    hf: hf,
    moment: moment,
    playlistVideos: [],
    links: [
      {
        title: "Video",
        url: "https://www.youtube.com/c/CosmosProject",
        icon: "youtube-light"
      },
      {
        title: "@cosmos",
        url: "https://twitter.com/cosmos",
        icon: "twitter-light"
      },
      {
        title: "r/CosmosNetwork",
        url: "https://reddit.com/r/cosmosnetwork",
        icon: "reddit-light"
      },
      {
        title: "Community Chat",
        url: "https://t.me/cosmosproject",
        icon: "telegram-light"
      },
      {
        title: "Developer Chat",
        url: "https://discord.gg/vcExX9T",
        icon: "discord-light"
      },
      {
        title: "Official Forum",
        url: "https://forum.cosmos.network/c/cosmos-sdk",
        icon: "cosmos-light"
      },
      {
        title: "SDK source code",
        url: "https://github.com/cosmos/cosmos-sdk",
        icon: "github-light"
      }
    ]
  }),
  computed: {
    ...mapGetters(["events", "community", "blog", "meetup", "cwu"]),
    upcomingEvents() {
      let featuredEvents = this.events
        .filter(e => e.featured)
        .filter(e => moment(e.dateEnd).add(1, "days") >= moment())
        .slice(0, 3)

      let airtableEvents = this.events
        .filter(e => e.dateStart !== undefined)
        .filter(e => moment(e.dateEnd).add(1, "days") >= moment())
        .filter(e => !e.featured)

      let cwuEvents = this.cwu.cwu.map(e => {
        return {
          type: "Live Session",
          id: e.id,
          featured: false,
          dateStart: e.date,
          dateEnd: e.date,
          title: e.title,
          href: `https://cosmos.network/series/code-with-us/${e.slug}`,
          logo: [
            {
              type: "image/jpeg",
              url: e.coverImg[0].url
            }
          ]
        }
      })

      let meetupEvents = this.meetup.meetupEvents.map(e => {
        return {
          type: "Meetup",
          date: e.event.local_date,
          id: e.event.id,
          featured: true,
          dateStart: e.event.time,
          dateEnd: e.event.time,
          location: "Online event",
          title: e.event.name,
          href: e.event.link,
          logo: [
            {
              type: "image/jpeg",
              url: e.event_image && e.event_image.photo_link
            }
          ]
        }
      })

      let sortedEvents = orderBy(
        [...airtableEvents, ...meetupEvents, ...cwuEvents],
        [e => moment(e.dateStart)],
        "asc"
      ).filter(e => moment(e.dateEnd).add(1, "days") >= moment())

      return [...featuredEvents, ...sortedEvents]
    },
    blogPosts() {
      let items = [
        ...this.blog.posts.map(p => ({
          date: p.isoDate,
          value: p,
          content: p["content:encoded"]
        }))
      ]
      items = orderBy(items, i => moment(i.date), ["desc"])
      items = items.slice(0, 4)
      return items
    }
  },
  beforeMount() {
    this.getYoutubePlaylistVideos()
  },
  methods: {
    markdown(value) {
      const md = new MarkdownIt({
        linkify: true,
        html: true
      })
      return md.render(value)
    },
    subtitle(event) {
      if (event.subtitle) {
        return event.subtitle
      }
      if (event.dateStart && event.dateEnd) {
        let value = `${this.hf.dates(event.dateStart, event.dateEnd)}`
        if (event.type) {
          return `${value} · ${event.type}`
        }
        //- TODO: uncomment to use event.location (post-covid)
        //- if (event.location) {
        //-   return (value += " · " + event.location)
        //- }
        return value
      }
      return `TBD · ${event.location}`
    },
    async getYoutubePlaylistVideos() {
      const playlistId = "UU8HFOUdnMnpoWmQMgeKoB3A"

      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}`
        )
        .then(({ data }) => {
          this.playlistVideos = data.items.map(b => {
            return {
              ...b.snippet
            }
          })
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.section-banner
  margin-top -1rem

.tm-box--outline
  margin-top 4rem

.note
  margin-top 2rem
  font-size 14px
  line-height 20px
  letter-spacing var(--tracking-0)
  color rgba(0, 0, 0, 0.667)

.suptitle
  color var(--primary-alt)

.subtitle
  max-width 38.25rem

.cosmonauts-img
  position absolute
  bottom -1%

.section-hero-dark-blue
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(133.28deg, #0F0D20 9.49%, #0D0D17 32%, #1E1F48 53.67%, #202854 91.06%)
  background-size 256px 256px, auto

.section-meetup-dark-blue
  background url('~images/site/bg-tile-stars.svg'), linear-gradient(144.85deg, #202854 9.49%, #070811 91.06%)
  background-size 256px 256px, auto
  align-items center
  overflow-y hidden
  position relative

.channels-container
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  padding-top 4rem
  a
    color #5064FB
    &:hover .channels-item, &:focus .channels-item
      border-color transparent
      transform scale(1.08)
      background rgba(0,0,0,0)
      transition-duration .1s
      &__title
        transform translate(0,0.25rem)
        transition-duration .1s
    &:active .channels-item
      opacity .7
      transform scale(1.04)
      transition-duration .05s
    &:nth-child(1)
      &:hover .channels-item, &:focus .channels-item
        background #FF0000
    &:nth-child(2)
      bottom 12px
      position relative
      &:hover .channels-item, &:focus .channels-item
        background #1DA1F2
    &:nth-child(3)
      bottom 20px
      position relative
      &:hover .channels-item, &:focus .channels-item
        background #FF4500
    &:nth-child(4)
      bottom 24px
      position relative
      &:hover .channels-item, &:focus .channels-item
        background #0088CC
    &:nth-child(5)
      bottom 20px
      position relative
      &:hover .channels-item, &:focus .channels-item
        background #7289DA
    &:nth-child(6)
      bottom 12px
      position relative
      &:hover .channels-item, &:focus .channels-item
        background #5064FB
    &:nth-child(7)
      &:hover .channels-item, &:focus .channels-item
        background #222222
    .channels-item
      display flex
      justify-content center
      align-items center
      border 2px solid #5064FB
      border-radius 50%
      width 6rem
      height 6rem
      margin auto
      transition all .4s ease-out
      transform-origin bottom center
      &__title
        text-align center
        margin-top 0.5rem
        font-weight 500
        font-size 0.8125rem
        line-height 1.125rem
        letter-spacing 0.01em
        color #FFFFFF
        transition transform .4s ease-out

.blocks
  .blocks__item
    content url('~images/community/community-outline-blocks.svg')
    position absolute
    pointer-events none
    animation-timing-function ease-in-out
    animation-iteration-count infinite
    animation-name float
    &:nth-child(1)
      left 290px
      bottom 0px
      animation-duration 6s
    &:nth-child(2)
      top 30px
      left 650px
      animation-duration 7s
    &:nth-child(3)
      left 820px
      bottom 260px
      animation-duration 8s
    &:nth-child(4)
      right 220px
      top 240px
      animation-duration 9s
    &:nth-child(5)
      right 100px
      bottom 10px
      animation-duration 10s

.section-hero
  .title
    font-size 3rem
    line-height 4rem
    font-weight 300
  .subtitle
    font-size 1.125rem
    line-height 1.6875rem
    letter-spacing var(--tracking-1-tight)
    color #BFBFBF

.wrapper
  width 100%
  .container
    display flex
    align-items center
    flex-direction column
    height 100%
    max-width 36.25rem
    margin-left auto
    margin-right auto
    .p:last-child
      margin-bottom 3rem

.container
  display flex
  align-items flex-start
  flex-direction row
  margin 0 -1rem 3rem
  .left
    display flex
    flex-direction column
    justify-content flex-start
    align-items stretch
    position relative
    width 100%
    max-width 40rem
    flex 1
    margin-right auto
  .right
    display flex
    flex-direction column
    justify-content flex-start
    align-items stretch
    position relative
    flex 0 0 50%

.slide-container
  overflow hidden
  white-space nowrap
  .slide-wrapper
    display flex
    overflow hidden
    white-space nowrap
    position absolute
    top 0
    right 0
    width 50%
    .first-box
      width 50%
      padding-right 1rem
      .box-container
        animation vertical1 90s linear infinite
        animation-delay -45s
        display block
        .box-img
          display block
          padding-bottom 1rem
      .dupe-box-container
        animation vertical2 90s linear infinite
        animation-delay 0
        display block
        .box-img
          display block
          padding-bottom 1rem
    .second-box
      width 50%
      .box-container
        animation vertical1 90s linear infinite
        animation-delay -45s
        display block
        .box-img
          display block
          padding-bottom 1rem
      .dupe-box-container
        animation vertical2 90s linear infinite
        animation-delay 0
        display block
        .box-img
          display block
          padding-bottom 1rem

@keyframes float
	0%
		transform translateY(0px)
	50%
		transform translateY(-12px)
	100%
		transform translateY(0px)

@keyframes vertical1
  from
    transform translate3d(0,100%,0)
  to
    transform  translate3d(0,-100%,0)

@keyframes vertical2
  from
    transform translate3d(0,0%,0)
  to
    transform translate3d(0,-200%,0)

@keyframes horizontal1
  from
    transform translate3d(100%,0,0)
  to
    transform  translate3d(-100%,0,0)

@keyframes horizontal2
  from
    transform translate3d(0%,0,0)
  to
    transform translate3d(-200%,0,0)

@media screen and (min-width: 1024px)
  .tm-card-hz
    max-width unset

@media screen and (max-width: 1023px)
  .cosmonauts-img
    width 46vw
    max-height 13rem
    right -5%
    bottom -1%

  .slide-container
    margin-top 4rem
    margin-bottom -7.2rem
    .slide-wrapper
      position unset
      width 100%
      margin 0 auto
      overflow hidden
      white-space nowrap
      display flex
      flex-flow column
      .first-box
        padding-bottom 0.5rem
        .box-container
          animation horizontal1 90s linear infinite
          animation-delay -45s
          display inline-block
          .box-img
            display unset
            padding-right 1rem
            height 8rem
            width auto
            padding-bottom unset
        .dupe-box-container
          animation horizontal2 90s linear infinite
          animation-delay 0
          display inline-block
          .box-img
            display unset
            padding-right 1rem
            height 8rem
            width auto
            padding-bottom unset
      .second-box
        .box-container
          animation horizontal1 90s linear infinite
          animation-delay -45s
          display inline-block
          .box-img
            display unset
            padding-right 1rem
            height 8rem
            width auto
            padding-bottom unset
        .dupe-box-container
          animation horizontal2 90s linear infinite
          animation-delay 0
          display inline-block
          .box-img
            display unset
            padding-right 1rem
            height 8rem
            width auto
            padding-bottom unset

  .channels-container
    display flex
    flex-wrap wrap
    justify-content center
    a
      flex 0 25%
      height 120px
      margin-bottom 5%
      &:nth-child(2)
        bottom 24px
        position relative
      &:nth-child(3)
        bottom 24px
        position relative
      &:nth-child(4)
        bottom 0
        position unset
      &:nth-child(5)
        bottom 0
        position unset
      &:nth-child(6)
        bottom 24px
        position relative
      &:nth-child(7)
        bottom 0
        position unset

  .blocks
    .blocks__item
      display none

@media screen and (max-width: 767px)
  .section-banner
    margin-top 1.5rem

  .tm-box--outline
    margin-bottom 2rem

  .container
    flex-direction column
    margin unset
    .left
      border none
      margin-bottom unset
    .right
      margin-left unset
      width -webkit-fill-available
  .slide-container
    margin-bottom -2.4rem

@media screen and (max-width: 550px)
  .channels-container
    a
      height 112px
      margin-bottom -5%
      .channels-item
        width 4.5rem
        height 4.5rem
        img.channels-item__img
          width 1.5rem
          height 1.5rem
        &__title
          display none

@media screen and (max-width: 360px)
  .channels-container
    padding-top 2rem
    justify-content inherit
    a
      flex 0 33.33%
      height 100px
      bottom 0
      position unset
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6), &:nth-child(7)
        bottom 0 !important
        position unset !important
</style>
