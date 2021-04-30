<template>
  <div>
    <logo
      :size="240"
      :colors="[
        $store.state.logo[0],
        $store.state.logo[1],
        $store.state.logo[2],
        $store.state.logo[3],
        $store.state.logo[4],
      ]"
      style="position: absolute; top: -80px; z-index: 5"
    />
    <div
      class="text-h4 text-center text-uppercase mt-12"
      :style="'color: ' + $vuetify.theme.themes.light.primary"
    >
      INTERCONTINENTAL ACADEMIA
    </div>
    <div class="d-flex justify-end align-end flex-column">
      <div
        class="count text-h4"
        :style="
          'background-color:' +
          LightenDarkenColor($vuetify.theme.themes.light.primary, -30)
        "
      >
        <div style="filter: brightness(100%); color: white">4th</div>
        <!-- TODO, update BG color as secondary color -->
      </div>

      <div
        class="theme text-h4"
        :style="'background-color:' + $vuetify.theme.themes.light.primary"
      >
        INTELLIGENCE AND ARTIFICIAL INTELLIGENCE
      </div>

      <div class="by text-h4">BY UBIAS</div>
    </div>
    <v-carousel v-model="model" cycle>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="my-9">
      <v-col cols="auto" class="text-h4" offset="2"
        >10 Mentors for 15 fellows</v-col
      >
      <v-col cols="auto" class="text-h4" offset="4"
        >One group, two institutions</v-col
      >
      <v-col cols="auto" class="text-h4" offset="6"
        >From Paris to Belo Horizonte</v-col
      >
    </v-row>
    <v-carousel cycle hide-delimiter-background hide-delimiters>
      <v-carousel-item v-for="item in testimonials" :key="item.slug">
        <v-sheet light height="100%" tile class="px-16">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="4" align="center" justify="center">
              <v-avatar size="80%">
                <img
                  v-if="item.picture.length"
                  :src="item.picture"
                  :alt="item.first_name + ' ' + item.last_name"
                />
                <div v-else>
                  {{ item.first_name[0] + ' ' + item.last_name[0] }}
                </div>
              </v-avatar>
            </v-col>
            <v-col cols="8" class="">
              <v-icon class="align-start">mdi-format-quote-open</v-icon>
              <nuxt-content :document="item" class="d-inline-block" />
              <v-icon class="align-end">mdi-format-quote-close</v-icon>
              <b>{{
                item.first_name +
                ' ' +
                item.last_name +
                ' ' +
                item.title +
                ' - ICA' +
                item.millesime
              }}</b>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const testimonials = await $content('testimonials').fetch()
    console.log('testimonials: ', testimonials)
    return {
      testimonials,
    }
  },
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
  methods: {
    LightenDarkenColor(col, amt) {
      let usePound = false

      if (col[0] === '#') {
        col = col.slice(1)
        usePound = true
      }

      const num = parseInt(col, 16)

      let r = (num >> 16) + amt

      if (r > 255) r = 255
      else if (r < 0) r = 0

      let b = ((num >> 8) & 0x00ff) + amt

      if (b > 255) b = 255
      else if (b < 0) b = 0

      let g = (num & 0x0000ff) + amt

      if (g > 255) g = 255
      else if (g < 0) g = 0

      return (
        (usePound ? '#' : '') +
        String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
      )
    },
  },
}
</script>
<style lang="scss">
.nuxt-content p {
  display: inline-block;
}

.count,
.theme,
.by {
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.theme {
  color: white !important;
  padding: 1.5rem 80px 1.5rem 2rem;
}
.count {
  color: white !important;
  padding: 1rem;
  margin-bottom: -20px;
  z-index: 2;
}
</style>
