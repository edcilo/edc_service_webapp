<template>
  <div class="edc-contact">
    <div class="edc-contact__map">
      <g-map
        ref="gMap"
        class="edc-contact__gmap"
        :language="locale"
        :center="{ lat: lat, lng: lng }"
        :options="mapOptions"
        :zoom="mapZoom"
      />
    </div>

    <edc-container class="edc-contact__content">
      <div class="edc-contact__body">
        <div class="edc-contact__form">
          <div class="edc-contact__form-header">
            <span class="edc-contact__label">{{ label }}</span>
            <h2 class="edc-contact__title">{{ title }}</h2>
          </div>

          <div class="edc-contact__form-body">
            <ValidationObserver ref="validationObserver" v-slot="{ invalid }">
              <el-form ref="contactForm" :model="form" label-position="top">
                <ValidationProvider
                  v-slot="{ errors, failed }"
                  rules="required|max:250"
                >
                  <el-form-item
                    :label="'*' + $tc('name', 1)"
                    :show-message="failed"
                    :error="failed ? $t('field_invalid') : null"
                  >
                    <el-input
                      v-model="form.name"
                      :disabled="loading"
                      :label="$tc('name', 1)"
                      :clearable="true"
                    />
                  </el-form-item>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ failed }"
                  rules="required|max:250|email"
                >
                  <el-form-item
                    :label="'*' + $t('email')"
                    :show-message="failed"
                    :error="failed ? $t('field_invalid') : null"
                  >
                    <el-input
                      v-model="form.email"
                      :disabled="loading"
                      :label="$t('email')"
                      :clearable="true"
                    />
                  </el-form-item>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ failed }"
                  rules="required|max:2048"
                >
                  <el-form-item
                    :label="'*' + $tc('message', 1)"
                    :show-message="failed"
                    :error="failed ? $t('field_invalid') : null"
                  >
                    <el-input
                      v-model="form.msg"
                      resize="none"
                      type="textarea"
                      :disabled="loading"
                      :label="$tc('message', 1)"
                      :maxlength="2048"
                      :rows="4"
                    />
                  </el-form-item>
                </ValidationProvider>

                <div class="edc-contact__form-footer">
                  <el-form-item>
                    <el-button
                      type="primary"
                      :disabled="invalid || loading"
                      @click="submitForm"
                    >
                      <font-awesome-icon
                        v-show="!loading"
                        class="edc-contact__btn-icon"
                        icon="paper-plane"
                      />
                      <font-awesome-icon
                        v-show="loading"
                        class="edc-contact__btn-icon"
                        icon="circle-notch"
                        :spin="true"
                      />
                      {{ $t('send') | capitalize }}
                    </el-button>
                  </el-form-item>
                </div>
              </el-form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </edc-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { lightTheme, darkTheme } from '~/assets/nuxtGmap'

library.add(faCircleNotch, faPaperPlane)

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      locale: 'es',
      lat: 19.45613,
      lng: -99.188423,
      mapZoom: 14,
      mapOptions: {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        ZoomControl: false,
        styles: darkTheme,
      },
      form: {
        name: '',
        email: '',
        msg: '',
      },
    }
  },
  computed: {
    darkThemeActivated(): boolean {
      return this.$store.state.app.darkTheme
    },
  },
  watch: {
    darkThemeActivated: {
      immediate: true,
      handler(newVal) {
        this.mapOptions.styles = newVal ? lightTheme : darkTheme
      },
    },
  },
  methods: {
    async submitForm() {
      this.loading = true

      await this.$store.dispatch('landingpage/postContactForm', this.form)

      this.$message({
        message: this.$t('contact_success') as string,
        duration: 6000,
        type: 'success',
      })

      this.form.name = ''
      this.form.email = ''
      this.form.msg = ''

      const form = this.$refs.validationObserver as any
      form.reset()

      this.loading = false
    },
  },
})
</script>

<style lang="scss">
@import 'assets/styles/helpers/variables';

.edc-contact {
  background: transparent;
  display: flex;
  min-width: 320px;
  width: 100%;
  line-height: $line-height-base;
  font-family: $font-sans;
  position: relative;

  .dark-mode & {
    &__body {
      background: darken($c-white, 90%);
    }

    &__title {
      color: $c-gray-lightest;
    }

    &__form {
      .el-form-item__label {
        color: $c-gray-lighter;
      }
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  &__body {
    max-width: 480px;
    width: 100%;
    position: relative;
    background: $c-white;
    padding: $padding-xl $padding-base;
    margin: $margin-2xl $margin-base;
    border-radius: $br-rd-sm;
    box-shadow: $box-shadow-sm;
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

  &__form {
    width: 100%;
    height: 100%;

    &-header {
      text-align: center;
    }

    &-footer {
      text-align: center;
      padding-top: $padding-base;
    }

    .el-form-item__label {
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      color: $c-dark;
      font-weight: $fw-medium;
    }
  }

  &__btn-icon {
    margin-right: $margin-sm;
  }

  &__map {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__gmap {
    height: 100%;

    .GMap__Wrapper {
      height: 100%;
    }
  }
}
</style>
