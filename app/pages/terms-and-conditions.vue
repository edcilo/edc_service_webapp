<template>
  <div class="edc-terms-and-conditions">
    <edc-container class="edc-terms-and-conditions__content">
      <div class="edc-terms-and-conditions__header">
        <span class="edc-terms-and-conditions__label">
          {{ label }}
        </span>
        <h2 class="edc-terms-and-conditions__title">
          {{ title }}
        </h2>
      </div>

      <p class="edc-terms-and-conditions__text">
        {{ content }}
      </p>
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
    tac(): SchemaInterface['terms_and_conditions'] | null {
      return this.landingSchema.terms_and_conditions || null
    },
    label(): string {
      return this.tac ? this.tac.label : ''
    },
    title(): string {
      return this.tac ? this.tac.title : ''
    },
    content(): string {
      return this.tac ? this.tac.content : ''
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-terms-and-conditions {
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
