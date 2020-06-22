# Intro - Index

## Building an "Internet of Blockchains"

### Purpose of Cosmos

Cosmos is a network of blockchains whose purpose is to solve long-standing problems in cryptocurrency and blockchain communities. The end goal is to allow many sovereign and easy-to-develop blockchains to scale and interoperate with each other, creating an Internet of Blockchains.

<iframe src="https://player.vimeo.com/video/183530279?title=0&byline=0&portrait=0" width="1024" height="576" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Cosmos Architecture

The Cosmos network consists of many independent, parallel blockchains, called zones, each powered by classical Byzantine fault-tolerant (BFT) consensus protocols like [Tendermint](https://tendermint.com) (already used by platforms like [Hyperledger's Burrow](https://github.com/hyperledger/burrow)). Some zones act as hubs with respect to other zones, allowing many zones to interoperate through a shared hub. The architecture is a more general application of the Bitcoin sidechains concept, using classic BFT and Proof-of-Stake algorithms, instead of Proof-of-Work.

## Interoperable

<div class="image"><img src="/images/diagrams/ex_dist_exchange.png"></div>

Cosmos can interoperate with multiple other applications and cryptocurrencies, something other blockchains can't do well. By creating a new zone, you can plug any blockchain system into the Cosmos hub and pass tokens back and forth between those zones, without the need for an intermediary.

For example, if you wanted to trade bitcoins for ether today, you would have to do so on a centralized exchange. The problem is, many of our exchanges today are plagued by hacks, theft, and cons. Two prime examples are what happened at [Mt. Gox](https://www.thedailybeast.com/behind-the-biggest-bitcoin-heist-in-history-inside-the-implosion-of-mt-gox) and more recently [Bitfinex](https://www.reuters.com/article/us-bitfinex-hacked-hongkong-idUSKCN10E0KP).

## Scalable

<div class="image"><img src="/images/diagrams/ex_evm_sharding.png"></div>

Scaling is another open issue for blockchains. Both Ethereum and Bitcoin support only a fraction of the transactions seen daily on payment networks like Visa or Mastercard. In contrast, Tendermint and IBC allow blockchains in Cosmos to scale out indefinitely. Zones built on top of Tendermint can handle up to thousands of transactions per second by themselves. And even if transaction speed slows down on a Zone because too many people are using it, another identical Zone can be added to the Hub and half of the users directed to it, thereby doubling transaction capacity. Meanwhile, the Cosmos Hub ensure that Zones connected to it remain in sync.

## Developer Friendly

<div class="image"><img src="/images/diagrams/ex_evm_upgrading.png"></div>

Cosmos was designed with developers in mind. It comes with a powerful toolkit based on Tendermint that enables you to easily build decentralized applications. If your application requires sovereignty and flexibility, you can deploy your own blockchain without having to deal with the complicated networking and consensus parts of the software--thanks to Tendermint and its Application-Blockchain Interface (ABCI). If your application doesn't need its own chain and validator set, you can deploy it on Ethermint, which allows you to do everything Ethereum does--but with far greater performance. Finally, if you want to retain full privacy and control over your application, Tendermint enables you to deploy private blockchains. You can learn more in our [developer](/tools) page.

## Decentralized

<div class="image"><img src="/images/diagrams/ex_network.png"></div>

One of the great tragedies of cryptocurrencies today has been their failure to interoperate with existing systems — and each other. Cosmos offers a way to link them together, but without creating a new centralized clearinghouse or exchange.

Cosmos is built on principles of cryptography, sound economics, consensus theory, transparency, and accountability to serve as a new foundation for our future financial systems.

You can use Cosmos as a testing ground for a new cryptocurrency design, an upgrade to an existing cryptocurrency, as a means for decentralized exchange, or as a platform for scalable smart contracts.

Cosmos is not just a single distributed ledger, and the Cosmos hub isn't a walled garden or the center of its universe — anyone can use this protocol to create their own hub to compete with Cosmos in a free market of blockchains

The only question is, what will you build on Cosmos?
