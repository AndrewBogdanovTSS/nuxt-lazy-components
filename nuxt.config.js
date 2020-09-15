export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['assets/styles/index'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  purgeCSS: {
    // enabled: true,
    mode: 'postcss',
    whitelist: ['svg-defs'],
    whitelistPatterns: [/^(w-\D)\w+/]
  },
  plugins: [
    '@/plugins/global'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-purgecss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      // Allows the use of single line comments
      // in .pscss and .vue files
      parser: 'postcss-comment',
      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        'postcss-nested': {},
        'postcss-hexrgba': {},
        'postcss-custom-properties': {
          importFrom: [{customProperties: require('./config/tailwind/plugins/theme')()}]
        },
        autoprefixer: {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
