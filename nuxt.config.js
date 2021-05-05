import colors from 'vuetify/es5/util/colors'
let primary = ''
let logo = []
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    async ready () {
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
      console.log('primary: ', primary)
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Intercontinental Academia',
    title: 'ICA',
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
  css: [],

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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxtjs/sitemap',
    '@nuxt/content',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {},
  },
  webfontloader: {
    google: {
      families: ['Petrona:500,700'], // Loads Lato font with weights 400 and 700
    },
  },
  /*
  ** Sitemap module configuration
  ** https://github.com/nuxt-community/sitemap-module#setup-a-sitemap
  */
  sitemap: {
    hostname: 'https://intercontinental-academia.github.io',
    gzip: true,
    exclude: [],
    icons: [],
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  styleResources: {
    scss: ['./assets/*.scss'],
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    options: {
      customProperties: true,
    },
    defaultAssets: {
      font: false,
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
