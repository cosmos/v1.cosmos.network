<template lang="pug">
.tm-card-icon: .tm-card-icon__container
  .tm-card-icon__icon: img(v-lazy="iconSrc" alt="Icon")
  .tm-card-icon__text
    .tm-card-icon__title(v-if="$slots['title'] || title")
      template(v-if='title') {{ title }}
      slot(v-else name='title')
    .tm-card-icon__subtitle(v-if="$slots['subtitle'] || subtitle")
      template(v-if='subtitle') {{ subtitle }}
      slot(v-else name='subtitle')
</template>

<script>
export default {
  name: "tm-card-icon",
  computed: {
    iconSrc() {
      return require(`../../assets/images/sdk/icon-${this.icon}.svg`)
    }
  },
  props: ["title", "subtitle", "icon"]
}
</script>

<style lang="stylus">
@require '~variables'

.tm-cards-icon
  display block

.tm-card-icon
  margin-bottom var(--pad320)

.tm-card-icon__container
  text-align center
  display flex
  flex-flow column nowrap
  align-items center
  justify-content center

.tm-card-icon__icon
  width 8rem
  height 4.5rem
  display flex
  align-items center
  justify-content center
  margin 1.75rem 0

  img
    max-width 100%
    max-height 100%
    flex 1

.tm-card-icon__text
  color var(--dark-txt)
  width 16rem

.tm-card-icon__title
  font-family var(--ff-brand)
  font-size 1.3rem
  text-transform capitalize
  color var(--secondary)
  margin-bottom 1rem

.tm-card-icon__subtitle
  font-size 0.875rem

@media screen and (min-width: 768px)
  .tm-cards-icon
    margin 0 -2.25rem -2.25rem
    display flex
    flex-flow row wrap

  .tm-card-icon
    flex 0 0 50%
    padding 1.125rem

@media screen and (min-width: 1024px)
  .tm-card-icon
    flex 0 0 33.33%

@media screen and (min-width: 1152px)
  .tm-card-icon
    flex 0 0 25%
</style>
