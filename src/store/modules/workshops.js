const state = [
  {
    id: "host-billy",
    slug: "scavenger-hunt",
    date: "5/11/2020",
    time: "10am PDT / 1pm EDT / 7pm CEST",
    title: "Scavenger Hunt Tutorial",
    host: "Billy Rennekamp",
    company: "Interchain GmbH",
    replay: "https://www.youtube.com/watch?v=GfZjnMchKX0",
    description: `
Learn how to build a working game with its own internal economy using the Cosmos SDK, a Golang framework for making application-specific blockchains. The workshop will use the 'Scavenge' tutorial led and designed by Billy Rennekamp.

### Host

Billy Rennekamp – Grants Manager, Interchain Foundation.

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

&nbsp;&nbsp;• <a href="https://tutorials.cosmos.network/scavenge/tutorial/01-background.html" target="_blank" ref="noreferrer noopener">'Scavenge' tutorial</a>

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
    date: "5/26/2020",
    time: "10am PDT / 1pm EDT / 7pm CEST",
    title: "“It’s on Me” fee payments & Togglerouter",
    host: "Sunny Aggarwal",
    company: "Cosmos | Tendermint Inc",
    replay: "https://www.youtube.com/watch?v=M2GS10qoslU",
    description: `
Learn how to change lower level functionality of transactions in the SDK. Be able to turn and off different tx types, change the fee payer, and create antehandler modules.

### Host

Sunny Aggarwal – Researcher, Cosmos | Tendermint Inc.

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

&nbsp;&nbsp;• <a href="https://github.com/heystraightedge/straightedge/tree/master/x/togglerouter" target="_blank" ref="noreferrer noopener">straightedge/x/togglerouter</a><br>
&nbsp;&nbsp;• <a href="https://tutorials.cosmos.network/hellochain/" target="_blank" ref="noreferrer noopener">HelloChain tutorial</a>

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
    date: "6/22/2020",
    time: "10am PDT / 1pm EDT / 7pm CEST",
    title:
      "Debug a Cosmos-SDK application: first steps (GDB, Delve, GDBGui, gdlv)",
    host: "Alessio Treglia",
    company: "Cosmos | Tendermint Inc",
    replay: "https://www.youtube.com/watch?v=qnMQDID5HME",
    description: `
Learn how to effectively debug Cosmos SDK applications. General overview of debuggers and how to configure them to work with Go data types.

### Host

Alessio Treglia – Head of EMEA Partnerships, Cosmos | Tendermint Inc.

### Resources

Get a headstart by familiarizing yourself with the resources you'll be using in this workshop.

&nbsp;&nbsp;• <a href="https://github.com/cosmos/cosmos-sdk/" target="_blank" ref="noreferrer noopener">cosmos/cosmos-sdk</a>

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
    date: "6/29/2020",
    time: "1am PDT / 4am EDT / 10am CEST / 1:30pm IST / 4pm CST / 5pm KST/JST",
    title: "Custom tokens with CosmWasm",
    host: "Ethan Frey",
    company: "Confio | CosmWasm",
    replay: "",
    description: `
Learn how to add more advanced functionality, like minting, burning, and bonding curves to a base ERC20-like contract.

### Host

Ethan Frey – CEO / Founder, Confio | CosmWasm.

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
    id: "host-elizabeth",
    slug: "ethermint-tutorial",
    date: "7/21/2020",
    time: "1pm PDT / 4pm EDT / 10pm CEST",
    title: "Developing on Ethermint",
    host: "Elizabeth Binks",
    company: "Chainsafe",
    replay: "",
    description: `
Learn how to set up an Ethermint development environment and use Ethereum tooling on Ethermint!

### Host

Elizabeth Binks – Software Developer, Chainsafe.

### Resources

https://github.com/ChainSafe/ethermint

Preinstalllation requirements: Go 1.14, Node.js, NPM

🔮 Part of the [*Code with Us*](/series/code-with-us) online workshops series.
`,
    coverImg: "/images/workshop/code-with-us-workshop-5.jpg",
    href: "https://cosmos.network/series/code-with-us/custom-tokens-cosmwasm",
    subtitle: "July 21 · Online event",
    dateStart: "7/21/2020",
    dateEnd: "7/21/2020",
    logo: [
      {
        type: "image/jpeg",
        url: "/images/workshop/code-with-us-workshop-5.jpg"
      }
    ]
  }
]

export default { state }
