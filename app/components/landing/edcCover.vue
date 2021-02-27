<template>
  <edc-hero class="edc-cover" :height="height">
    <div class="edc-cover__background">
      <div
        class="edc-cover__cover"
        :style="{ 'background-image': `url(${background})` }"
      />
      <div class="edc-cover__layer" />
    </div>
    <edc-container class="edc-cover__content">
      <div class="edc-cover__body">
        <span class="edc-cover__label">{{ label }}</span>
        <h1 class="edc-cover__title">{{ title }}</h1>
        <span class="edc-cover__subtitle">{{ subtitle }}</span>
      </div>
    </edc-container>
  </edc-hero>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    background: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 100,
    },
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
  },
})
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-cover {
  background: transparent;
  display: flex;
  min-width: 320px;
  position: relative;

  .dark-mode & {
    &__cover {
      background-color: $c-gray-darkest;
    }

    &__layer {
      background: rgba($c-gray-darkest, 0.8);
      background: linear-gradient(
        90deg,
        rgba($c-gray-darkest, 1) 0%,
        rgba($c-gray-darkest, 0.3) 100%
      );
    }

    &__title {
      color: $c-gray-lightest;
    }

    &__subtitle {
      color: $c-gray-base;
    }
  }

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__cover {
    width: 100%;
    height: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $c-gray-lighter;
  }

  &__layer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($c-gray-lighter, 0.8);
    background: linear-gradient(
      90deg,
      rgba($c-gray-lighter, 1) 0%,
      rgba($c-gray-lighter, 0.3) 100%
    );
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  &__body {
    text-align: left;
    width: 264px;
  }

  &__label {
    font-family: $font-family-cursive;
    font-size: $font-base;
    color: $c-primary;
  }

  &__title {
    margin: 0;
    color: $c-dark;
    font-family: $font-sans;
    font-size: $font-5xl;
    font-weight: $fw-semibold;
    line-height: 1;
    text-transform: uppercase;
  }

  &__subtitle {
    font-family: $font-family-monospace;
    font-size: $font-lg;
    color: $c-gray-darker;
    text-align: right;
    text-transform: uppercase;
  }
}
</style>
