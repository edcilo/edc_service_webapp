<template>
  <div class="edc-footer">
    <edc-container class="edc-hero__content">
      <el-row class="edc-footer__row" type="flex">
        <el-col class="edc-footer__rights">
          edcilo 2020 | {{ $t('designed_with') }}
          <font-awesome-icon icon="heart" />
        </el-col>

        <el-col class="edc-footer__legal">
          <ul>
            <li>
              <NuxtLink :to="localePath('terms-and-conditions')">
                {{ $t('terms_and_conditions') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('cookies-page')">
                {{ $t('cookies_page') }}
              </NuxtLink>
            </li>
          </ul>
        </el-col>

        <el-col class="edc-footer__locale">
          <edc-dark-theme />

          <edc-lang-control />
        </el-col>
      </el-row>
    </edc-container>
  </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

export default {}
</script>

<style lang="scss" scoped>
@import 'assets/styles/helpers/variables';

.edc-footer {
  height: 100%;
  background: #1f2026;
  padding: $padding-base 0;
  color: #656d7a;
  font-size: $font-sm;
  min-width: 320px;

  .dark-mode & {
    background: darken(#1f2026, 20%);
  }

  &__row {
    @media only screen and (max-width: 500px) {
      flex-direction: column;
      max-width: 100%;
      text-align: center;
    }
  }

  &__rights {
    @media only screen and (max-width: 500px) {
      margin-bottom: $margin-base;
    }
  }

  &__legal {
    text-align: left;
  }

  &__locale {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @media only screen and (max-width: 500px) {
      justify-content: center;
    }
  }

  .dark-mode {
    margin-right: $margin-base;
  }
}
</style>
