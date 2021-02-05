<template lang="pug">
.tm-header
  .tm-header__container
    .tm-header__text
      .tm-header__suptitle(v-if="$slots['suptitle'] || suptitle")
        template(v-if='suptitle') {{ suptitle }}
        slot(v-else name='suptitle')
      .tm-header__project-title(v-if="$slots['project-title'] || projectTitle")
        template(v-if='projectTitle') {{ projectTitle }}
        slot(v-else name='project-title')
      .tm-header__title.h1(v-if="$slots['title'] || title")
        template(v-if='title') {{ title }}
        slot(v-else name='title')
      .tm-header__subtitle(v-if="$slots['subtitle'] || subtitle")
        template(v-if='subtitle') {{ subtitle }}
        slot(v-else name='subtitle')
      .tm-header__tabs(v-if="$slots['tabs'] || tabs")
        template(v-if='tabs') {{ tabs }}
        slot(v-else name='tabs')
    .tm-header__menu
      slot
</template>

<script>
export default {
  name: "tm-header",
  props: ["suptitle", "title", "subtitle", "tabs", "project-title"]
}
</script>

<style lang="stylus">
.tm-header
  background var(--app-fg)

.tm-header__container
  padding var(--pad320)

.tm-header__text + .tm-header__menu
  margin-top 1.5rem

.tm-header__suptitle
  margin-bottom 1rem
  color var(--primary-alt)
  font-weight var(--fw-bold)
  font-size 1rem
  line-height 1.25rem
  letter-spacing var(--tracking-2-wide)
  text-transform uppercase

.tm-header__title
  margin-bottom 1rem

.tm-header__subtitle
  color var(--dim)

.tm-header__tabs
  margin-top 2rem

.tm-header__project-title
  display flex
  align-items center
  font-family var(--ff-brand)
  font-weight var(--fw-semibold)
  font-size 1.125rem
  line-height 1.25rem
  letter-spacing 0.25rem
  text-transform uppercase
  margin-bottom 1.25rem
  color var(--txt)
  &:before
    content ''
    background-image url('~assets/images/site/cosmos-wordmark-black.svg')
    background-size 111px 20px
    width 111px
    height 1.25rem
    display inline-block
    margin-right 0.75rem

.tm-header__menu
  margin -0.25rem
  .tm-btn
    margin 0.25rem

.tm-header__menu:empty
  display none

@media screen and (min-width: 768px)
  .tm-header__container
    padding-top var(--pad768)
    padding-left var(--pad768)
    padding-right var(--pad768)

  .tm-header__project-title
    margin-top -2.5rem

@media screen and (min-width 1024px)
  .tm-header__container
    display flex
  .tm-header__text
    flex 2
  .tm-header__menu
    flex 1
    margin-top 0
    display flex
    align-items center
    justify-content flex-end

  .tm-header__text + .tm-header__menu
    margin-top 0

@media screen and (min-width: 1280px)
  .tm-header__container
    padding-left var(--pad1280)
    padding-right var(--pad1280)

@media screen and (min-width: 1920px)
  .tm-header__container
    padding-left var(--pad1920)
    padding-right var(--pad1920)
</style>
