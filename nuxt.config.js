import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/AlphaConstructionWebsite/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - website',
    title: 'Alpha Construction',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  { hid: 'og:type', property: 'og:type', content: 'website' },
	  { hid: 'og:title', property: 'og:title', content: 'Alpha Construction Website' },
	  { hid: 'og:description', property: 'og:description', content: 'Construction website created with NuxtJS, Vuetify, and Strapi.' },
	  { hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/lnsflive/AlphaConstructionWebsite/master/public/img/ss1.png' },
	  { hid: 'og:url', property: 'og:url', content: 'https://alphaconstructionwebsite-lnsflive.vercel.app/' },
	  { hid: 'twitter:title', property: 'twitter:title', content: 'Alpha Construction Website' },
	  { hid: 'twitter:description', property: 'twitter:description', content: 'Construction website created with NuxtJS, Vuetify, and Strapi.' },
	  { hid: 'twitter:image', property: 'twitter:image', content: 'https://raw.githubusercontent.com/lnsflive/AlphaConstructionWebsite/master/public/img/ss1.png' },
	  { hid: 'twitter:url', property: 'twitter:url', content: 'https://alphaconstructionwebsite-lnsflive.vercel.app/' },
	  { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/qse4mmy.css',
  ], 
  serverMiddleware:[
    {
      path: '/api', handler: '~/api/index.js'
    }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  
  plugins: [
    
   ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    
    '@nuxtjs/apollo',
    
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://alphaconstruction.herokuapp.com/graphql',
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  generate: {
    dir: 'public'
  }
}
