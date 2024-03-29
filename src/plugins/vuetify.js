import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { pt },
      current: 'pt',
    },
  icons: {
    iconfont: 'md',
  },
  theme: {
      dark: true,
      primary: colors.teal.darken1,
      accent: colors.indigo.darken1,
      info: colors.blue,
      error: colors.pink.darken2,
      success: colors.teal.lighten1,
      warning: colors.purple.darken1
  }
});
