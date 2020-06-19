<template lang="pug">
  #supernova
    .sn__hero
      .container.container__narrow
        img(src="/images/supernova/sn-wordmark-color.svg").sn__wordmark
        .sn__heading
          img(src="/images/supernova/dust.svg").sn__heading__image
          .sn__title Join the #[span.highlight Supernova] experiment
        .sn__subtitle Coming Spring 2020
        a.sn__jumplink(href="#name" @click="setFocus()")
          | &#8595;
    .sn__sheet
      form(method="POST" action="https://foud.maillist-manage.com/weboptin.zc" ref="form")
        .sn__form
          .container.container__narrow
            .sn__form__item
              label(for="name").sn__form__label You
              .sn__form__input
                input(v-model="form.FIRSTNAME" type="text" placeholder="Your full name" ref="name").sn__form__input__input#name
            //- .sn__form__item
            //-   .sn__form__label Last name
            //-   .sn__form__input
            //-     input(v-model="form.LASTNAME" type="text").sn__form__input__input
            .sn__form__item
              label(for="email").sn__form__label Email
              .sn__form__input
                input(v-model="form.CONTACT_EMAIL" type="email" placeholder="Your email address" required).sn__form__input__input#email
            //- .sn__form__item
            //-   .sn__form__label City
            //-   .sn__form__input
            //-     input(v-model="city").sn__form__input__input
            .sn__form__item
              label(for="country").sn__form__label Country
              .sn__form__input
                input(v-model="form.COUNTRY" required).sn__form__input__input#country
            //- .sn__form__item
            //-   .sn__form__label Twitter
            //-   .sn__form__input
            //-     input.sn__form__input__input
            //- .sn__form__item
            //-   .sn__form__label Github
            //-   .sn__form__input
            //-     input.sn__form__input__input
        fieldset
          .container.container__narrow
            legend(for="interests").sn__legend.sn__form__label I want to&hellip;
          .container.container__wide
            .sn__buttons.container__fluid#interests
              .sn__buttons__item(:class="{'sn__buttons__item__selected': supernova}" @click="supernova = !supernova" @keyup.space.prevent="supernova = !supernova" tabindex="0")
                img(src="/images/supernova/dust-hand.svg").sn__buttons__item__image
                .sn__buttons__item__title Lockup tokens on Supernova
                .sn__buttons__item__desc You'll be notified when the initial lockdrop period begins.
              .sn__buttons__item(:class="{'sn__buttons__item__selected': stardust}" @click="stardust = !stardust" @keyup.space.prevent="stardust = !stardust" tabindex="0")
                img(src="/images/supernova/stardust-broadcast.svg").sn__buttons__item__image
                .sn__buttons__item__title Get on Stardust Live
                .sn__buttons__item__desc You'll be notified when Stardust Live is open for applications.
        .container.container__narrow
          .sn__submit
            button(@click.prevent="submit" :class="{'sn__submit__button__special' : supernova && stardust, 'sn__submit__button__disabled' : !supernova && !stardust}").sn__submit__button
              span(v-if="supernova && stardust") Make me a star!
              span(v-else-if="stardust") ✨ Turn me into stardust!
              span(v-else) ✨ Sprinkle me with DU$T
      footer.container.container__narrow.sn__footer
        img(src="/images/supernova/sn-lettermark-color.svg").sn__lettermark
        .sn__footer__footnote
          span
            | Built by #[a(href="https://cosmos.network/") Cosmos] &amp; #[a(href="https://commonwealth.im/") Commonwealth Labs]
          span.sn__footer__dot
            | &middot;
          span
            | &copy; 2019 Supernova
</template>

<style lang="stylus">

:root
  --sn-primary #B6AAFF
  --sn-primary-dark #3F3483
  --sn-secondary #FFA78B
  --sn-tertiary #96FCBF
  --sn-black #131313
  --sn-near-black #222222
  --sn-gray #888888
  --sn-silver #B1B1B1
  --sn-white #FFFFFF
</style>

<style lang="stylus" scoped>

sn-sans = 'Roboto Condensed', -apple-system, BlinkMacSystemFont, sans-serif
sn-primary = #B6AAFF
sn-primary-dark = #3F3483
sn-secondary = #FFA78B
sn-tertiary = #96FCBF
sn-black = #131313
sn-near-black = #222222
sn-gray = #888888
sn-silver = #B1B1B1
sn-white = #FFFFFF

#supernova
  color sn-white
  background sn-black

  &,
  input,
  button
    font-family sn-sans

.container
  width 100%
  margin 0 auto
  padding 0 3rem

  &__fluid
    max-width none

  &__narrow
    max-width 38rem

  &__wide
    max-width 60rem

.sn

  &__hero
    position fixed
    background linear-gradient(var(--sn-near-black), var(--sn-black))
    width 100%
    max-width 50vw
    height 100vh
    padding 3rem 0
    top 0
    display flex
    text-align center

    .container
      display flex
      flex-direction column
      justify-content space-between
      align-items center

  &__jumplink
    display none
    font-size 3rem
    line-height 1
    width 6rem
    margin-top 1rem
    color var(--sn-primary)
    transition transform .2s ease-out, opacity .3s ease-out

    &:hover,
    &:focus
      color var(--sn-white)
      transform translateY(2px)

    &:active
      opacity .7
      transition-duration 0s

  &__wordmark
    display block
    margin 0 auto

  &__heading
    margin 4rem 0 6rem
    position relative

  &__heading__image
    position absolute
    top 50%
    margin-top -9rem
    right -13%

  &__title
    position relative
    font-style italic
    font-weight var(--fw-semibold)
    font-size 3rem
    line-height 3.5rem
    letter-spacing 0.08em
    text-transform uppercase

    .highlight
      color var(--sn-secondary)

  &__subtitle
    font-weight 300
    font-size 1.125rem
    line-height 1.75rem
    letter-spacing 0.02em
    color var(--sn-silver)

  &__sheet
    position relative
    width 100%
    padding 5rem 0 3rem
    max-width 50vw
    margin-left auto

  &__form
    margin-bottom 3rem

    &__item
      margin-top 1.5rem

    &__label
      font-style italic
      font-weight var(--fw-semibold)
      font-size .875rem
      line-height 1.25rem
      letter-spacing 0.25em
      text-transform uppercase
      color var(--sn-silver)

    &__label + &__input
      margin-top .75rem

    &__input

      &__input
        appearance none
        border 1px solid transparent
        height 3.5rem
        padding 1rem 1.25rem
        font-size 1.125rem
        font-weight 300
        line-height 1.5rem
        border-radius .5rem
        background rgba(sn-near-black, .6)
        width 100%
        transition border .2s ease-out, background .2s ease-out
        outline none
        color white

        &::placeholder
          color rgba(sn-silver, .8)
          transition color .2s ease-out

        &:hover
          background var(--sn-near-black)
          &::placeholder
            color var(--sn-silver)

        &:focus
          border-color var(--sn-tertiary)
          background var(--sn-black)
          &::placeholder
            color rgba(sn-primary, .8)

  &__legend
    margin-bottom .5rem

  &__buttons
    display grid
    grid-template-columns repeat(auto-fit, minmax(15rem, 1fr))
    justify-items center
    gap 1rem

    &__item
      text-align center
      margin-top 2rem
      margin-bottom 1rem
      padding 0 2rem 2rem
      border-radius .5rem
      background rgba(sn-near-black, .6)
      border 2px solid transparent
      outline none
      cursor pointer
      user-select none
      transform-origin bottom center
      transition border .2s ease-out, background .2s ease-out, transform .3s ease-out, opacity .4s ease-out

      &:hover
        background var(--sn-near-black)
        box-shadow 0 .25rem 1.25rem rgba(black, .3)

      &:focus
        background var(--sn-near-black)
        border-color var(--sn-tertiary)

      &__selected
        &,
        &:hover
          border-color var(--sn-secondary)
        &,
        &:hover,
        &:focus
          background-color var(--sn-primary-dark)

      &:active
        transform scale(.98)
        opacity .7
        transition-duration 0s

      &__image
        margin -2rem auto 0
        display block
        transform-origin bottom center
        transition transform .4s cubic-bezier(0.175, 0.885, 0.28, 1.31)

      &:hover &__image
        transform translateY(-4px) rotate(2deg) scale(1.05)

      &__title
        font-style italic
        font-weight bold
        font-size 1.25rem
        line-height 1.5rem
        letter-spacing 0.08em
        text-transform uppercase
        margin-top 1.5rem
        transform-origin bottom left
        transition transform .4s cubic-bezier(0.175, 0.885, 0.28, 1.31)

      &:hover &__title
        transform translateY(2px)

      &__desc
        font-weight 300
        font-size 1.125rem
        line-height 1.5rem
        letter-spacing 0.02em
        margin-top .75rem
        transform-origin bottom left
        transition transform .4s cubic-bezier(0.175, 0.885, 0.28, 1.31)

      &:hover &__desc
        transform translateY(3px)

  &__submit
    display flex
    justify-content center
    margin-top 2.5rem
    margin-bottom 4rem

    &__button
      background transparent
      border 1px solid var(--sn-primary)
      display block
      width 100%
      color var(--sn-tertiary)
      font-style italic
      font-weight bold
      font-size 1.25rem
      line-height 1.5rem
      letter-spacing 0.05em
      text-transform uppercase
      text-align center
      padding 1rem 1.25rem
      border-radius .5rem
      user-select none
      cursor pointer
      outline none
      transform-origin bottom center
      transition border .2s ease-out, background .2s ease-out, color .2s ease-out, transform .3s ease-out, opacity .4s ease-out

      &:focus,
      &:hover
        color var(--sn-black)
        border-color transparent
        background var(--sn-tertiary)

      &__special
        color var(--sn-black)
        border-color transparent

        &,
        &:hover,
        &:focus
          background linear-gradient(205deg, var(--sn-primary) 0%, var(--sn-secondary) 50%, var(--sn-tertiary) 100%)

      &__disabled
        &,
        &:hover,
        &:focus
          background-color transparent
          border-color var(--sn-silver)
          color var(--sn-silver)

      &:focus
        border-color var(--sn-tertiary)

      &:active
        transform scale(.98)
        opacity .7
        transition-duration 0s

  &__footer
    margin-top 5rem
    text-align center
    &__footnote
      margin-top 1.5rem
      font-weight 300
      font-size 1rem
      line-height 1.5rem
      text-align center
      letter-spacing 0.02em
      color var(--sn-gray)

      a
        color var(--sn-primary)

        &:hover,
        &:focus
          color var(--sn-tertiary)

    &__dot
      margin .5em

@media screen and (max-width: 800px)
  .container
    padding 0 1.25rem

  .sn

    &__hero
      position relative
      height auto
      max-width none
      padding 1.5rem 0

    &__wordmark
      height 5rem

    &__heading
      margin 6rem 0 4rem

      &__image
        height 15rem
        margin-top -8rem
        right 0

    &__title
      font-size 2.5rem
      line-height 3rem

    &__jumplink
      display block

    &__sheet
      max-width none
      margin 0 auto
      padding-top 1rem

    &__form
      margin-bottom 2rem

    &__buttons
      &__item
        &__title
          font-size 1.125rem
        &__desc
          font-size 1rem
</style>

<script>
import axios from "axios"
import querystring from "querystring"

export default {
  data: function() {
    return {
      form: {
        COUNTRY: null,
        CONTACT_EMAIL: null,
        FIRST_NAME: null,
        LAST_NAME: null
      },
      supernova: null,
      stardust: null
    }
  },
  created() {
    this.$emit("header", false)
    document.querySelector("body").style.paddingTop = "initial"
    axios.get("https://ip-api.com/json").then(({ data }) => {
      this.form.COUNTRY = data.country
    })
  },
  methods: {
    async submit() {
      if (!this.form.CONTACT_EMAIL) return
      const url = "https://foud.maillist-manage.com/weboptin.zc"
      const data = {
        SIGNUP_SUBMIT_BUTTON: "Sign up now",
        zc_trackCode: "ZCFORMVIEW",
        submitType: "optinCustomView",
        emailReportId: "",
        zx: "129a50c11",
        zcvers: "3.0",
        oldListIds: "",
        mode: "OptinCreateView",
        zctd: "",
        scriptless: "yes"
      }
      const supernova = {
        lD: "16352f8832812b2a",
        zcld: "16352f8832812b2a",
        zc_formIx: "4ef47fbb86ab66683a40a478995d5faf2198d94af69721b2"
      }
      const stardust = {
        lD: "16352f8832812b57",
        zcld: "16352f8832812b57",
        zc_formIx: "4ef47fbb86ab6668e24e8fe872d593cbaa7d21654ae4a106"
      }

      async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: querystring.stringify(data)
        })
        return await response.json()
      }

      if (this.supernova) {
        postData(url, { ...this.form, ...data, ...supernova })
      }
      if (this.stardust) {
        postData(url, { ...this.form, ...data, ...stardust })
      }
      if (this.supernova || this.stardust) {
        window.alert("You have successfully subscribed! Check your mail!")
      }
    },
    setFocus() {
      this.$refs.name.focus()
    }
  }
}
</script>
