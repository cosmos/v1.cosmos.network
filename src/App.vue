<template lang="pug">
#app
  cookie-banner(v-if="showHeader")
  app-top-banner
  app-header(v-if="showHeader")
  main#app-content: router-view(@header="showHeader = $event" @newsletter="newsletterShow = $event")
  cosmos-newsletter-signup(v-bind="{...newsletter}" v-if="newsletterShow")
  app-footer(v-if="showHeader" v-bind="{...footer}").footer
    template(v-slot:logo)
      img(src="~images/site/cosmos-wordmark.svg" alt="Cosmos wordmark").footer__logo
</template>

<script>
import AppTopBanner from "common/AppTopBanner"
import AppHeader from "common/AppHeader.vue"
import store from "@/store/index.js"
import { CookieBanner, Footer, CosmosNewsletterSignup } from "@cosmos-ui/vue"

export default {
  name: "app",
  components: {
    AppTopBanner,
    AppHeader,
    CookieBanner,
    "app-footer": Footer,
    CosmosNewsletterSignup
  },
  data: function() {
    return {
      newsletterShow: true,
      newsletter: {
        h1: "Sign up for Cosmos updates",
        h2:
          "Get the latest from the Cosmos ecosystem and engineering updates, straight to your inbox.",
        topics: [
          {
            h1: "Tools & technology",
            h2:
              "Engineering and development updates on Cosmos SDK, Tendermint, IBC and more.",
            requestURL: "https://app.mailerlite.com/webforms/submit/o0t6d7",
            callback: "jQuery18307296239382192573_1594158619276",
            _: "1594158625563",
            groups: "103455779",
            svg: "/images/icons/icon-window-code.svg"
          },
          {
            h1: "Ecosystem & community",
            h2:
              "General news and updates from the Cosmos ecosystem and community.",
            requestURL: "https://app.mailerlite.com/webforms/submit/o0t6d7",
            callback: "jQuery18307296239382192573_1594158619276",
            _: "1594158625563",
            groups: "103455777",
            svg: "/images/icons/icon-network.svg"
          }
        ]
      },
      showHeader: true,
      footer: {
        h1: "Cosmos",
        links: [
          {
            title: "Cosmos Blog",
            url: "https://blog.cosmos.network/",
            icon: "medium"
          },
          {
            title: "Twitter",
            url: "https://twitter.com/cosmos"
          },
          {
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/tendermint/"
          },
          {
            title: "Reddit",
            url: "https://reddit.com/r/cosmosnetwork"
          },
          {
            title: "Telegram",
            url: "https://t.me/cosmosproject"
          },
          {
            title: "Discord",
            url: "https://discord.gg/vcExX9T"
          },
          {
            title: "YouTube",
            url: "https://www.youtube.com/c/CosmosProject"
          }
        ],
        menu: [
          {
            h1: "Identity",
            children: [
              {
                h1: "About",
                href: "/about"
              },
              {
                h1: "Blog",
                href: "https://blog.cosmos.network"
              },
              {
                h1: "Jobs",
                href: "https://jobs.cosmos.network"
              },
              {
                h1: "Media",
                href: "/media"
              },
              {
                h1: "Press Kit",
                href: "/presskit"
              }
            ]
          },
          {
            h1: "Projects",
            children: [
              {
                h1: "Cosmos SDK",
                href: "/sdk"
              },
              {
                h1: "Cosmos Hub",
                href: "https://hub.cosmos.network"
              },
              {
                h1: "Tendermint Core",
                href: "https://tendermint.com"
              },
              {
                h1: "IBC Protocol",
                href: "https://ibcprotocol.org"
              }
            ]
          },
          {
            h1: "Resources",
            children: [
              {
                h1: "Whitepaper",
                href: "/resources/whitepaper"
              },
              {
                h1: "Ecosystem",
                href: "/ecosystem"
              },
              {
                h1: "Community",
                href: "/community"
              },
              {
                h1: "Contributors",
                href: "/contributors"
              },
              {
                h1: "Design & Assets",
                href: "/design"
              },
              {
                h1: "Newsletters",
                href: "/newsletters"
              }
            ]
          },
          {
            h1: "Support",
            children: [
              {
                h1: "Tools",
                href: "/tools"
              },
              {
                h1: "Roadmap",
                href: "/roadmap"
              },
              {
                h1: "FAQ",
                href: "/resources/faq"
              }
            ]
          }
        ],
        smallprint:
          "This website is maintained by Tendermint Inc. The contents and opinions of this website are those of Tendermint Inc."
      }
    }
  },
  metaInfo: {
    // default title if metaInfo.title unspecified
    title: "Internet of Blockchains",
    // all titles will be injected into this template
    titleTemplate: "%s - Cosmos Network"
  },
  mounted() {
    this.$store.commit("initializeBlog")
    this.$store.commit("initMeetupEvents")
    this.$store.dispatch("initCommunityEvents")
    this.$store.dispatch("initCwuWorkshops")
    this.$store.dispatch("initializeRoadmap")
    this.$store.dispatch("initializeEmail")
  },
  store
}
</script>

<style src="./styles/app.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.footer
  padding 5rem 12rem 5rem

  &__logo
    max-height 20px

@media screen and (max-width: 1920px)
  .footer
    padding-left 8rem
    padding-right 8rem

@media screen and (max-width: 1280px)
  .footer
    padding-left 5.75rem
    padding-right 5.75rem

@media screen and (max-width: 768px)
  .footer
    padding-left 2rem
    padding-right 2rem
</style>
