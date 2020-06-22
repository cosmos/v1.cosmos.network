# [cosmos.network](https://cosmos.network)

> The website for Cosmos - Internet of Blockchains.

[![banner](public/og-image.jpg)](https://cosmos.network)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5abbcc2b-7b81-4bae-b0c0-cf66bab9e758/deploy-status)](https://app.netlify.com/sites/cosmos-network/deploys)

Live: https://cosmos.network <br>
Staging: https://cosmos-network.netlify.app

## Run this locally

1. `$ git clone https://github.com/cosmos/cosmos.network.git`
2. `$ cd cosmos.network`
3. `$ npm i`
4. `$ npm run serve`
5. View the running app in your browser at `http://localhost:8080`

## Production

Run `npm run build` and then serve the generated `./dist` directory.

## Newsletters

There is a list of newsletters published at `/newsletters`. Each item in the grid links to a static HTML page of a newsletter. To add a newsletter, locate `/public/newsletters` and create a directory named `YYYY-MM`. Inside the directory add a `index.html` file. The file should contain `<title>This is a title</title>` on a separate line, this line is used to generate a title in the grid view. Add an image `cover.jpg`, which will be used as a cover image.

Under the hood, `/pre.sh` script is executed before `serve` and `build` npm commands. The script indexes `/public/newsletters/` directory and generates a temporary `/src/newsletters.txt` with a list of all newsletters. This file is imported by a `Newsletters.vue` component to generate a grid. This file is removed by `/post.sh` script after `serve` or `build` exits and should not be commited to the repo.

## Sitemap

- [Sitemap.xml](./public/sitemap.xml) is currently being maintained manually. The sitemap is to be added when there is a new page created.
