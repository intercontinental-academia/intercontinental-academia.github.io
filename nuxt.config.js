import colors from 'vuetify/es5/util/colors'
let primary = ''
let logo = []
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  /*   ssr: false, */
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    async ready() {
      const { $content } = require('@nuxt/content')
      const programs = await $content('Programs')
        .sortBy('_', 'desc')
        .limit(1)
        .fetch()
      primary = programs[0].primary_color
      logo = [
        programs[0].logo_colors['1_inner_circle_color'],
        programs[0].logo_colors['2'],
        programs[0].logo_colors['3'],
        programs[0].logo_colors['4'],
        programs[0].logo_colors['5_outer_circle_color'],
      ]
    },
  },
  server: {
    port: 3000, // par défaut: 3000
    host: '0.0.0.0', // par défaut: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Intercontinental Academia',
    title: 'ICA',
    // polyfill for intersection observer
    script: [
      {
        src:
          'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The Intercontinental Academia (ICA) creates a global network of future research leaders in which some of the very best young academics work together on paradigm-shifting, cross-disciplinary research, mentored by eminent researchers from across the globe.',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@mdi/font/css/materialdesignicons.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/image',
    '@nuxtjs/style-resources',
    'nuxt-compress',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxtjs/sitemap',
    '@nuxt/content',
    'nuxt-content-highlight',
    '@nuxtjs/sentry',
    '@nuxtjs/ackee',
  ],
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // MODULES CONFIGURATIONS
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  /*
   ** Sentry module configuration
   ** https://github.com/nuxt-community/sentry-module#options
   */
  sentry: {
    dsn: 'https://ff140d7ad0014db3be954a0149ab5216@sentry.paris-ias.io/8',
    config: {}, // Additional config
  },
  /*
   ** Ackee module configuration
   ** https://github.com/nuxt-community/ackee-module
   ** https://ackee.nuxtjs.org/
   */
  ackee: {
    server: 'https://ackee.paris-ias.io/',
    domainId: '5d8bb345-4757-41e7-b3ab-145be40df01b',
    // see documentation for more!
    ignoreOwnVisits: false,
  },
  // ESLint module configuration (https://github.com/nuxt-community/eslint-module)
  eslint: {
    fix: true,
    emitWarning: true,
    quiet: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {},
  },
  loading: {
    color: primary || '#5c3190',
    height: '5px',
  },
  googleFonts: {
    families: {
      Petrona: [500, 700],
    },
    download: true,
    base64: true,
    inject: true,
  },

  /*
   ** Sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module#setup-a-sitemap
   */
  sitemap: {
    hostname: 'https://www.intercontinental-academia.org',
    gzip: true,
    exclude: [],
    icons: [],
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    // Les recherches s'effectuent uniquement sur les champs titre et description
    fullTextSearchFields: [
      'title',
      'name',
      'text',
      'related-session',
      'firstname',
      'lastname',
      'presentation',
      'title_and_institution',
      'post_title',
    ],
  },
  styleResources: {
    scss: ['./assets/*.scss'],
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    iconfont: 'mdi',
    options: {
      customProperties: true,
    },
    defaultAssets: {
      font: false,
      icons: false,
    },
    treeShake: true,
    theme: {
      themes: {
        dark: {
          primary: primary || '#5c3190',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          logo,
        },
        light: {
          primary: primary || '#5c3190',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          logo,
        },
      },
    },
  },
  /*
   ** Page Layout transition
   ** https://nuxtjs.org/guides/features/transitions#the-layouttransition-property
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('TRANSITION : Before enter...')
    },
    afterLeave(el) {
      console.log('TRANSITION : afterLeave', el)
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['nuxt-content-highlight', '@nuxt'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
}
