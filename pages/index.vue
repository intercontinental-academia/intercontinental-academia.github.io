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
      v-if="$vuetify.breakpoint.mdAndUp"
    />

    <div class="d-flex justify-end align-end flex-column mt-16">
      <div
        class="d-flex flex-row text-h4 text-uppercase justify-end align-end"
        :style="'color: ' + $vuetify.theme.themes.light.primary"
      >
        <div class="pb-3 mr-4">INTERCONTINENTAL ACADEMIA</div>
        <div
          class="count text-h4 py-8"
          :style="
            'background-color:' +
            LightenDarkenColor($vuetify.theme.themes.light.primary, -30)
          "
        >
          {{ current._
          }}{{
            [, 'st', 'nd', 'rd'][(current._ / 10) % 10 ^ 1 && current._ % 10] ||
            'th'
          }}
        </div>
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
    <TitleBlock :title="concept.title"></TitleBlock>

    <div class="px-12">
      <div class="text-h4 font-weight-black text-uppercase my-6">
        {{ concept.subtitle }}
      </div>
      <v-row>
        <v-col cols="12">
          <nuxt-content id="conceptText" :document="concept" />
        </v-col>
      </v-row>
    </div>
    <v-row class="px-12">
      <v-col v-for="(item, index) in programs" :key="item.slug" cols="12">
        <div v-if="index < programs.length - 1">
          <div class="d-flex mb-6">
            <logo
              :size="100"
              :colors="Object.values(item.logo_colors)"
              class="d-block"
            />
            <div class="flex-column align-self-center ml-6" justify="bottom">
              <div class="text-h5 font-weight-black">
                ICA {{ item._ }} - {{ item.title.toUpperCase() }}
              </div>
              <div
                v-for="session in item.sessions"
                :key="session.date"
                class="font-italic"
              >
                {{ session.location }}: {{ session.date }}
              </div>
            </div>
          </div>
          <nuxt-content :document="item" />
        </div>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="Testimonials"></TitleBlock>
    <v-carousel cycle hide-delimiter-background hide-delimiters>
      <v-carousel-item v-for="item in testimonials" :key="item.slug">
        <v-sheet light tile class="px-16">
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
              <nuxt-content
                :document="item"
                class="d-inline-block testimonial"
              />
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
    const concept = await $content('Pages_content/about/concept').fetch()
    const programs = await $content('Programs').sortBy('_', 'asc').fetch()
    const current = programs[programs.length - 1]
    const testimonials = await $content('testimonials').fetch()
    programs.forEach(async (item) => {
      const target = 'content' + item.path + '.md'
      item.sessions = await $content('Sessions')
        .where({
          'related-program': target,
        })
        .sortBy('start_date_and_time', 'asc')
        .fetch()
    })
    console.log('programs: ', programs)
    return {
      concept,
      programs,
      current,
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
.testimonial.nuxt-content p::before {
  content: '\F0757';
  font: normal normal normal 24px/1 'Material Design Icons';
  font-size: 24px;
  color: grey;
}
.testimonial.nuxt-content p::after {
  content: '\F027E';
  font: normal normal normal 24px/1 'Material Design Icons';
  font-size: 24px;
  color: grey;
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
  text-align: right;
}
.count {
  color: white !important;
  padding: 1rem;
  margin-bottom: -20px;
  z-index: 2;
  span {
    font-feature-settings: frac;
    font-variant-numeric: ordinal;
  }
}
@supports (font-variant-numeric: diagonal-fractions) {
  .count span {
    font-feature-settings: frac;
    font-variant-numeric: ordinal;
  }
}
</style>
