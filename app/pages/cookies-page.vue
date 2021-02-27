<template>
  <div class="edc-cookies-page">
    <edc-container class="edc-cookies-page__content">
      <div class="edc-cookies-page__header">
        <span class="edc-cookies-page__label">{{ label }}</span>
        <h2 class="edc-cookies-page__title">{{ title }}</h2>
      </div>

      <p class="edc-cookies-page__text">{{ content }}</p>
    </edc-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SchemaInterface } from '~/store/landingpage'

export default Vue.extend({
  computed: {
    landingSchema(): SchemaInterface {
      return this.$store.state.landingpage.schema || {}
    },
    cookies(): SchemaInterface['cookies'] | null {
      return this.landingSchema.cookies || null
    },
    label(): string {
      return this.cookies ? this.cookies.label : ''
    },
    title(): string {
      return this.cookies ? this.cookies.title : ''
    },
    content(): string {
      return this.cookies ? this.cookies.content : ''
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-cookies-page {
  &__content {
    padding-top: $padding-xl * 2;
    padding-bottom: $padding-xl * 2;
  }

  &__header {
    text-align: center;
    margin-bottom: $margin-xl;
  }

  &__label {
    font-family: $font-family-cursive;
    font-size: $font-base;
    color: $c-primary;
  }

  &__title {
    margin: 0 0 $margin-lg;
    color: $c-dark;
    font-family: $font-sans-2;
    font-size: $font-4xl;
    font-weight: $fw-semibold;
    line-height: 1;
    text-transform: uppercase;
  }

  &__text {
    color: $c-gray-darker;
  }
}
</style>
