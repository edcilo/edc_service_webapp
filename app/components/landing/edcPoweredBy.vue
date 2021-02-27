<template>
  <div class="edc-powered-by">
    <edc-container class="edc-powered-by__content">
      <div class="edc-powered-by__body">
        <span class="edc-powered-by__label">{{ label }}</span>
        <h2 class="edc-powered-by__title">{{ title }}</h2>
        <div class="edc-powered-by__branding">
          <img
            v-for="icon in branding"
            :key="icon"
            class="edc-powered-by__logo"
            :src="icon"
          />
        </div>
      </div>
    </edc-container>
  </div>
</template>

<script lang="ts">
import { SchemaInterface } from '~/store/landingpage'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    branding: {
      type: Array as () => SchemaInterface['powered_by']['branding'],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-powered-by {
  background: $c-gray-base;
  min-width: 320px;
  width: 100%;

  .dark-mode & {
    background: darken($c-gray-base, 40%);

    &__title {
      color: $c-gray-lighter;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: $padding-xl 0;
  }

  &__body {
    max-width: 640px;
    width: 100%;
    text-align: center;
  }

  &__label {
    font-family: $font-family-cursive;
    font-size: $font-base;
    color: $c-primary;
  }

  &__title {
    margin: 0 0 $margin-2xl;
    color: $c-dark;
    font-family: $font-sans-2;
    font-size: $font-4xl;
    font-weight: $fw-semibold;
    line-height: 1;
    text-transform: uppercase;
  }

  &__branding {
    background: transparent;
  }

  &__logo {
    height: 50px;
    width: auto;
    margin: 0 $margin-lg $margin-xl;
  }
}
</style>
