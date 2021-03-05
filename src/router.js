/* eslint-disable */
import Router from "vue-router"
import urls from "./store/modules/urls.js"
import Newsletters from "./views/Newsletters.vue"
import Index from "./views/Index.vue"
import Intro from "./views/Intro.vue"
import ProductSDK from "./views/ProductSDK.vue"
import Community from "./views/Community.vue"
import Contributors from "./views/Contributors.vue"
import Ecosystem from "./views/Ecosystem.vue"
import Wallets from "./views/Wallets.vue"
import Tools from "./views/Tools.vue"
import Api from "./views/Api.vue"

const hub = "https://hub.cosmos.network"
const docs = "https://docs.cosmos.network"

const routes = [
  ...[
    ["/atom-protection", `${hub}/master/delegators/delegator-security.html`],
    [
      "/dev/wallet",
      `${hub}/master/hub-overview/overview.html#cosmos-hub-wallets`
    ],
    ["/docs", `${docs}`],
    [
      "/docs/cosmos-hub/delegator-guide-cli.html",
      `${hub}/master/delegators/delegator-guide-cli.html`
    ],
    [
      "/docs/cosmos-hub/deploy-testnet.html",
      `${hub}/master/gaia-tutorials/deploy-testnet.html`
    ],
    [
      "/docs/cosmos-hub/installation.html",
      `${hub}/master/gaia-tutorials/installation.html`
    ],
    [
      "/docs/cosmos-hub/join-mainnet.html",
      `${hub}/master/gaia-tutorials/join-mainnet.html`
    ],
    [
      "/docs/cosmos-hub/join-testnet.html",
      `${hub}/master/gaia-tutorials/join-testnet.html`
    ],
    [
      "/docs/cosmos-hub/validators/overview.html",
      `${hub}/master/validators/overview.html`
    ],
    [
      "/docs/cosmos-hub/validators/validator-faq.html",
      `${hub}/master/validators/validator-faq.html`
    ],
    [
      "/docs/cosmos-hub/validators/validator-setup.html",
      `${hub}/master/validators/validator-setup.html`
    ],
    ["/docs/intro/", `${docs}/master/intro/overview.html`],
    ["/docs/intro/sdk-design.html", `${docs}/master/intro/sdk-design.html`],
    ["/docs/spec/ibc/", "https://github.com/cosmos/ics/tree/master/ibc"],
    ["/docs/tutorial", "https://tutorials.cosmos.network/"],
    [
      "/docs/tutorial/app-init.html",
      "https://tutorials.cosmos.network/nameservice/tutorial/02-app-init.html"
    ],
    ["/join-testnet", `${hub}/master/gaia-tutorials/join-testnet.html`],
    ["/resources/delegator", `${hub}/master/delegators/delegator-faq.html`],
    ["/security", "https://tendermint.com/security"],
    ["/staking", `${hub}/master/validators/overview.html`],
    ["/staking/validators-faq", `${hub}/master/validators/validator-faq.html`],
    ["/staking/validators", `${hub}/master/validators/overview.html`],
    ["/testnet-tutorial", `${hub}/master/gaia-tutorials/join-testnet.html`],
    ["/testnet", `${hub}/master/gaia-tutorials/join-testnet.html`],
    ["/validate", `${hub}/master/validators/overview.html`],
    ["/validator", `${hub}/master/validators/overview.html`],
    ["/validators", `${hub}/master/validators/overview.html`],
    ["/validators/faq", `${hub}/master/validators/validator-faq.html`],
    ["/validators/tutorial", `${hub}/master/validators/overview.html`],
    ["/wallet", `${hub}/#cosmos-hub-wallets`],
    ["/roadmap", "https://stargate.cosmos.network"],
    ["/ibc", "https://ibcprotocol.org"],
    ["/discord", "https://discord.gg/vcExX9T"],
    ["/telegram", "https://t.me/cosmosproject"],
    ["/twitter", "https://twitter.com/cosmos"],
    ["/youtube", "https://www.youtube.com/c/CosmosProject"],
    ["/reddit", "https://reddit.com/r/cosmosnetwork"],
    ["/blog", "https://blog.cosmos.network"],
    ["/forum", "https://forum.cosmos.network"],
  ].map(([path, url]) => ({
    path,
    beforeEnter: () => window.location.assign(url)
  })),
  ...[
    ["/about/*", "/about"],
    ["/about/whitepaper", "/resources/whitepaper"],
    ["/about/whitepaper/ko", "/resources/whitepaper/ko"],
    ["/about/whitepaper/pt", "/resources/whitepaper/pt"],
    ["/about/whitepaper/zh-CN", "/resources/whitepaper/zh-CN"],
    ["/academy", "/ecosystem"],
    ["/academy/kr", "/ecosystem"],
    ["/apply", "/careers"],
    ["/blog/:entry", "/blog"],
    ["/brand", "/design"],
    ["/career", "/careers"],
    ["/design/assets", "/assets"],
    ["/design/trademark", "/trademark"],
    ["/dev", "/tools"],
    ["/developers", "/tools"],
    ["/dev/hackatom", "/events"],
    ["/dev/scaling-eth", "/resources/whitepaper#use-cases"],
    ["/dev/whitepaper", "/resources/whitepaper"],
    ["/dev/whitepaper/ko", "/resources/whitepaper/ko"],
    ["/dev/whitepaper/pt", "/resources/whitepaper/pt"],
    ["/dev/whitepaper/zh-CN", "/resources/whitepaper/zh-CN"],
    ["/events/all", "/events"],
    ["/events/code-with-us", "/series/code-with-us"],
    ["/ecosystem", "/ecosystem/apps"],
    ["/faq", "/resources/faq"],
    ["/hackatom", "/events"],
    ["/hiring", "/careers"],
    ["/info", "/intro"],
    ["/intro/*", "/intro"],
    ["/introduction", "/intro"],
    ["/job", "/careers"],
    ["/jobs", "/careers"],
    ["/logo", "/presskit"],
    ["/logos", "/presskit"],
    ["/mediakit", "/presskit"],
    ["/plan", "/resources/plan"],
    ["/plan/:locale", "/resources/plan"],
    ["/press", "/media"],
    ["/resources/academy", "/ecosystem"],
    ["/scaling-eth", "/resources/whitepaper#use-cases"],
    ["/scaling", "/resources/whitepaper#use-cases"],
    ["/scalingeth", "/resources/whitepaper#use-cases"],
    ["/staking/delegators", "resources/delegators"],
    ["/team", "/about"],
    ["/tm", "/design/trademark"],
    ["/what-is-cosmos", "/intro"],
    ["/what", "/intro"],
    ["/whatiscosmos", "/intro"],
    ["/whatscosmos", "/intro"],
    ["/whitepaper", "/resources/whitepaper"],
    ["/whitepaper/en-US", "/resources/whitepaper"]
  ].map(([path, redirect]) => ({ path, redirect })),
  // PAGES
  {
    path: "/docs/*",
    beforeEnter: r => {
      const path = r.fullPath.replace(/^\/docs\//, "master/")
      window.location.replace(`https://docs.cosmos.network/${path}`)
    }
  },
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "/assets",
    name: "assets",
    component: () =>
      import(/* webpackChunkName: "assets" */ "./views/Assets.vue")
  },
  {
    path: "/media",
    name: "media",
    component: () => import(/* webpackChunkName: "media" */ "./views/Media.vue")
  },
  {
    path: "/design",
    name: "design",
    component: () =>
      import(/* webpackChunkName: "design" */ "./views/Design.vue")
  },
  {
    path: "/trademark",
    name: "trademark",
    component: () =>
      import(/* webpackChunkName: "trademark" */ "./views/Trademark.vue")
  },
  {
    path: "/tools",
    name: "tools",
    component: Tools
  },
  {
    path: "/ecosystem/apps",
    name: "ecosystem-apps",
    component: Ecosystem
  },
  {
    path: "/ecosystem/wallets",
    name: "ecosystem-wallets",
    component: Wallets
  },
  {
    path: "/epicenter",
    name: "epicenter",
    component: () =>
      import(/* webpackChunkName: "epicenter" */ "./views/Epicenter.vue")
  },
  {
    path: "/events",
    name: "",
    component: () =>
      import(/* webpackChunkName: "events" */ "./views/Events.vue"),
    children: [
      {
        path: "/",
        name: "events-all",
        component: () =>
          import(/* webpackChunkName: "events-all" */ "./views/EventsAll.vue")
      },
      {
        path: "all",
        name: "page-events-all",
        component: () =>
          import(/* webpackChunkName: "page-events-all" */ "./views/EventsAll.vue")
      },
      {
        path: ":event",
        name: "event",
        component: () =>
          import(/* webpackChunkName: "event" */ "./views/Event.vue")
      }
    ]
  },
  {
    path: "/series",
    name: "series",
    component: () =>
      import(/* webpackChunkName: "series" */ "./views/Series.vue"),
    children: [
      {
        path: "code-with-us",
        name: "series-code-with-us",
        component: () =>
          import(/* webpackChunkName: "series-code-with-us" */ "./views/EventCodewithus.vue")
      },
      {
        path: "/series/code-with-us/:workshop",
        name: "series-workshop",
        component: () =>
          import(/* webpackChunkName: "series-workshop" */ "./views/Workshop.vue")
      }
    ]
  },
  {
    path: "/community",
    name: "community",
    component: Community
  },
  {
    path: "/contributors",
    name: "contributors",
    component: Contributors
  },
  {
    path: "/goz/*",
    redirect: "/goz",
    pathToRegexpOptions: { strict: true }
  },
  {
    path: "/goz",
    name: "gameofzones",
    component: () =>
      import(/* webpackChunkName: "gameofzones" */ "./views/GameOfZones.vue")
  },
  {
    path: "/glossary",
    name: "glossary",
    component: () =>
      import(/* webpackChunkName: "glossary" */ "./views/Glossary.vue")
  },
  {
    path: "/intro",
    name: "intro",
    component: Intro
  },
  {
    path: "/launch",
    name: "launch",
    component: () =>
      import(/* webpackChunkName: "event" */ "./views/Launch.vue")
  },
  {
    path: "/presskit",
    name: "presskit",
    component: () =>
      import(/* webpackChunkName: "presskit" */ "./views/PressKit.vue")
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "./views/Privacy.vue")
  },
  {
    path: "/sdk",
    name: "product-sdk",
    component: ProductSDK
  },
  // {
  //   path: "/roadmap",
  //   name: "roadmap",
  //   component: () =>
  //     import(/* webpackChunkName: "roadmap" */ "./views/Roadmap.vue")
  // },
  {
    path: "/subscribe",
    name: "subscribe",
    component: () =>
      import(/* webpackChunkName: "subscribe" */ "./views/Subscribe.vue")
  },
  {
    path: "/unsubscribe",
    name: "unsubscribe",
    component: () =>
      import(/* webpackChunkName: "unsubscribe" */ "./views/Unsubscribe.vue")
  },
  {
    path: "/resources",
    component: () =>
      import(/* webpackChunkName: "resources" */ "./views/Resources.vue"),
    children: [
      {
        path: "/",
        name: "resources",
        component: () =>
          import(/* webpackChunkName: "resources-index" */ "./views/ResourcesIndex.vue")
      },
      {
        path: "whitepaper",
        name: "whitepaper",
        component: () =>
          import(/* webpackChunkName: "whitepaper" */ "./views/ResourcesWhitepaper.vue")
      },
      {
        path: "whitepaper/:locale",
        name: "whitepaper-i18n",
        component: () =>
          import(/* webpackChunkName: "whitepaper-i18n" */ "./views/ResourcesWhitepaper.vue")
      },
      {
        path: "faq",
        name: "faq",
        component: () =>
          import(/* webpackChunkName: "faq" */ "./views/ResourcesFaq.vue")
      },
      {
        path: "plan",
        name: "plan",
        component: () =>
          import(/* webpackChunkName: "plan" */ "./views/ResourcesPlan.vue")
      }
    ]
  },
  {
    path: "/careers",
    beforeEnter: () => {
      window.location.assign("https://jobs.lever.co/tendermint")
    }
  },
  {
    path: "/contact-events",
    beforeEnter: () => {
      window.location.assign(urls.contactEvents)
    }
  },
  // WILDROUTES
  {
    path: "/404",
    component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
  },
  {
    path: "/newsletters/2020-03*",
    beforeEnter: () => {
      window.location.assign("/newsletters/community/2020-03")
    }
  },
  {
    path: "/newsletters/",
    component: Newsletters
  },
  {
    path: "/newsletters/signup/cosmos",
    name: "cosmos-signup",
    component: () =>
      import(/* webpackChunkName: "404" */ "./views/NewslettersSignupCosmos.vue")
  },
  {
    path: "/newsletters/signup/tools",
    component: () =>
      import(/* webpackChunkName: "404" */ "./views/NewslettersSignupTools.vue")
  },
  {
    path: "/newsletters/signup/ibc",
    name: "ibc-signup",
    component: () =>
      import(/* webpackChunkName: "404" */ "./views/NewslettersSignupIbc.vue")
  },
  {
    path: "/newsletters/signup/validators",
    name: "validators-signup",
    component: () =>
      import(/* webpackChunkName: "404" */ "./views/NewslettersSignupValidators.vue")
  },
  {
    path: "/rpc",
    redirect: "/rpc/v0.41.4"
  },
  {
    path: "/rpc/:version?",
    component: Api,
    props: true
  },
  {
    path: "/livestream",
    beforeEnter: () => {
      window.location.assign(
        "https://calendar.google.com/calendar?cid=dGVuZGVybWludC5jb21fdnVwMTBtNGxkcXIwZWRtNTZoaTY5ZHZudmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
      )
    }
  }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 48 + 3 }
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
