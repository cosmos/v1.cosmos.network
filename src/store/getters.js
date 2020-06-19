export const assets = state => state.assets
export const blog = state => state.blog
export const community = state => state.community
export const email = state => state.email
export const events = state => state.community.events
export const glossary = state => state.glossary
export const launch = state => state.launch
export const links = state => state.links
export const media = state => state.media
export const modals = state => state.modals
export const people = state => state.people
export const roadmap = state => state.roadmap
export const urls = state => state.urls
export const frameworks = state => state.frameworks
export const resources = state => state.resources
export const social = state => state.social
export const visualizers = state => state.visualizers
export const workshops = state => state.workshops
export const meetup = state => state.meetup
export const liveness = state => state.liveness

// toc
export const toc = state => state.toc
export const introElementsVisible = state => state.toc.intro.elementsVisible
export const introTocVisible = state => state.toc.intro.tocVisible
export const whitepaperElementsVisible = state =>
  state.toc.whitepaper.elementsVisible
export const whitepaperTocVisible = state => state.toc.whitepaper.tocVisible
