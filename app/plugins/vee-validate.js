import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import { email, max, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)
extend('max', max)

Vue.component('ValidationProvider', ValidationProvider)
