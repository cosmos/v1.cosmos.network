<template>
  <div class="toc-padding"><slot></slot></div>
</template>

<script>
export default {
  name: "toc-padding"
}
</script>

<style lang="stylus">
.toc-padding
  padding var(--pad320)
  .tm-content-container
    font-size 0.875rem

@media screen and (min-width: 360px)
  .toc-padding
    .tm-content-container
      font-size 0.9375rem

@media screen and (min-width: 414px)
  .toc-padding
    .tm-content-container
      font-size 1rem

@media screen and (min-width: 768px)
  .toc-padding
    padding var(--pad768)
    .tm-content-container
      font-size 1.125rem

@media screen and (min-width: 1024px)
  .toc-padding.toc-visible
    padding-left calc(var(--pad768) + var(--width-side) + var(--pad320))

@media screen and (min-width: 1280px)
  .toc-padding
    padding-left var(--pad1280)
    padding-right var(--pad1280)

  .toc-padding.toc-visible
    padding-left calc(var(--pad1280) + var(--width-side) + var(--pad768))

@media screen and (min-width: 1920px)
  .toc-padding
    padding-left var(--pad1920)
    padding-right var(--pad1920)

  .toc-padding.toc-visible
    padding-left calc(var(--pad1920) + var(--width-side) + var(--pad768))
</style>
