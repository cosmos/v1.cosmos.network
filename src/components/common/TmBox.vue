<template lang="pug">
.tm-box
  .tm-box__title.h3(v-if="$slots.title"): slot(name="title")
  .tm-box__main(v-if="$slots.main"): slot(name="main")
  .tm-box__menu(v-if="$slots['menu-title'] || $slots['menu-links']")
    template: slot(name="menu-title")
    .tm-box__links(v-if="$slots['menu-links']"): slot(name="menu-links")
  .tm-box__footer(v-if="$slots.footer"): slot(name="footer")
</template>

<script>
export default {
  name: "tm-box"
}
</script>

<style lang="stylus">
.tm-boxes
  margin-bottom 1rem

.tm-box
  padding var(--pad320)
  border 2px solid transparent

  &:not(:last-child)
    margin-bottom 1rem

.tm-box--blue
  background hsl(240, 33%, 97%)
  border-color var(--primary)

.tm-box--gray
  border-color hsl(120, 33%, 90%)

.tm-box--outline
  background var(--app-fg)
  border-color hsl(240, 33%, 95%)

.tm-box--solo
  margin 0 var(--pad320) var(--pad320)

.tm-box__main:not(:last-child), .tm-box__main p:not(:last-child), .tm-box__menu:not(:last-child)
  margin-bottom 1.5rem

.tm-box__title
  display block
  margin-bottom 1rem
  font-weight var(--fw-bold)

.tm-box__title + .tm-box__title
  margin-top -1rem

.tm-box__menu a
  display block

.tm-box__footer
  padding-top 1.5rem
  border-top 2px solid var(--bc)

@media screen and (min-width: 768px)
  .tm-box--solo
    margin 0 var(--pad768) var(--pad768)

@media screen and (min-width: 1024px)
  .tm-boxes
    flex 1
    display flex
    flex-flow column nowrap

  .tm-box--primary
    flex 1
    display flex
    flex-flow column nowrap

  .tm-box__menu
    flex 1

@media screen and (min-width: 1280px)
  .tm-box--solo
    margin-left var(--pad1280)
    margin-right var(--pad1280)

  .tm-box__links
    column-count 2

@media screen and (min-width: 1920px)
  .tm-box--solo
    margin-left var(--pad1920)
    margin-right var(--pad1920)
</style>
