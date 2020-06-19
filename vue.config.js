const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

const url = "https://cosmos.network"

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Cosmos Network - Internet of Blockchains",
      description:
        "The interoperable, scalable blockchain network. Built for developers.",
      image: `${url}/og-image.jpg`
    },
    goz: {
      entry: "src/main.js",
      filename: "goz/index.html",
      title: "Game of Zones - Cosmos Network",
      description:
        "Compete to win 100,000 ATOMs by building and running Cosmos Zones.",
      image: `${url}/images/og/goz.jpg`
    },
    ibc: {
      entry: "src/main.js",
      filename: "ibc/index.html",
      title: "Inter-Blockchain Communication - Cosmos Network",
      description:
        "The interoperability protocol connecting the global economy to blockchain technology.",
      image: `${url}/images/og/ibc.jpg`
    }
  },
  chainWebpack: config => {
    config.resolve.set("symlinks", false)
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("images", resolve("src/assets/images"))
      .set("content", resolve("content"))
      .set("comp", resolve("src/components"))
      .set("scripts", resolve("src/scripts"))
      .set("variables", resolve("src/styles/variables.styl"))
      .set("buttons", resolve("src/components/buttons"))
      .set("cards", resolve("src/components/cards"))
      .set("common", resolve("src/components/common"))
      .set("forms", resolve("src/components/forms"))
      .set("modals", resolve("src/components/modals"))
      .set("navigation", resolve("src/components/navigation"))
      .set("pages", resolve("src/components/pages"))
      .set("sections", resolve("src/components/sections"))
    config.module
      .rule("pdf")
      .test(/\.pdf/)
      .use("file-loader")
      .loader("file-loader")
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .tap(() => ({
        raw: true,
        preset: "default",
        html: true,
        typographer: true,
        linkify: true,
        use: [
          require("markdown-it-anchor"),
          [
            require("markdown-it-table-of-contents"),
            {
              includeLevel: [2, 3, 4, 5],
              containerClass: "minimal-toc"
            }
          ]
        ]
      }))
  }
}
