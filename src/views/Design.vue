<template lang="pug">
.page-design
  tm-header(title="Design")
    div(slot="subtitle") Discover the united voice, tone, and look of the Cosmos brand. #[router-link(:to="{ name: 'trademark' }") View trademark]
    tm-btn(value="Visual Assets" type="link" :to="{ name: 'assets' }")
    tm-btn(value="Download Logos" type="anchor" href="https://drive.google.com/open?id=1q1b9IhlxGHBG7wRByuBISHULu5o_D3hO" color="primary" icon="file_download" target="_blank" rel="noreferrer noopener")

  tm-section
    card-design-colors

    card-design(title="Typography" visual="typography")
      div(slot="description")
        p Cosmos uses Metropolis font family for online and printed communications.
        p Until very recently, Gotham font family had been used throughout all communications, but due to licensing, we were unable to open-source our website while using Gotham. Therefore, while we make the switch to Metropolis, Gotham may still be present in some materials.
        p Metropolis is an open-source typeface available on #[a(href="https://github.com/chrismsimpson/Metropolis" target="_blank" rel="noreferrer noopener") GitHub].
      div(slot="visual")
        .typography
          div
            .typography__weight_samples
              .typography__heading_bold We have lingered long enough on the shores of the cosmic ocean.
              .typography__heading_bold_italic We are ready at last to set sail for the stars.
            .typography__weight_samples
              .typography__heading_semi We have lingered long enough on the shores of the cosmic ocean.
              .typography__heading_semi_italic We are ready at last to set sail for the stars.
            .typography__weight_samples
              .typography__body_regular We have lingered long enough on the shores of the cosmic ocean.
              .typography__body_regular_italic We are ready at last to set sail for the stars.
            .typography__weight_samples
              .typography__body_light We have lingered long enough on the shores of the cosmic ocean.
              .typography__body_light_italic We are ready at last to set sail for the stars.

    card-design(title="Logo" visual="logo")
      div(slot="description")
        p This logo should appear on all Cosmos communications in one way or another. Consistency and visibility is important. This is the preferred version of the Cosmos logo. Other acceptable versions of the logo will be presented later.
        p The graphical icon above is called the “brandmark” and the text below is called the “wordmark”. Together they create the complete “logo”.

    card-design(title="Brandmark" visual="brandmark")
      div(slot="description")
        p The Cosmos brandmark is designed after the staking token of the Cosmos Hub: the ATOM token.
        p Its visual design is based on the famous Rutherford model of the atom, showing the orbital paths of electrons around a central nucleus.
        p The geometry of the brandmark is constructed with a total of six circles and three ellipses. Starting from 0 degrees, each following ellipse is rotated by 30 degrees, resulting in a hexagonal design.

    card-design(title="Wordmark" visual="wordmark")
      div(slot="description")
        p This is the Cosmos wordmark. This wordmark should be used in almost all cases. It is preferred that the wordmark is paired with the brandmark, but if space is limited than the wordmark by itself is sufficient.
        p The wordmark is constructed from the Gotham HTF Medium typeface. It has been kerned to improve the readability of a fully capitalized wordmark. A slash has been added over the first “O” character.

    card-design(title="Logo Variations" visual="logo-variations")
      div(slot="description")
        p Here is an acceptable alternative version of the logo. Other alternatives will be added over time.
        p You can download #[a(href="https://drive.google.com/open?id=1q1b9IhlxGHBG7wRByuBISHULu5o_D3hO" target="_blank" rel="noreferrer noopener") all variations].

    card-design(title="Product Logos" visual="product-logos")
      div(slot="description")
        p Cosmos is a decentralized network, and it is constantly growing through community contributions. We have many projects under the Cosmos umbrella. Here are current working versions of these project logos.
</template>

<style lang="stylus" scoped>
.typography
  min-height 504px
  color var(--dark-txt)
  display flex
  align-items center
  padding 2rem

  &__weight_samples
    font-family var(--ff-brand)
    margin-bottom 1.5rem

  &__heading_bold
    font-weight var(--fw-bold)

  &__heading_bold_italic
    font-weight var(--fw-bold)
    font-style italic

  &__heading_semi
    font-weight var(--fw-semibold)

  &__heading_semi_italic
    font-weight var(--fw-semibold)
    font-style italic

  &__body_regular
    font-weight var(--fw-regular)

  &__body_regular_italic
    font-weight var(--fw-regular)
    font-style italic

  &__body_light
    font-weight var(--fw-light)

  &__body_light_italic
    font-weight var(--fw-light)
    font-style italic
</style>

<script>
import CardDesign from "cards/CardDesign"
import CardDesignColors from "cards/CardDesignColors"
import TmBtn from "common/TmBtn"
import TmHeader from "common/TmHeader"
import TmSection from "common/TmSection"
export default {
  name: "page-design",
  metaInfo: {
    title: "Design & Visual Identity"
  },
  components: {
    CardDesign,
    CardDesignColors,
    TmBtn,
    TmHeader,
    TmSection
  }
}
</script>
