<template lang="pug">
.tm-card-issue
  .tm-card-issue__container.tm-card-issue__container--problem
    .tm-card-issue__problem-title(v-if="$slots['problem-title']")
      slot(name='problem-title')
    .tm-card-issue__icon(v-if="icon"): img(v-lazy="iconSrc" alt="Icon")
    .tm-card-issue__subtitle(v-if="$slots['problem-subtitle']")
      slot(name='problem-subtitle')
  .tm-card-issue__arrow
    img(src="~assets/images/home/icon-arrow-down.svg" alt="Arrow down icon")
  .tm-card-issue__container.tm-card-issue__container--solution
    .tm-card-issue__solution-title(v-if="$slots['solution-title']")
      slot(name='solution-title')
    .tm-card-issue__subtitle(v-if="$slots['solution-subtitle']")
      slot(name='solution-subtitle')
</template>

<script>
export default {
  name: "tm-card-issue",
  computed: {
    iconSrc() {
      return require(`../../assets/images/home/icon-${this.icon}.svg`)
    }
  },
  props: ["icon"]
}
</script>

<style lang="stylus">
@import '~variables'

/* entire container, keeps perspective */
.tm-card-issue
  margin 1.125rem
  width 18rem
  text-align center

.tm-card-issue__container
  display flex
  flex-flow column nowrap
  align-items center
  padding var(--pad320)

.tm-card-issue__container--problem
  background var(--app-fg)

.tm-card-issue__container--solution
  border 2px solid hsl(240, 33%, 95%)

.tm-card-issue__problem-title
  font-family var(--ff-brand)
  font-weight var(--fw-semibold)
  font-size 1.5rem
  line-height 4rem
  letter-spacing var(--tracking-0)
  width 100%

.tm-card-issue__icon
  height 12rem
  display flex
  align-items center

.tm-card-issue__arrow
  display flex
  justify-content center
  padding 0.75rem 0

  img
    display block

.tm-card-issue__solution-title, .tm-card-issue__subtitle
  font-size 0.9735rem

.tm-card-issue__subtitle
  max-width 22rem

.tm-card-issue__solution-title
  margin-bottom 0.75rem
  font-weight var(--fw-bold)

/* wrapper for multiple flip cards */
.tm-cards-issue
  display flex
  flex-flow column nowrap
  align-items center
  margin-bottom var(--pad320)

@media screen and (min-width: 768px)
  .tm-cards-issue
    flex-flow row wrap
    margin-right -2.25rem
    margin-left -2.25rem
    justify-content space-between

  .tm-card-issue
    margin-left auto
    margin-right auto
    min-width 18rem
    width 25vw

@media screen and (min-width: 1280px)
  .tm-cards-issue
    margin-top var(--pad768)
</style>
