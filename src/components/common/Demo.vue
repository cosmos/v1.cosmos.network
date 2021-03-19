<template>
  <main>
    <div class="section-hero">
      <showcase-navbar />
      <vsm-menu :menu="menu">
        <template #default="data">
          <component :is="data.item.content" class="content" />
          <component
            :is="data.item.secondaryContent"
            class="content--secondary"
          />
        </template>
        <template #before-nav>
          <li class="vsm-section logo-section">
            <!-- <logo-cosmos-wordmark class="logo" /> -->
          </li>
        </template>
        <template slot="after-nav">
          <li class="vsm-section vsm-mob-hide">
            <a href="#" class="vsm-link signup">Sign In</a>
          </li>
          <!--Display mobile menu-->
          <vsm-mob>
            <div class="mobile-content">Mobile Content</div>
          </vsm-mob>
        </template>
      </vsm-menu>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
// import LogoCosmosWordmark from '~/components/logos/LogoCosmosWordmark.vue'
import featuresDropdown from '../../components/content/featuresDropdown'
import enterpriseDropdownTop from '../../components/content/enterpriseDropdownTop'
import enterpriseDropdownBottom from '../../components/content/enterpriseDropdownBottom'

export default {
  components: {
    // LogoCosmosWordmark,
  },
  mounted () {
    const test = this.$nuxt._isVue || window.location.href ? 'nuxt-link' : 'router-link'
    console.log('test: ', test)
  },
  data() {
    return {
      menu: [
        { title: 'Learn', dropdown: 'features', content: featuresDropdown },
        { title: 'Build', dropdown: 'enterprise', content: enterpriseDropdownTop, secondaryContent: enterpriseDropdownBottom },
        { title: 'Explore', attributes: { href: '#' } },
        { title: 'Github', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
      ],
    }
  },
  methods: {
    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    }
  }
}
</script>

<style lang="stylus">
// Styles, to quickly start using the component
// You can delete, change or add your own

// Limit the width to 1024px and center
.vsm-menu {
  padding-top: 5rem;
  padding-bottom: 30rem;
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

* {
  color: inherit;
}

// Let's simplify the work with menu items (logo, menu, buttons, etc)
.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}


// Move all the content to the right and reduce the logo
.logo-section {
  flex: 1 1 auto;
  img {
    user-select: none;
  }
}

// All menu items (element props: a, button, span, etc) are
// made the same in style
.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

// Styles for Dropdown Content:
.wrap-content {
  padding: 30px;
  // Set the width manually so that it does not depend
  // on changing content
  width: 400px;
}
.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  font-style: italic;
  font-size: .8rem;
}

.content,
.content--secondary,
.mobile-content {
  padding: 30px;
}

.content--secondary {
  padding-top: 10px;
  padding-bottom: 10px;
}

.dropdown--section_title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.dropdown-wrap__content {
  display: flex;
  align-items: center;
  color: currentColor;
  text-decoration: none;
  padding: 10px 5px 10px 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &.type1 {
    span {
      margin-left: 10px;
    }
  }
  &.type2 {
    align-items: flex-start;
    > div {
      margin-left: 10px;
    }
    .content--bottom {
      color: var(--secondary);
    }
  }
}

.feature-dropdown {
  min-width: 250px;
}

.enterprise-dropdown {
  width: 400px;
}
</style>