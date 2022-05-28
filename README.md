# [v1.cosmos.network](https://v1.cosmos.network)

> The website for Cosmos - Internet of Blockchains.

[![banner](public/og-image.jpg)](https://v1.cosmos.network)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5abbcc2b-7b81-4bae-b0c0-cf66bab9e758/deploy-status)](https://app.netlify.com/sites/v1-cosmos-network/deploys)

## Run this locally

1. `$ git clone https://github.com/cosmos/v1.cosmos.network.git`
2. `$ cd v1.cosmos.network`
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

## Airtable integration

The site is using a number of [Airtables][1] to populate various views, in lieu of a [CMS][7]. Some of the Airtables support Markdown (M), some only plain text (T).   
Changes to Airtables take effect immediately on the live site.  
A change is composed of  
* adding/deleting a row, and/or
* (un)marking the row as `Active`. 

The Airtables are:  
* [Code with Us][2]. (M) See uses of [cwu.js](./src/store/modules/cwu.js)  
* [Community][3]. (T) See uses of [community.js](./src/store/modules/community.js)
* [Glossary][4]. (M) See uses of [glossary.js](./src/store/modules/glossary.js)
* [Media][5]. (T) See uses of [media.js](./src/store/modules/media.js)
* [Roadmap][6]. (T) See uses of [roadmap.js](./src/store/modules/roadmap.js)


  [1]: https://airtable.com/
  [2]: https://airtable.com/appGq4J4B7aGj2d3P
  [3]: https://airtable.com/app6cmf6dU89OHtUP
  [4]: https://airtable.com/appNu0Ye9QMY89sCh
  [5]: https://airtable.com/apphVC4IpCTi0JBCl
  [6]: https://airtable.com/appk7A90P9mH7LFnl
  [7]: https://en.wikipedia.org/wiki/Content_management_system