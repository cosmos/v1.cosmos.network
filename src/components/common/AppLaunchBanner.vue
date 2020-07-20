<template lang="pug">
div
  a(href="https://stargate.cosmos.network" target="_blank" rel="noreferrer noopener").launch-banner
    .launch-banner__title Calling all Cosmonauts! Prepare for #[strong Stargate testnet], coming soon!
</template>

<style lang="stylus">
.launch-banner
  background linear-gradient(90deg,rgb(35, 38, 82),rgba(105, 68, 183, 0.3))
</style>

<style lang="stylus" scoped>
@import '~variables'

.launch-banner
  width 100%
  color var(--dark-txt)
  position absolute
  top 4rem
  left 0
  padding 0.75rem var(--pad320)
  display flex
  justify-content center
  align-items center
  &:hover
    color var(--dark-txt)

.launch-banner__title
  line-height 1.5rem
  font-family var(--ff-brand)
  font-weight var(--fw-regular)
  strong
    font-weight var(--fw-semibold)
    color #fff
  &:after
    font-family 'Material Icons'
    content '\e5c8'
    padding-left 0.3rem
    vertical-align bottom
    font-size 1.1em

@media screen and (min-width:768px)
  .launch-banner
    padding-top 1.25rem
    padding-bottom 1.25rem
    padding-left var(--pad768)
    padding-right var(--pad768)

@media screen and (min-width:1280px)
  .launch-banner
    padding-left var(--pad1280)
    padding-right var(--pad1280)

@media screen and (min-width:1920px)
  .launch-banner
    padding-left var(--pad1920)
    padding-right var(--pad1920)

@media screen and (max-width: 414px)
  .launch-banner__title
    font-size 0.8125rem
    line-height 1rem
</style>
