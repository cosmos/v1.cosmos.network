## Does Cosmos have a token? When will it be released?

Not one token, but many. The Cosmos Network is an ecosystem of blockchains, where each blockchain in the ecosystem may have an arbitrary number of tokens. This is the case for the Cosmos Hub, one of the first blockchains to be launched in the Cosmos Network. The token of the Cosmos Hub is called ATOM. ATOM have been released on the Cosmos Hub.

## How do I get ATOM?

If you participated in the fundraiser in April of 2017, you can check your suggested ATOM balance at [fundraiser.cosmos.network](https://fundraiser.cosmos.network/). If not, ATOM has been listed on multiple exchanges.

## Are ATOM listed on exchanges?

**Disclaimer**<br>
Due to the architecture of the Cosmos Network, neither All in Bits Inc (AiB) nor the Interchain Foundation (ICF) has control over the network. Neither AiB nor ICF supports or promotes the trading with ATOMs. Any interaction with ATOMS is at your own risk. We recommend that only experienced users should trade with ATOMs. Neither AiB nor ICF assume any responsibility in particular for the availability, accuracy or reliability of any technology or software used by the Cosmos Network.

Yes, ATOM is listed on [exchanges](https://coinmarketcap.com/currencies/cosmos/#markets). [\$CMOS](https://www.cryptocompare.com/coins/cmos/overview/BTC) and [Atomic Coin](https://coincap.io/assets/atomic-coin) tokens are **not related** to the Cosmos Network.

## Who is the team developing the Cosmos Network?

The Cosmos Network is a project that is supported by the [Interchain Foundation](https://interchain.io/). Most of the initial software development was done by the [Tendermint team](https://tendermint.com/about) (aka All in Bits Inc), however, in the spirit of the Cosmos Network itself, over time, development has become decentralized. Today there are many teams in the ecosystem contributing to the development of core software and infrastructure in the Cosmos ecosystem, such as [Agoric](https://agoric.com), [Akash](https://akash.network), [Althea](https://althea.net), [Chainapsis](https://chainapsis.com), [ChainSafe](https://chainsafe.io), [Confio](https://confio.tech), [Informal Systems](https://informal.systems), [Interchain GmbH](https://interchain.berlin), [Iqlusion](https://iqlusion.io), [IRIS](https://irisnet.org), [Lunie](https://lunie.io), [Promise Protocol](https://promiseprotocols.com), [Regen](https://regen.network), [Sikka](https://sikka.tech), [SnowFork](https://snowfork.com), [VitWit](https://vitwit.com), and [Zondax](https://zondax.ch).

## How do I participate in the fundraiser?

The [fundraiser](https://fundraiser.cosmos.network/) has ended. The [Interchain Foundation](https://interchain.io/) raised funds from private individuals and has hosted a public fundraising event that ended on April 6, 2017. Both $ETH and $BTC were accepted in the fundraiser.

## What is the initial allocation of ATOM?

The [Interchain Foundation](https://interchain.io) distributed the ATOMs in the following way, 5% of the ATOM went to its initial donors, 10% went to the Interchain Foundation, 10% went to the company developing most of the software (Tendermint Inc.), and the remaining 75% to be distributed according to the results of the private and public fundraisers.

## What is the Interchain Foundation?

The Interchain Foundation is a Swiss non-profit with a mandate to research, develop, and promote open, decentralized, network technologies like Cosmos SDK. Grant applications are open, you can find out more here: [Interchain Foundation Github](https://github.com/interchainio/funding)

## What's the difference between Tendermint, the Cosmos Network, and the Cosmos Hub?

- [Tendermint](https://github.com/tendermint/tendermint) is a general-purpose [Replicated State Machine (RSM)](https://atrium.lib.uoguelph.ca/xmlui/bitstream/handle/10214/9769/Buchman_Ethan_201606_MAsc.pdf?sequence=7&isAllowed=y), that guarantees Byzantine-fault tolerant properties for any distributed ledger technology (DLT) or blockchain application running consensus with it. In practice, it enables developers to build blockchains without having to build everything from scratch.

- The Cosmos Network is a network of heterogeneous blockchains, which are each connected to one another via the Cosmos Hub (i.e. a router) and a standard communication layer called [Inter-Blockchain Communication protocol](https://github.com/cosmos/cosmos-sdk/tree/develop/docs/spec/ibc) (i.e. TCP/IP).

- The Cosmos Hub was one of the first blockchains to be launched on the Cosmos Network. It acts as a router that facilitates token transactions between future Cosmos blockchains. To ensure security and to prevent double spending, the Cosmos Hub keeps track of the state of all connected blockchains.

## What is the utility of ATOM?

ATOM have three use cases: as a spam-prevention mechanism, as staking tokens, and as a voting mechanism in governance.

1.  As a spam prevention mechanism, ATOM are used to pay fees. The fee may be proportional to the amount of computation required by the transaction, similar to Ethereum's concept of "gas". Fee distribution is done in-protocol and a protocol specification is [described here](https://github.com/cosmos/cosmos-sdk/blob/81e5ce15aa1a79cee05415d8fd196c3d4315fa9b/docs/spec/distribution/overview.md).

2.  As staking tokens, ATOM can be "bonded" in order to earn block rewards. The [economic security of the Cosmos Hub](https://blog.cosmos.network/economics-of-proof-of-stake-bridging-the-economic-system-of-old-into-the-new-age-of-blockchains-3f17824e91db) is a function of the amount of ATOM staked. The more ATOM that are collateralized, the more “skin” there is at stake and the higher the cost of attacking the network. Thus, the more ATOM there are bonded, the greater the economic security of the network.

3.  ATOM holders may govern the Cosmos Hub by voting on proposals with their staked ATOM.

## What is the Internet of Blockchains? What are Hubs and Zones?

Cosmos is the blockchain pioneer of the [Hub & Spoke architecture](https://medium.com/tendermint/blockchain-scaling-solutions-cosmos-and-plasma-b5ee09456f80). Hubs act as routers for Zones. "Zones" are Cosmos-speak for “application-specific blockchains”. Each Zone is a spoke connected to a hub. Hubs can be connected with other hubs. Together, this ecosystem of connected Hubs and Zones makes up the Cosmos Network, or what is commonly referred to as the ‘Internet of the Blockchains’. Note that the Cosmos ecosystem is entirely permission-less, meaning that anyone can create a Hub or a Zone, and each blockchain is free to accept or refuse connections with other blockchains.

Zones only need to establish a single connection with a Hub in order to be interoperable with all of the other Zones that are each connected to that Hub. The Cosmos Hub is one of the first Hubs to be launched on the Cosmos Network, and anybody is free to fork the Cosmos Hub codebase and launch other Hubs in the Cosmos Network.

## What is the Cosmos SDK?

The [Cosmos SDK](https://cosmos.network/sdk) is a modular development framework that allows developers to easily build application-specific blockchains, i.e. sidechains ('Zones' in Cosmos terminology).

You can read more about Cosmos SDK on the ["What is Cosmos"](https://cosmos.network/intro) page and the [Cosmos SDK documentation](docs.cosmos.network).

## Where can I find a tutorial of how to build a Cosmos app?

Visit the Cosmos [Tutorials website](https://tutorials.cosmos.network/) to learn how to build your own Cosmos app in minutes. The easiest way to get started is with the [Voter](https://tutorials.cosmos.network/voter/) tutorial.

## How can I become a validator

If you would like to become a validator for the Cosmos Hub, please see the [comprehensive guide](https://hub.cosmos.network/main/validators/validator-setup.html) in the Cosmos Hub documentation.

## What infrastructure is needed to run a validator?

There are many ways to set up your validator. Here is a guide that was written on the current recommended setup: [Sentry Node Architecture](https://forum.cosmos.network/t/sentry-node-architecture-overview/454). The Cosmos Hub validators have been actively writing about setups they use. A [Community forum post](https://forum.cosmos.network/t/full-disclosure-lets-publish-validator-operations-infrastructure-info/2242) has been written with links to articles that will help you in setting up your validator.

## Why does Cosmos believe that many application-specific chains are needed instead of a single, general-purpose blockchain?

Applications benefit from running their own chains specialized for their own needs. The performance improvement, greater flexibility, ease of use, and sovereignty enables greater user adoption of an application-specific sidechain.

General-purpose chains serve their purposes, but for most use cases, application-specific blockchains enable developers to optimize the code for the specific application, whereas general-purpose blockchains optimize for the average use case.

Read more about the advantages of [application-specific blockchains](https://docs.cosmos.network/master/intro/why-app-specific.html).

## Is Cosmos a sidechain project?

At its core, yes. Cosmos SDK is a framework which allows developers to easily build and launch what are essentially pegged sidechains. These sidechains are called ‘Zones’ in Cosmos-speak. These sidechains can be connected with the Cosmos Hub via Inter-Blockchain Communication (IBC). Once a sidechain is connected to the Cosmos Hub, it will be interoperable with every other sidechain which is connected to the Cosmos Hub.

## What consensus algorithm does Cosmos run on?

[Tendermint is the consensus engine](https://blog.cosmos.network/tendermint-explained-bringing-bft-based-pos-to-the-public-blockchain-domain-f22e274a0fdb) that powers Cosmos BPoS.

## What advantages does the Cosmos Network have over other blockchain projects? What are some use cases?

There are [many advantages](https://blog.cosmos.network/understanding-the-value-proposition-of-cosmos-ecaef63350d) that come with deploying a chain on Cosmos:

- Flexibility and ease-of-use for the application developer

- Sovereignty to govern your own chain

- Interoperability

The Cosmos SDK is designed to empower blockchain application developers to launch applications with high throughput requirements, e.g. [decentralized content economies](https://medium.com/@linonetwork/lino-network-annual-report-87c0823a132c), [music sharing](https://medium.com/tendermint/tokenizing-the-music-industry-with-play-protocol-ea929de52210), and beyond. Some use cases:

- DEXs

- Decentralized economies

- Open marketplaces

- Other (content, private networks, etc.)

## Which blockchain projects are built on Cosmos?

Please see the [community maintained list](https://cosmonauts.world) of projects in the Cosmos ecosystem.

## Is Cosmos a competitor to Ethereum / does Cosmos intend to replace Ethereum?

Cosmos does not intend to act as a drop-in replacement of Ethereum. The Cosmos technology stack provides complementary blockchain development frameworks that allow developers to launch their own blockchains — a use case that Ethereum’s infrastructure doesn’t currently address.

## Where can I get Developer support?

Check out the Cosmos [Developer Chat](https://discord.gg/vcExX9T) for technical support from the growing community of Cosmos developers.

## How can I get in touch with the Interchain Foundation?

Please email [hello@interchain.io](mailto:hello@interchain.io)
