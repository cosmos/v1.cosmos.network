<template lang="pug">
.tm-card-tags(v-if="tags")
  .tm-card-tag(v-for="tag in tags") {{ tag }}
</template>

<script>
export default {
  name: "tm-card-tags",
  props: ["tags"]
}
</script>

<style lang="stylus">
.tm-card-tags
  margin-top 1rem

.tm-card-tag
  display inline-block
  background #EAEBF4
  font-size 0.875rem
  line-height 1.5rem
  padding 0 0.5rem
  border-radius 0.25rem

.tm-card-tag + .tm-card-tag
  margin-left 0.5rem
</style>
