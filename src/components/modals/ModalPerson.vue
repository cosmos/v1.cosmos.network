<template lang="pug">
.modal-wrapper
  .modal-person
    img.avatar(:src="person.photo[0].url" alt="Avatar")
    .text
      .name {{ person.name }}
      .title {{ person.title }}
      .bio {{ person.bio }}
    .links
      a(v-if='person.email', :href="'mailto:' + person.email + '@tendermint.com'", target='_blank')
        i.material-icons mail_outline
        span.label {{ person.email }}@tendermint.com
      a(v-if='person.github', :href="'https://github.com/' + person.github", target='_blank')
        i.material-icons code
        span.label github.com/{{ person.github }}
      a(v-if='person.keybase', :href="'https://keybase.io/' + person.keybase", target='_blank')
        i.material-icons vpn_key
        span.label keybase.io/{{ person.keybase }}
      a(v-if='person.linkedin', :href="'https://www.linkedin.com/in/' + person.linkedin", target='_blank')
        i.material-icons contact_mail
        span.label {{ person.name }}
      a(v-if='person.twitter', :href="'https://twitter.com/' + person.twitter", target='_blank')
        i.material-icons question_answer
        span.label @{{ person.twitter }}
      a(v-if='person.website', :href="'http://' + person.website", target='_blank')
        i.material-icons web
        span.label {{ person.website }}
</template>

<script>
import disableScroll from "disable-scroll"
export default {
  name: "section-people",
  mounted() {
    disableScroll.on()
  },
  beforeDestroy() {
    disableScroll.off()
  },
  props: ["person"]
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.modal-wrapper
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index 100

  display flex
  align-items center
  justify-content center

  background hsla(0,0,0,0.5)
  backdrop-filter blur(0.5rem)

.modal-person
  max-width 360px
  width 100%
  background var(--app-bg)
  margin 0 0.5rem

  display flex
  align-items center
  flex-flow column
  position relative
  &:before
    display block
    position absolute
    top 0
    right 0

    width 4rem
    height 4rem
    display flex
    align-items center
    justify-content center

    content 'close'
    font-family 'Material Icons'
    font-size h3
    cursor pointer
    color var(--link)

  .avatar
    display block
    width 8rem
    margin 2rem 2rem 0
    border-radius 10rem

  .text
    text-align center
    padding 1rem 1.5rem 1.25rem

  .name
    color var(--bright)
    font-size h3
    font-family var(--ff-brand)

  .title
    font-size x
    color var(--dim)
    margin-bottom 0.75rem

  .bio
    text-align left

  .links
    width 100%
    height 3rem
    display flex
    justify-content center
    background var(--dark-bg)
    a
      flex 1

      display flex
      align-items center
      justify-content center

      color var(--link)

      &:hover
        color var(--hover)

      i.material-icons
        font-size h4
      .label
        display none

@media screen and (min-width: 360px)
  .modal-person
    margin 0 0.75rem
    .avatar
      width 9rem

@media screen and (min-width: 400px)
  .modal-person
    .avatar
      width 10rem

    .title
      margin-bottom 1.25rem

    .links a
      flex 0 0 60px
</style>
