const state = [
  {
    id: "host-billy",
    slug: "scavenger-hunt",
    date: "2020-05-11",
    time: "10:00",
    title: "Scavenger Hunt Tutorial",
    host: "Billy Rennekamp",
    company: "Interchain GmbH",
    replay: "https://www.youtube.com/watch?v=GfZjnMchKX0",
    description: `
Learn how to build a working game with its own internal economy using the Cosmos SDK, a Golang framework for making application-specific blockchains. The workshop will use the 'Scavenge' tutorial led and designed by Billy Rennekamp.

### Host

Billy Rennekamp – Grants Manager, Interchain Foundation

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

- <a href="https://tutorials.cosmos.network/scavenge/tutorial/01-background.html" target="_blank" ref="noreferrer noopener">'Scavenge' tutorial</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-1.jpg",
    href: "https://cosmos.network/series/code-with-us/scavenger-hunt",
    subtitle: "May 11 · Online event",
    dateStart: "5/11/2020",
    dateEnd: "5/11/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-1.jpg"
      }
    ]
  },
  {
    id: "host-sunny",
    slug: "its-on-me",
    date: "2020-05-26",
    time: "10:00",
    title: "“It’s on Me” fee payments & Togglerouter",
    host: "Sunny Aggarwal",
    company: "Cosmos | Tendermint",
    replay: "https://www.youtube.com/watch?v=M2GS10qoslU",
    description: `
Learn how to change lower level functionality of transactions in the SDK. Be able to turn and off different tx types, change the fee payer, and create antehandler modules.

### Host

Sunny Aggarwal – Researcher, Cosmos | Tendermint

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

- <a href="https://github.com/heystraightedge/straightedge/tree/master/x/togglerouter" target="_blank" ref="noreferrer noopener">straightedge/x/togglerouter</a><br>
- <a href="https://tutorials.cosmos.network/hellochain/" target="_blank" ref="noreferrer noopener">HelloChain tutorial</a>

🔮 Part of the [*Code with Us*](https://cosmos.network/series/code-with-us) online workshops series."
`,
    coverImg: "/images/workshop/code-with-us-workshop-2.jpg",
    href: "https://cosmos.network/series/code-with-us/its-on-me",
    subtitle: "May 26 · Online event",
    dateStart: "5/26/2020",
    dateEnd: "5/26/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-2.jpg"
      }
    ]
  },
  {
    id: "host-alessio",
    slug: "debug-a-cosmos-sdk",
    date: "2020-06-22",
    time: "10:00",
    title:
      "Debug a Cosmos-SDK application: first steps (GDB, Delve, GDBGui, gdlv)",
    host: "Alessio Treglia",
    company: "Cosmos | Tendermint",
    replay: "https://www.youtube.com/watch?v=qnMQDID5HME",
    description: `
Learn how to effectively debug Cosmos SDK applications. General overview of debuggers and how to configure them to work with Go data types.

### Host

Alessio Treglia – Head of EMEA Partnerships, Cosmos | Tendermint.

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

- <a href="https://github.com/cosmos/cosmos-sdk/" target="_blank" ref="noreferrer noopener">cosmos/cosmos-sdk</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-3.jpg",
    href: "https://cosmos.network/series/code-with-us/debug-a-cosmos-sdk",
    subtitle: "June 22 · Online event",
    dateStart: "6/22/2020",
    dateEnd: "6/22/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-3.jpg"
      }
    ]
  },
  {
    id: "host-ethan",
    slug: "custom-tokens-cosmwasm",
    date: "2020-06-29",
    time: "13:00",
    title: "Custom tokens with CosmWasm",
    host: "Ethan Frey",
    company: "Confio | CosmWasm",
    replay: "https://www.youtube.com/watch?v=pm6VX5ueT2k",
    description: `
Learn how to add more advanced functionality, like minting, burning, and bonding curves to a base ERC20-like contract.

### Host

Ethan Frey – CEO / Founder, Confio | CosmWasm

### Resources

We will be coding some basic token contracts in Rust to deploy on the CosmWasm testnet.

We ask that all participants have previously [installed Rust](https://www.cosmwasm.com/docs/getting-started/rust-basics) and have set up the IDE of their choice with a Rust extension. 

We will not be covering the basic structure of the CosmWasm contract in much detail. If you have no experience with CosmWasm, please go through the [tutorial](https://www.cosmwasm.com/docs/getting-started/intro) which explains step-by-step how to modify a simple escrow contract. This will also ensure you have all pre-requisite tooling set up.

We will be starting with some example token code that Ethan Frey wrote [cosmwasm-plus](https://github.com/CosmWasm/cosmwasm-plus), explaining the design and how it works. And we will extend those basic contracts to create customized tokens, as an intro into DeFi on CosmWasm.

We also hope to schedule a follow-up workshop to show how to build custom web interfaces (dApps) to interact with the contracts.

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-4.jpg",
    href: "https://cosmos.network/series/code-with-us/custom-tokens-cosmwasm",
    subtitle: "June 29 · Online event",
    dateStart: "6/29/2020",
    dateEnd: "6/29/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-4.jpg"
      }
    ]
  },
  {
    id: "host-marko",
    slug: "setting-up-a-cosmos-validator",
    date: "7/09/2020",
    time: "9am PDT / 12pm EDT / 6pm CEST",
    title: "Setting up a Cosmos validator",
    host: "Marko Baricevic",
    company: "Interchain GmbH",
    replay: "https://www.youtube.com/watch?v=N8KaORM1UIk",
    description: `

In this Code with Us session we will be walking through setting up servers to run a cosmos validator. We will discuss the recommended validator setup, sentry node architecture, how to join a network, how to have a secure setup and how to monitor you servers.

### Host

Marko Baricevic – Software Engineer, Interchain GmbH

### Resources

- [Tendermint Core - Metrics](https://docs.tendermint.com/master/tendermint-core/metrics.html)
- [Tendermint Core - Validators](https://docs.tendermint.com/master/tendermint-core/validators.html)
- [Cosmos Hub - Validator FAQ](https://hub.cosmos.network/master/validators/validator-faq.html)
- [Cosmos Hub - Validator Security](https://hub.cosmos.network/master/validators/security.html)

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-6.jpg",
    href:
      "https://cosmos.network/series/code-with-us/setting-up-a-cosmos-validator",
    subtitle: "July 9 · Online event",
    dateStart: "7/09/2020",
    dateEnd: "7/09/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-6.jpg"
      }
    ]
  },
  {
    id: "host-elizabeth",
    slug: "developing-on-ethermint",
    date: "7/21/2020",
    time: "1pm PDT / 4pm EDT / 10pm CEST",
    title: "Developing on Ethermint",
    host: "Elizabeth Binks",
    company: "Chainsafe",
    replay: "https://www.youtube.com/watch?v=cH-4Mq-S4BA",
    description: `

Learn how to set up an Ethermint development environment and use Ethereum tooling on Ethermint!

### Host

Elizabeth Binks – Software Developer, Chainsafe

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

- Repository: <a href="https://github.com/ChainSafe/ethermint" target="_blank" ref="noreferrer noopener">Chainsafe/ethermint</a>

- Preinstalllation requirements: Go 1.14, Node.js, NPM

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-5.jpg",
    href: "https://cosmos.network/series/code-with-us/developing-on-ethermint",
    subtitle: "July 21 · Online event",
    dateStart: "7/21/2020",
    dateEnd: "7/21/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-5.jpg"
      }
    ]
  },
  {
    id: "host-denis",
    slug: "creating-your-first-cosmos-app",
    date: "2020-07-30",
    time: "21:00",
    title: "Creating your first Cosmos app",
    host: "Denis Fadeev",
    company: "Tendermint",
    replay: "https://www.youtube.com/watch?v=h6Ur_40LB9k",
    description: `

At Tendermint, we’ve built Starport, a rapid prototyping tool that lets developers scaffold and launch a Cosmos application in minutes. In this tutorial we will be building a simple poll application based on Cosmos SDK. The app will allow signed in users to create polls (creating a poll will cost tokens), cast votes and see the results in a browser-based UI. We will be using Starport CLI to scaffold the code and launch the app and some JavaScript to wire up the UI. This is a beginner-friendly session that doesn’t require any prior knowledge of Cosmos SDK (only some experience with Go or JS, and a Unix-like console).

### Hosts

- Denis Fadeev - Director of Developer Experience, Tendermint

### Resources

- <a href="https://github.com/tendermint/starport" target="_blank" ref="noreferrer noopener">https://github.com/tendermint/starport</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-8.jpg",
    href:
      "https://cosmos.network/series/code-with-us/creating-your-first-cosmos-app",
    subtitle: "July 31 · Online event",
    dateStart: "7/31/2020",
    dateEnd: "7/31/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-8.jpg"
      }
    ]
  },
  {
    ids: ["host-sai", "host-sistla"],
    slug: "experiment-with-cross-chain-nft-minting",
    date: "2020-08-04",
    time: "08:00",
    title:
      "Experiment with cross chain NFT minting & round trip tx with Cosmos IBC",
    host: "Sai Krishna & Sistla V Abhishek",
    company: "Cosmic Compass",
    replay: "https://www.youtube.com/watch?v=gYRvxhIUJWo",
    description: `

Dig deep into a media use case of blockchain where you setup a Cosmos SDK based chain, install the NFT module & use Cosmos IBC to mint a custom NFT

### Hosts

- Sai Krishna (CoCo & FreeFlix Media)
- Sistla V Abhishek (CoCo & FreeFlix Media)

Contributors: Ravali Gangasani, Prashanth Shirmishetty, Dayakar Reddy N

### Resources

- Go through/watch the other workshop tutorials, especially the one by <a href="https://cosmos.network/series/code-with-us/scavenger-hunt" target="_blank" ref="noreferrer noopener">Billy Rennekamp</a>
- Do go through the <a href="https://github.com/cosmos/cosmos-sdk" target="_blank" ref="noreferrer noopener">Cosmos SDK</a> to understand and know more about Cosmos, but prior know about Cosmos is not required if you understand how blockchains (POS or POW) work
- <a href="https://github.com/cosmos/modules/tree/master/incubator/nft" target="_blank" ref="noreferrer noopener">Cosmos Non-fungible Tokens<a> & <a href="https://github.com/iqlusioninc/relayer" target="_blank" ref="noreferrer noopener">Cosmos IBC</a>
- <a href="https://github.com/FreeFlixMedia/freeflix-media-hub" target="_blank" ref="noreferrer noopener">FreeFlix Media Hub Repo</a> (for blockchain setup)
- <a href="https://github.com/FreeFlixMedia/modules/" target="_blank" ref="noreferrer noopener">Modules repo with nfts and xnfts modules</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-7.jpg",
    href:
      "https://cosmos.network/series/code-with-us/experiment-with-cross-chain-nft-minting",
    subtitle: "August 4 · Online event",
    dateStart: "8/04/2020",
    dateEnd: "8/04/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-7.jpg"
      }
    ]
  },
  {
    id: "host-billy",
    slug: "front-end-name-service",
    date: "2020-08-31",
    time: "10:00",
    title: "Front end name service application",
    host: "Billy Rennekamp",
    company: "Interchain GmbH",
    replay: "https://www.youtube.com/watch?v=ooc9ODGxqcA",
    description: `
Learn how to build front ends that interact with Cosmos SDK applications. This will take the Name Service application as the running backend and build a front end that will query and interact with the running blockchain.

### Host

Billy Rennekamp – Grants Manager, Interchain Foundation

### Resources

- <a href="https://github.com/okwme/talkshop" target="_blank" ref="noreferrer noopener">Talkshop</a>
- <a href="https://tutorials.cosmos.network/nameservice/tutorial/00-intro.html" target="_blank" ref="noreferrer noopener">Nameservice - Cosmos SDK Tutorials</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-9.jpg",
    href: "https://cosmos.network/series/code-with-us/front-end-name-service",
    subtitle: "August 31 · Online event",
    dateStart: "08/31/2020",
    dateEnd: "08/31/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-9.jpg"
      }
    ]
  },
  {
    id: "host-kate",
    slug: "building-a-composable-defi-contract",
    date: "2020-09-11",
    time: "08:30",
    title: "Building a Composable DeFi Contract",
    host: "Kate Sills",
    company: "Agoric",
    replay: "https://www.youtube.com/watch?v=faxrecQgEio",
    description: `

Dive into DeFi on the Agoric smart contract platform. We will walk you through building an “over-the-counter” market maker, inspired by <a href="https://medium.com/dragonfly-research/unbundling-uniswap-the-future-of-on-chain-market-making-1c7d6948d570" target="_blank" ref="noreferrer noopener">this article</a>. The example introduces the key concepts of safe smart contracts on Agoric, and shows how to combine DeFi legos to rapidly produce a new DeFi dapp.

### Hosts

- Kate Sills - Software Engineer, Agoric

### Resources

- Developer documentation: <a href="https://agoric.com/documentation/getting-started/" target="_blank" ref="noreferrer noopener">https://agoric.com/documentation/getting-started/</a>
- Github repository: <a href="https://github.com/Agoric/agoric-sdk" target="_blank" ref="noreferrer noopener">https://github.com/Agoric/agoric-sdk</a>
- The article that inspired the example: <a href="https://medium.com/dragonfly-research/unbundling-uniswap-the-future-of-on-chain-market-making-1c7d6948d570" target="_blank" ref="noreferrer noopener">https://medium.com/dragonfly-research/unbundling-uniswap-the-future-of-on-chain-market-making-1c7d6948d570</a>

### Installation

- Follow the <a href="https://agoric.com/documentation/getting-started/before-using-agoric.html" target="_blank" ref="noreferrer noopener">Before Using Agoric</a> instructions in the <a href="https://agoric.com/documentation/getting-started/" target="_blank" ref="noreferrer noopener">getting started</a>.
- Follow the <a href="https://agoric.com/documentation/getting-started/start-a-project.html" target="_blank" ref="noreferrer noopener">Starting a Project</a> instructions in the <a href="https://agoric.com/documentation/getting-started/" target="_blank" ref="noreferrer noopener">getting started</a>, just to make sure everything is wired up correctly
- Reach out to Agoric in our KeyBase support channel: <a href="https://keybase.io/team/agoric.support#general" target="_blank" ref="noreferrer noopener">https://keybase.io/team/agoric.support#general</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-10.jpg",
    href:
      "https://cosmos.network/series/code-with-us/building-a-composable-defi-contract",
    subtitle: "September 11 · Workshop",
    dateStart: "9/11/2020",
    dateEnd: "9/11/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-10.jpg"
      }
    ]
  },
  {
    id: "host-paddy",
    slug: "code-together-on-consensus",
    date: "2020-10-15",
    time: "11:00",
    title: "Code Together On Consensus: Proof of Authority SDK Module",
    host: "Paddy McHale",
    company: "Tendermint",
    replay: "",
    description: `

Let’s code together on the consensus module of the Cosmos-SDK. We’ll start by scaffolding an application using <a href="https://github.com/tendermint/starport" target="_blank" ref="noreferrer noopener">starport</a>, then we’re going to swap out the <a href="https://github.com/cosmos/cosmos-sdk/blob/master/x/staking/spec/README.md" target="_blank" ref="noreferrer noopener">Staking consensus module</a> in the Cosmos SDK in favor of a <a href="https://github.com/allinbits/modules/tree/master/x/poa" target="_blank" ref="noreferrer noopener">Proof of Authority consensus module</a>.

### Hosts

- Paddy McHale - Protocol Developer, Tendermint

### Resources

Modules Overview: <a href="https://github.com/cosmos/cosmos-sdk/tree/master/docs/building-modules" target="_blank" ref="noreferrer noopener">https://github.com/cosmos/cosmos-sdk/tree/master/docs/building-modules</a>

POA module: <a href="https://github.com/allinbits/modules/tree/master/x/poa" target="_blank" ref="noreferrer noopener">https://github.com/allinbits/modules/tree/master/x/poa</a>

- Step 1: <a href="https://github.com/allinbits/modules/pull/4/files" target="_blank" ref="noreferrer noopener">https://github.com/allinbits/modules/pull/4/files</a>
- Step 2: <a href="https://github.com/allinbits/modules/pull/5/files" target="_blank" ref="noreferrer noopener">https://github.com/allinbits/modules/pull/5/files</a>

### Installation

Please install starport: <a href="https://github.com/tendermint/starport" target="_blank" ref="noreferrer noopener">https://github.com/tendermint/starport</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-12.jpg",
    href:
      "https://cosmos.network/series/code-with-us/code-together-on-consensus",
    subtitle: "October 15 · Workshop",
    dateStart: "10/15/2020",
    dateEnd: "10/15/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-12.jpg"
      }
    ]
  },
  {
    ids: ["host-miguel", "host-shaun"],
    slug: "make-your-own-automated-market-maker",
    date: "2020-11-03",
    time: "08:00",
    title:
      "Make your own Automated Market-Maker, using the new Cosmos SDK Bonds Module",
    host: "Miguel Dingli & Shaun Conway",
    company: "Simply VC & ixo",
    replay: "",
    description: `

- Discover the new Cosmos-SDK Bonds module, the Automated Market-Maker (AMM) with universal bonding curves. The workshop will be hosted by Miguel Dingli, the lead developer of this module.
- Learn how to configure your first AMM using a simple bonding curve for algorithmic pricing. Then we will move onto more advanced types such as Uniswap-type token pair swappers and Augmented Bonding Curves.

### Hosts

- Miguel Dingli (Software Developer, Simply VC)
- Shaun Conway (Founder, ixo)

### Resources

- Code With Us to create your own Automated Market-Maker using the new Cosmos-SDK Bonds Module, presented by <a href="https://twitter.com/MiguelDingli" target="_blank" ref="noreferrer noopener">@MiguelDingli</a> <a href="https://twitter.com/Simply_VC" target="_blank" ref="noreferrer noopener">@Simply_VC</a> and <a href="https://twitter.com/ixoworld" target="_blank" ref="noreferrer noopener">@ixoworld</a>
- <a href="https://github.com/ixoworld/bonds/" target="_blank" ref="noreferrer noopener">GitHub</a>
- <a href="https://medium.com/ixo-blog/cosmic-bonding-4f948dd4c2e4" target="_blank" ref="noreferrer noopener">Medium</a>

### Installation

- <a href="https://golang.org/dl/" target="_blank" ref="noreferrer noopener">Golang 1.13+</a>

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-11.jpg",
    href:
      "https://cosmos.network/series/code-with-us/make-your-own-automated-market-maker",
    subtitle: "November 03 · Workshop",
    dateStart: "11/03/2020",
    dateEnd: "11/03/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-11.jpg"
      }
    ]
  }
]

export default { state }
