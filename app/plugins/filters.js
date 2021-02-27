import Vue from 'vue'

Vue.filter('capitalize', (val) => {
  if (typeof val !== 'string') {
    return ''
  }

  return val.charAt(0).toUpperCase() + val.slice(1)
})
