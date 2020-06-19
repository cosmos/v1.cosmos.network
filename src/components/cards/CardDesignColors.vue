<template lang="pug">
card-design.card-color-swatches(title="Colors")
  div(slot="description")
    p These are all of the core brand colors we use for Cosmos projects. They are labeled and displayed with hex color values.
  div(slot="visual")
    .color-swatches
      .swatch(v-for="color in colors" :id="`#color-${color.id}`" :key="color.id")
        .swatch-bgs(v-if="color.type === 'alpha'")
          .swatch-bg.swatch-bg--fg
          .swatch-bg.swatch-bg--bg
          .swatch-bg.swatch-bg--nav
          .swatch__sample(:style="`background: ${color.color}`")
        .swatch__bar(v-else :style="`background: ${color.color}`")
        .swatch__label
          .swatch__label-title {{ color.title }}
          .swatch__label-hex {{ color.color }}
</template>

<script>
import CardDesign from "cards/CardDesign"
export default {
  name: "card-color-swatches",
  metaInfo: { title: "Visual Identity" },
  components: {
    CardDesign
  },
  data: () => ({
    colors: [
      {
        id: "tertiary",
        title: "Tertiary",
        color: getComputedStyle(document.body).getPropertyValue("--tertiary")
      },
      {
        id: "secondary",
        title: "Secondary",
        color: getComputedStyle(document.body).getPropertyValue("--secondary")
      },
      {
        id: "primary",
        title: "Primary",
        color: getComputedStyle(document.body).getPropertyValue("--primary")
      },
      {
        id: "hover",
        title: "Hover",
        color: getComputedStyle(document.body).getPropertyValue("--hover")
      },
      {
        id: "link",
        title: "Link",
        color: getComputedStyle(document.body).getPropertyValue("--link")
      },
      {
        id: "text-bright",
        title: "Text (Bright)",
        color: getComputedStyle(document.body).getPropertyValue("--bright")
      },
      {
        id: "text-default",
        title: "Text (Default)",
        type: "alpha",
        color: getComputedStyle(document.body).getPropertyValue("--txt")
      },
      {
        id: "text-dim",
        title: "Text (Dim)",
        type: "alpha",
        color: getComputedStyle(document.body).getPropertyValue("--dim")
      },
      {
        id: "border-default",
        title: "Border",
        type: "alpha",
        color: getComputedStyle(document.body).getPropertyValue("--bc")
      },
      {
        id: "border-dim",
        title: "Border (Dim)",
        type: "alpha",
        color: getComputedStyle(document.body).getPropertyValue("--bc-dim")
      },
      {
        id: "foreground",
        title: "Foreground",
        color: getComputedStyle(document.body).getPropertyValue("--app-fg")
      },
      {
        id: "background",
        title: "Background",
        color: getComputedStyle(document.body).getPropertyValue("--app-bg")
      },
      {
        id: "navigation",
        title: "Navigation",
        color: getComputedStyle(document.body).getPropertyValue("--dark-nav")
      }
    ]
  })
}
</script>

<style lang="stylus">
@import '~variables'

.color-swatches
  background var(--app-bg)

.swatch
  height 2rem + 0.1rem
  display flex
  margin-bottom 1rem
  &:last-child
    margin-bottom 0

.swatch__label
  font-size sm
  line-height var(--lh-heading)
  padding-left 0.5rem
  width 6rem
  display flex
  flex-flow column
  justify-content center

.swatch__label-title
  font-weight var(--fw-bold)

.swatch__label-hex
  color var(--dim)

.swatch__bar
  flex 1

.swatch-bgs
  flex 1
  display flex
  position relative

.swatch-bg
  flex 1
.swatch-bg--fg
  background var(--app-fg)
.swatch-bg--bg
  background var(--app-bg)
.swatch-bg--nav
  background var(--dark-bg)

.swatch__sample
  position absolute
  top 0
  left 0
  width 100%
  height 100%

@media screen and (min-width: 768px)
  .swatch
    height 3rem
</style>
