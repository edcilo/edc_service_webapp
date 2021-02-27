<template>
  <el-header
    :class="[className, { fixed: fixed, visible: visible || !fixed }]"
    height="auto"
  >
    <edc-container class="edc-header__container" :fluid="fluid">
      <el-row class="edc-header__row" type="flex" align="middle">
        <el-col class="edc-header__col" :span="4">
          <NuxtLink :to="localePath('index')">
            <el-image class="edc-header__logo" :src="logo" alt="edcilo-logo" />
          </NuxtLink>
        </el-col>
        <el-col :span="20" />
      </el-row>
    </edc-container>
  </el-header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      className: 'edc-header',
      size: 200,
      visible: false,
    }
  },
  computed: {
    logo(): string {
      return this.darkTheme
        ? 'https://space.edcilo.com/edcilo-logo-clear.svg'
        : 'https://space.edcilo.com/edcilo-logo-dark.svg'
    },
    darkTheme(): boolean {
      return this.$store.state.app.darkTheme
    },
  },
  mounted(): void {
    this.setVisible()
  },
  methods: {
    getCurrentScroll(): number {
      return window.pageYOffset || document.documentElement.scrollTop
    },
    setVisible(): void {
      window.onscroll = () => {
        const scroll = this.getCurrentScroll()
        this.visible = scroll >= this.size
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-header {
  transition: background 0.3s;
  background: transparent;
  width: 100%;

  .dark-mode & {
    &.visible {
      background: darken($c-white, 80%);
      border-bottom-color: darken($c-white, 80%);
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  &.visible {
    background: $c-white;
    border-bottom: 1px solid $c-gray-lighter;
    box-shadow: $box-shadow-sm;
  }

  &__container {
    padding: 0.5rem;
  }

  &__row {
    height: 100%;
  }

  &__col {
    text-align: left;
  }

  &__logo {
    width: 90px;
    height: auto;
  }
}
</style>
