<template>
  <div class="feature-dropdown">
    <div class="dropdown--section_title">Design</div>
    <div class="dropdown-wrap">
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/features"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Features 1</span>
        </component>
      </div>
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/features"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Features 2</span>
        </component>
      </div>
    </div>
    <div class="dropdown--section_title">Prototyping</div>
    <div class="dropdown-wrap">
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/staking"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Staking 1</span>
        </component>
      </div>
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/staking"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Staking 2</span>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // check router-link or nuxt-link
    dynamicComponent() {
      return window.location.href === true ? "nuxt-link" : "router-link"
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log("this.$nuxt._isVue: ", this.$nuxt._isVue)
  }
}
</script>

<style lang="stylus" scoped>
*
  color black
</style>
