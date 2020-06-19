<template lang="pug">
  div
    .container(@click.self="$router.go(-1)")
      .window
        div.title {{value.name}}
        img.image(:src="`/profiles/${value.id}.jpg`" alt="Profile image")
        div(v-html="markdown(value.bio)")
        a.close(@click="$router.go(-1)") ╳
</template>

<style lang="stylus" scoped>
.container
  background-color rgba(0,0,0,.2)
  position fixed
  z-index 10000
  top 0
  bottom 0
  left 0
  right 0
  display flex
  justify-content center
  align-items center

.window
  background white
  width 100%
  max-width 800px
  max-height 90vh
  overflow-y scroll
  padding 20px
  border-radius 5px
  position relative
  margin 0 10px

.title
  font-weight var(--fw-bold)

.image
  max-width 200px
  margin 1em 0
  border-radius 5px

.close
  position absolute
  top 0
  right 0
  padding 1em
</style>

<script>
import MarkdownIt from "markdown-it"

export default {
  props: ["value"],
  methods: {
    markdown(value) {
      const md = new MarkdownIt({
        linkify: true,
        html: true
      })
      return md.render(value)
    }
  }
}
</script>
