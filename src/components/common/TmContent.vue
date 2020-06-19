<template lang="pug">
.tm-content
  .tm-content-container: slot
</template>

<script>
export default {
  name: "tm-content-container"
}
</script>

<style lang="stylus">
.tm-content-container
  padding 0 !important
  h1
    display none

.tm-content
  hr
    border none
    border-top 1px solid var(--bc)
    background transparent
    height 0
    margin 0
    padding 0

  a
    color var(--link)
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word
    &:hover
      text-decoration underline
      color var(--hover)

  strong
    font-weight var(--fw-bold)

  em
    font-style italic

  code
    mono()
    margin-bottom 1.5rem
    background var(--app-fg)
    font-weight var(--fw-bold)
    padding 0 0.25rem
    overflow-wrap break-word
    word-wrap break-word
    -ms-word-break break-all
    word-break break-all
    word-break break-word

  pre
    margin-left -1rem
    margin-right -1rem
    overflow-x scroll
    padding 0.375rem 0.5rem
    line-height 1.125
    background var(--app-fg)
    color var(--txt)
    & + figcaption
      margin-top -1.5rem
      background var(--app-fg)
      border 1px solid var(--bc)
      border-top none
      padding 0.5rem
      color var(--txt)
      margin-bottom 1.5rem
    code
      margin-bottom 0
      400
      background var(--app-fg)
      color var(--txt)
      padding 0
  p
    &:empty
      display none

  iframe
    display block
    width 100vw
    height 56.25vw
    margin 0 -1rem 1.5rem

  img
    max-width 40rem
    margin-bottom 0

  h1, h2, h3, h4, h5,  h6
    position relative
    line-height var(--lh-heading)
    margin var(--pad320) 0

    &:first-child
      margin-top 0

  h1
    margin-top 1.5rem

  h1 + p
    color var(--dim)
    font-size 1.25rem
    margin-top -0.5rem

  h2
    margin var(--pad768) 0 var(--pad320)
    + p, + ul, + ol, + blockquote
      margin-bottom var(--pad320)
    &:first-of-type
      margin-top 0

  h3
    margin-bottom 1.5rem

  h4
    margin-bottom 0.75rem

  table
    border 1px solid var(--bc)
    border-collapse collapse
    width 100%
    th
      font-weight var(--fw-semibold)
      background var(--app-fg)
      color var(--dim)
      border 1px solid var(--bc-dim)
      padding 0.25em 0.5em

  blockquote
    border-left 0.5rem solid var(--primary-alt)
    padding-left 1.25rem
    position relative
    color var(--txt)

    & + h2
      margin-top 1.5rem

    p, ul, ol
      margin-bottom 1.5rem

      &:last-child
        margin-bottom 0


  p, hr, ul, ol, table, pre,  figcaption,  blockquote,  img,  iframe,  .ni-btn
    margin-bottom 1.5em

  p code:before, p code:after
    letter-spacing -0.375em
    content "\00a0"

  ul, ol
    padding-left 1.5em

    ul, ol
      margin-bottom 0
      padding-top 0.25em

  ul li, ol li
    margin-bottom 0.5rem

  ul
    li
      list-style square
  ol
    li
      list-style decimal

  li
    p + ol,
    p + ol
      margin-top -1.5em
      &:last-child
        margin-bottom 1.5em

  h2, h3, h4, h5, h6, p, li, code, blockquote
    max-width 44rem

@media screen and (min-width: 768px)
  .tm-content
    pre
      margin-left 0
      margin-right 0

    iframe
      margin-left 0
      margin-right 0
      max-width 44rem
      max-height 24.75rem

@media screen and (min-width: 1152px)
  .tm-content
    figure
      width 50%
      float right
</style>
