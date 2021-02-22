# What is Cosmos?

[[toc]]

## Introduction

Strictly speaking, **Cosmos is a decentralized network of independent parallel blockchains, each powered by <def value="bft">BFT</def> consensus algorithms like [Tendermint](#what-is-tendermint-core-and-the-abci) consensus.**

In other words, Cosmos is an ecosystem of <def value="blockchain">blockchains</def> that can scale and interoperate with each other. Before Cosmos, blockchains were siloed and unable to communicate with each other. They were hard to build and could only handle a small amount of <def value="tx">transactions</def> per second. Cosmos solves these problems with a new technical vision. In order to understand this vision we need to go back to the fundamentals of blockchain technology.

## What is a Blockchain?

A blockchain can be described as a digital ledger maintained by a set of validators that remains correct even if some of the validators (less than a third) are malicious. Each party stores a copy of the ledger on their computer and updates it according to the rules defined by the protocol when they receive blocks of transactions. The goal of blockchain technology is to make sure the ledger is correctly replicated, meaning that each honest party sees the same version of the ledger at any given moment.

The main benefit of blockchain technology is the ability for parties to share a ledger without having to rely on a central authority. Blockchains are **decentralized**. The first and most famous application of blockchain technology today is Bitcoin, a decentralized currency.

Now that we have a better understanding of what a blockchain is from a high-level perspective, let us look at the definition of blockchain with a more technical angle. A blockchain is a deterministic state machine replicated on <def value="full-node">full-nodes</def> that retains consensus safety as long as less than a third of its maintainers are <def value="byzantine">Byzantine</def>. Let's break this down.

- A state machine is just a fancy word for a program that holds a state and modifies it when it receives inputs. There is a state, which can represent different things depending on the application (e.g. <def value="token">token</def> balances for a cryptocurrency), and transactions, that modify the state (e.g. by subtracting balances from one <def value="account">account</def> and adding them to another).
- Deterministic means that if you replay the same transactions from the same genesis state, you will always end up with the same resultant state.
- Consensus safety refers to the fact that every honest node on which the state machine is replicated should see the same state at the same time. When nodes receive blocks of transactions, they verify that it is valid, meaning that each transaction is valid and that the block itself was validated by more than two thirds of the maintainers, called validators. Safety will be guaranteed as long as less than a third of validators are Byzantine, i.e. malicious.

<figure><img src="/images/intro/01-blockchain.svg" alt="Layers of a blockchain: application, consensus, and networking"></figure>

From an architecture standpoint, blockchains can be divided into three conceptual layers:

- **Application:** Responsible for updating the state given a set of transactions, i.e. processing transactions.
- **Networking:** Responsible for the propagation of transactions and consensus-related messages.
- **Consensus:** Enables nodes to agree on the current state of the system.

The state machine is the same as the <def value="application-layer">application layer</def>. It defines the state of the application and the state-transition functions. The other layers are responsible for replicating the state machine on all the nodes that connect to the network.

## How does Cosmos fit in the broader blockchain ecosystem?

### The Bitcoin Story (Blockchain 1.0)

<figure><img src="/images/intro/02-ecosystem-01.svg" alt="Bitcoin is monolithic"></figure>

To understand how Cosmos fits in the blockchain ecosystem, we need to go back to the beginning of the blockchain story. The first blockchain was Bitcoin, a peer-to-peer digital currency created in 2008 that used a novel consensus mechanism known as <def value="pow">Proof-of-Work (PoW)</def>. It was the first decentralized application on a blockchain. Soon, people started to realize the potential of decentralized applications and the desire to build new ones emerged in the community.

At the time, there were two options to develop decentralized applications: either fork the bitcoin codebase or build on top of it. However, the bitcoin codebase was very monolithic; all three layers—networking, consensus and application — were mixed together. Additionally, the Bitcoin scripting language was limited and not user-friendly. There was a need for better tools.

### The Ethereum Story (Blockchain 2.0)

<figure><img src="/images/intro/02-ecosystem-02.svg" alt="Ethereum has smart contracts"></figure>

In 2014, Ethereum came in with a new proposition for building decentralized applications. There would be a single blockchain where people would be able to deploy any kind of program. Ethereum achieved this by turning the _Application_ layer into a virtual machine called the _Ethereum Virtual Machine (EVM)_. This virtual machine was able to process programs called <def value="smart-contract">smart contracts</def> that any developer could deploy to the Ethereum blockchain in a <def value="permissionless">permissionless</def> fashion. This new approach allowed thousands of developers to start building decentralized applications (dApps). However, limitations to this approach soon became apparent and still persist to this day.

#### Limitation #1: Scalability

The first limitation is <def value="scalability">scaling</def> - decentralized applications built on top of Ethereum are inhibited by a shared rate of 15 transactions per second. This is due to the fact that Ethereum still uses Proof-of-Work and that Ethereum dApps compete for the limited resources of a single blockchain.

#### Limitation #2: Usability

The second limitation is the relatively low flexibility granted to developers. Because the EVM is a sandbox that needs to accommodate all use cases, it optimizes for the average use case. This means that developers have to make compromises on the design and efficiency of their application (for example, requiring use of the account model in a payments platform where a UTXO model may be preferred). Among other things, they are limited to a few programming languages and cannot implement automatic execution of code.

#### Limitation #3: Sovereignty

The third limitation is that each application is limited in <def value="sovereignty">sovereignty</def>, because they all share the same underlying environment. Essentially, this creates two layers of <def value="governance">governance</def>: that of the application, and that of the underlying environment. The former is limited by the latter. If there is a bug in the application, nothing can be done about it without the approval of the governance of the Ethereum platform itself. If the application requires a new feature in the EVM, it again has to rely entirely on the governance of the Ethereum platform to accept it.

These limitations are not specific to Ethereum but to all blockchains trying to create a single platform that would fit all use cases. This is where Cosmos comes into play.

### The Vision of Cosmos (Blockchain 3.0)

<figure><img src="/images/intro/02-ecosystem-03.svg" alt="Cosmos is composed of three layers"></figure>

<!--
![Cosmos for developers](/images/intro/02-ecosystem-arrow.svg)

![Cosmos for developers](/images/intro/02-ecosystem-04.svg)
-->

The vision of Cosmos is to make it easy for developers to build blockchains and break the barriers between blockchains by allowing them to transact with each other. The end goal is to create an **Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way.** With Cosmos, blockchains can maintain sovereignty, process transactions quickly and communicate with other blockchains in the ecosystem, making it optimal for a variety of use cases.

This vision is achieved through a set of open source tools like <def value="tendermint">Tendermint</def>, the <def value="cosmos-sdk">Cosmos SDK</def> and <def value="ibc">IBC</def> designed to let people build custom, secure, scalable and interoperable blockchain applications quickly. Let us take a closer look at some of the most important tools in the ecosystem as well as the technical architecture of the Cosmos network. Note that Cosmos is an open source community project initially built by the Tendermint team. Everyone is welcome to build additional tools to enrich the greater developer ecosystem.

## What is Tendermint BFT and the ABCI

Until recently, building a blockchain required building all three layers (_Networking_, _Consensus_, and _Application_) from the ground up. Ethereum simplified the development of decentralized applications by providing a Virtual-Machine blockchain on which anyone could deploy custom logic in the form of Smart Contracts. However, it did not simplify the development of blockchains themselves. Much like Bitcoin, Go-Ethereum remains a monolithic tech stack that is difficult to fork from and customize. This is where Tendermint, created by Jae Kwon in 2014, came in.

<figure><img src="/images/intro/03-tendermint.svg" alt="Diagram for Tendermint BFT"></figure>

Tendermint BFT is a solution that packages the _networking_ and _consensus_ layers of a blockchain into a generic engine, allowing developers to focus on _application_ development as opposed to the complex underlying protocol. As a result, Tendermint saves hundreds of hours of development time. Note that Tendermint also designates the name of the [byzantine fault tolerant (BFT)](https://github.com/tendermint/tendermint/wiki/Byzantine-Consensus-Algorithm) <def value="consensus-algorithm">consensus algorithm</def> used within the Tendermint BFT engine. For more on the history of consensus protocols and BFT you can check this cool [podcast](https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/) by Tendermint co-founder Ethan Buchman. \
 \
The [Tendermint BFT engine](https://github.com/tendermint/tendermint) is connected to the application by a socket protocol called the [Application Blockchain Interface](https://github.com/tendermint/abci) (<def value="abci">ABCI</def>). This protocol can be wrapped in any programming language, making it possible for developers to choose a language that fits their needs.

**But that is not all**. Here are the properties that make Tendermint BFT a state-of-the-art blockchain engine:

- **Public or private blockchain ready:** Tendermint BFT only handles _networking_ and _consensus_ for a blockchain, meaning that it helps nodes propagate transactions and validators agree on a set of transactions to append to the blockchain. It is the role of the _application_ layer to define how the <def value="validator-set">validator set</def> is constituted. **Developers can therefore build both public and private blockchains on top of the Tendermint BFT engine**. If the application defines that validators are elected based on how many tokens they have at stake, then the blockchain can be characterised as <def value="pos">Proof-of-Stake (PoS)</def>. If however the application defines that only a restricted set of pre-authorized entities can be validators, then the blockchain can be characterised as permissioned or private. Developers have all the freedom to customize the rules that define how the validator set of their blockchain changes.
- **High Performance:** Tendermint BFT can have a block time on the order of 1 second and handle up to thousands of transactions per second.
- **Instant finality:** A property of the Tendermint consensus algorithm is instant finality. This means that forks are never created as long as more than a third of the validators are honest (byzantine). Users can be sure their transactions are finalized as soon as a block is created (which is not the case in Proof-of-Work blockchains like Bitcoin and Ethereum).
- **Security:** Tendermint consensus is not only fault tolerant, it is also accountable. If the blockchain forks, [there is a way to determine liability](https://docs.tendermint.com/master/spec/light-client/accountability.html).

## Cosmos SDK and other application layer frameworks

<figure><img src="/images/intro/04-sdk.svg" alt="Diagram for Cosmos SDK"></figure>

Tendermint BFT reduces the development time of a blockchain from years to weeks, but building a secure ABCI-app from scratch remains a difficult task. This is why the <def value="cosmos-sdk">Cosmos SDK</def> exists.

The [Cosmos SDK](/sdk) is a generalized framework that simplifies the process of building secure blockchain applications on top of Tendermint BFT. It is based on two major principles:

- **Modularity:** The goal of the Cosmos SDK is to create an ecosystem of <def value="module">modules</def> that allows developers to easily spin up <def value="application-specific-blockchain">application-specific blockchains</def> without having to code each bit of functionality of their application from scratch. Anyone can create a module for the Cosmos SDK, and using ready built modules in your blockchain is as simple as importing them into your application. For example, the Tendermint team is building a [set of basic modules](https://github.com/cosmos/cosmos-sdk/tree/develop/x) that are needed for the <def value="cosmos-hub">Cosmos Hub</def>. These modules can be used by any developer as they build their own application. Additionally, developers can create new modules to customize their application. As the Cosmos network develops, the ecosystem of SDK modules will expand, making it increasingly easier to develop complex blockchain applications.
- **Capabilities-based security:** Capabilities constrain the security boundaries between modules, enabling developers to better reason about the composability of modules and limit the scope of malicious or unexpected interactions. For a deeper look at capabilities click [here](https://docs.cosmos.network/master/core/ocap.html).

The Cosmos SDK also comes with a set of useful developer tools for building command line interfaces (CLI), REST servers and a variety of other commonly used utility libraries.

One final remark: the Cosmos SDK, like all Cosmos tools, is designed to be modular. Today, it allows developers to build on top of Tendermint BFT. However, it can be used with any other consensus engines that implements the ABCI. As time goes by, we expect multiple SDKs to emerge, built with different architecture models and compatible with multiple consensus engines - all within a single ecosystem: the Cosmos Network.

To learn how to code applications on top of the SDK you can [check out tutorials](https://tutorials.cosmos.network).

### Ethermint

The great thing about the Cosmos SDK is that its modularity allows developers to port virtually any existing blockchain codebase already in Golang on top of it. For example, <def value="ethermint">Ethermint</def> is a project that ports the Ethereum Virtual Machine into an SDK module. Ethermint works exactly like Ethereum but also benefits from all the properties of Tendermint BFT. All the existing Ethereum tools (Truffle, Metamask, etc.) are compatible with Ethermint and you can port your smart contracts over without additional work.

**Why bother creating a blockchain with the Cosmos SDK when I can just deploy my decentralized application on top of a Virtual Machine blockchain?**

This question is justified, considering that most decentralized applications today are developed on top of Virtual Machine blockchains like Ethereum. First, it should be stated that the reason for this phenomenon is that up until now blockchains were much more difficult to develop than Smart Contracts. This is not the case anymore, thanks to the Cosmos SDK. Now, developers can easily develop entire application-specific blockchains, which have several advantages. Among others, they give more **flexibility**, **security**, **performance** and **sovereignty**. To learn more about application-specific blockchains read [this post](https://medium.com/@gautier_md/why-application-specific-blockchains-make-sense-32f2073bfb37). Of course, if you don't want to build your own blockchain, you can still make your Smart Contracts compatible with Cosmos by deploying them on [Ethermint](https://ethermint.zone/).

## Connecting Blockchains Together - IBC

Now that developers have a way to quickly build customized blockchains, let us see how to connect these blockchains together. The connection between blockchains is achieved through a protocol called [Inter-Blockchain Communication protocol](https://ibcprotocol.org) (IBC). IBC leverages the instant finality property of Tendermint consensus (although it can work with any "fast-finality" blockchain engine) to allow **heterogeneous chains to transfer value (i.e. tokens) or data to each other**.

### What are heterogeneous chains?

Essentially it comes down to two things:

- **Different layers:** Heterogeneous chains have different layers, meaning they can differ in how they implement the _networking_, _consensus_ and _application_ parts. To be compatible with IBC, a blockchain needs only follow a few requirements, the main one being that the _consensus_ layer must have fast finality. Proof-of-Work chains (like Bitcoin and Ethereum) do not fall in this category, as they have probabilistic finality.
- **Sovereignty:** Every blockchain is maintained by a set of validators whose job is to agree on the next block to commit to the blockchain. In Proof-of-Work blockchains these validators are called miners. A sovereign blockchain is a blockchain with its own validator set. In many instances it is important for blockchains to be sovereign, as validators are ultimately responsible for modifying the state. In Ethereum, applications are all run by a common set of validators. Because of this, each application only has limited sovereignty.

IBC allows heterogeneous blockchains to transfer tokens and data to each other, meaning that blockchains with different applications and validator sets are interoperable. For example, it allows public and private blockchains to transfer tokens to each other. Currently, no other blockchain framework enables this level of interoperability.

### How IBC works

The principle behind IBC is fairly simple. Let us take an example where an account on chain A wants to send 10 tokens (let us call them <def value="atom">ATOM</def>) to chain B.

#### Tracking

Continuously, chain B receives the headers of chain A, and vice versa. This allows each chain to track the validator set of the other. In essence, each chain runs a <def value="light-client">light-client</def> of the other.

<!--![How IBC Works #3](/images/intro/05-ibc-03.svg)-->

#### Bonding

When the IBC transfer is initiated, the ATOM are locked up (<def value="bonding">bonded</def>) on chain A.
![How IBC Works #1](/images/intro/05-ibc-01.svg)

#### Proof Relay

Then, a proof that the 10 ATOM are bonded is relayed from chain A to chain B.
![How IBC Works #2](/images/intro/05-ibc-02.svg)

#### Validation

The proof is verified on chain B against chain A's header and, if it is valid, then 10 ATOM-vouchers are created on chain B.
![How IBC Works #4](/images/intro/05-ibc-04.svg)

Note that the ATOM that have been created on chain B are not real ATOM, as ATOM only exist on chain A. They are a representation on B of ATOM from chain A, along with a proof that these ATOM are frozen on chain A.

A similar mechanism is used to unlock ATOM when they come back to their origin chain. For a more comprehensive description of the IBC protocol, you can look at this [specification](https://github.com/cosmos/cosmos-sdk/tree/master/docs/spec/ibc).

## Designing the "Internet of Blockchains"

<figure><img src="/images/intro/06-architecture.svg" alt="Cosmos Hub & Spoke Architecture"></figure>

IBC is a protocol that allows two heterogeneous blockchains to transfer tokens to each other. From there, how do we create a network of blockchains?

One idea is to connect each blockchain in the network with every other via direct IBC connections. The main problem with this approach is that the number of connections in the network grows quadratically with the number of blockchains. If there are 100 blockchains in the network and each needs to maintain an IBC connection with every other, that is 4950 connections. This quickly gets out of hand.

To solve this, Cosmos proposes a modular architecture with two classes of blockchain: <def value="hub">Hubs</def> and <def value="zone">Zones</def>. Zones are regular heterogenous blockchains and Hubs are blockchains specifically designed to connect Zones together. When a Zone creates an IBC connection with a Hub, it can automatically access (i.e. send to and receive from) every other Zone that is connected to it. As a result, each Zone only needs to establish a limited number of connections with a restricted set of Hubs. Hubs also prevent double spending among Zones. This means that when a Zone receives a token from a Hub, it only needs to trust the origin Zone of this token and the Hub.

The first Hub launched in the Cosmos Network is the Cosmos Hub. The Cosmos Hub is a public Proof-of-Stake blockchain whose native staking token is called the ATOM, and where <def value="tx-fees">transactions fees</def> will be payable in multiple tokens. [The launch of the Hub](/launch) also marks the launch of the Cosmos network.

## Bridging non-Tendermint chains

<figure><img src="/images/intro/07-peg.svg" alt="Peg zones bridge non-Tendermint blockchains"></figure>

So far, the architecture of Cosmos we have presented shows how Tendermint-based chains can interoperate. But Cosmos is not limited to Tendermint chains. In fact, any kind of blockchain can be connected to Cosmos.

We have two cases to distinguish: fast-finality chains and probabilistic-finality chains.

### Fast-finality chains

Blockchains that use any fast-finality _consensus_ algorithms can connect with Cosmos by adapting [IBC](#connecting-blockchains-together-ibc). For example, if Ethereum were to switch to Casper FFG (Friendly Finality Gadget), a direct connection could be established between it and the Cosmos Ecosystem by adapting IBC to work with Casper.

### Probabilistic-finality chains

For blockchains that do not have fast-finality, like Proof-of-Work chains, things get a bit trickier. For these chains we use a special kind of [proxy-chain called a Peg-Zone.](https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f)

A <def value="peg-zone">Peg-Zone</def> is a blockchain that tracks the state of another blockchain. The Peg-Zone itself has fast-finality and is therefore compatible with IBC. Its role is to establish finality for the blockchain it bridges. Let us look at the following example.

#### Example: Ethereum Peg-Zone

> We want to bridge the Proof-of-Work Ethereum blockchain to make it possible to send tokens back and forth between Ethereum and Cosmos. Because Proof-of-Work Ethereum does not have fast-finality, we need to create a Peg-Zone to act as a bridge between the two.
>
> First, the Peg-Zone needs to decide on a finality threshold for the origin chain. For example, it can consider that a given block of the origin's chain is final when 100 blocks have been added after it.
>
> Second, a contract is deployed on the main Ethereum blockchain. When users want to send tokens from Ethereum to Cosmos, they start by sending tokens to this contract. Then the contract freezes the assets and after 100 blocks, a representation of these assets is released on the Peg-Zone. A similar mechanism is used to send assets back to the Ethereum chain.

Interestingly enough, the Peg-Zone also allows users to send any token that lives on Cosmos to the Ethereum chain (the Cosmos tokens would be represented as ERC20 on the Ethereum chain). The Tendermint team is currently working on a Peg-Zone implementation for the Ethereum chain called [Peggy](https://github.com/cosmos/peggy).

Peg-Zones will need to be customized for the particular chain they bridge. Building an Ethereum Peg-Zone is relatively simple because Ethereum is account-based and has smart-contracts. However, building a Bitcoin Peg-Zone is a bit more challenging. Explaining how to build a Bitcoin-like Peg-Zone is out-of-scope for this intro but know that it is theoretically possible. If you want to learn more about Peg-Zones you can take a look at this [spec](https://github.com/cosmos/peggy/tree/master/spec).

## Solving Scalability

<figure><img src="/images/intro/08-scalability.svg" alt="Horizontal scalability with multiple blockchains"></figure>

Now that we can easily create and connect blockchains there is one final issue to tackle: Scalability. Cosmos leverages two types of scalability:

- **Vertical scalability:** This encompasses the methods for scaling the blockchain itself. By moving away from Proof-of-Work and optimizing its components, Tendermint BFT can reach thousands of transactions per-second. The bottleneck factor is the _application_ itself. For example, an application like a Virtual Machine (e.g. the Ethereum Virtual Machine) will impose a much lower limit on the transaction throughput than an application where transaction types and <def value="state-transition">state transition</def> functions are directly embedded in it (e.g. a standard Cosmos SDK application). This is one of the reasons why application-specific blockchains make sense (read about more reasons [here](https://medium.com/@gautier_md/why-application-specific-blockchains-make-sense-32f2073bfb37)).
- **Horizontal scalability:** Even if the consensus engine and the application are highly optimized, at some point the transaction throughput of a single chain inevitably hits a wall it cannot surpass. That is the limit of vertical scaling. To go beyond it, the solution is to move to multi-chain architectures. The idea is to have multiple parallel chains running the same application and operated by a common validator set, making blockchains theoretically infinitely scalable. Details about horizontal scalability are fairly complex and out-of-scope for this intro.

Cosmos will offer very good vertical scalability at launch, which will be a major improvement over current blockchain solutions in and of itself. Later, after the completion of the IBC module, horizontal scalability solutions will be implemented.

## So in the end, what is Cosmos?

<figure><img src="/images/intro/09-cosmos.svg" alt="Cosmos is the internet of blockchains"></figure>

Hopefully by now you have a clearer picture of the Cosmos project. Here is a quick recap of what Cosmos is in three concise points:

1. Cosmos makes blockchains powerful and easy to develop with Tendermint BFT and the modularity of the Cosmos SDK.
2. Cosmos enables blockchains to transfer value with each other through IBC and Peg-Zones, while letting them retain their sovereignty.
3. Cosmos allows blockchain applications to scale to millions of users through horizontal and vertical scalability solutions.

More than anything, Cosmos is not a product but an **ecosystem** built on a set of modular, adaptable and interchangeable tools. Developers are encouraged to join the effort to improve existing tools and create new ones in order to make the promise of blockchain technology a reality. These tools are the foundation needed to create the decentralized internet and global financial system of tomorrow.

### Going Further

- Read the [Cosmos whitepaper](/whitepaper)
- Start [developing on Cosmos](/tools)
