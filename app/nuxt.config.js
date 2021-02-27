export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'edcilo.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eduardo Cifuentes, Fullstack web developer' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&family=Raleway:wght@200;400;600;800&family=Oswald:wght@200;400;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/filters',
    '~/plugins/i18n',
    '~/plugins/repositories',
    '~/plugins/vee-validate',
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/ga.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/landing'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode
    '@nuxtjs/color-mode',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/es/setup
    'nuxt-i18n',
    // https://fontawesome.com/icons
    'nuxt-fontawesome',
    // https://www.npmjs.com/package/nuxt-gmaps
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyB7Ou4HQ-QSbToR75LNRtdynhWrw4gwvBQ',
        // you can use libraries: ['places']
      },
    ],
  ],

  compilerOptions: {
    types: ['@nuxt/types', 'nuxt-i18n'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/, 'vee-validate/dist/rules'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'es',
    locales: [
      { code: 'es', name: 'Español', flag: 'es', file: 'es-ES.ts' },
      { code: 'en', name: 'English', flag: 'gb', file: 'en-US.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },
}
