<template lang="pug">
.tm-definition
  a(:name="`${definition.slug}`")
  .tm-definition__title {{ definition.title }}
  .tm-definition__description(v-html="md.render(definition.description)")
</template>

<script>
import MarkdownIt from "markdown-it"
export default {
  name: "tm-definition",
  data: () => ({
    md: new MarkdownIt({
      linkify: true,
      html: true
    })
  }),
  props: ["definition"]
}
</script>

<style lang="stylus">
.tm-definition
  margin-bottom 2rem

.tm-definition__title
  font-weight var(--fw-bold)
</style>
