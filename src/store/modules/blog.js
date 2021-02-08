/* global RSSParser */
import "rss-parser/dist/rss-parser.min.js"

const state = {
  posts: []
}

const mutations = {
  async initializeBlog(state) {
    const parser = new RSSParser()
    let feed = await parser.parseURL("https://feed.blog.cosmos.network")
    state.posts = feed.items
  }
}

export default { state, mutations }
