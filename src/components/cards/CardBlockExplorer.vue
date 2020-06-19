<template lang="pug">
a.card-block-explorer(target="_blank" rel="noreferrer noopener" :href="href")
  .card-block-explorer__title {{ title }}
  .card-block-explorer__subtitle {{ subtitle }}
</template>

<script>
export default {
  name: "card-block-explorer",
  props: ["title", "subtitle", "href"]
}
</script>

<style lang="stylus">

.card-block-explorer
  display block
  border-top 1px solid var(--bc)
  display flex
  align-items center
  justify-content space-between
  height 3rem

  &:hover
    .card-block-explorer__title
      color var(--hover)

.card-block-explorer__title
  font-weight var(--fw-bold)
  line-height var(--lh-heading)
  color var(--link)

.card-block-explorer__subtitle
  font-size 0.75rem
  color var(--dim)
</style>
