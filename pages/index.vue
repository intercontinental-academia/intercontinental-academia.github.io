<template>
  <div>
    <logo
      v-if="$vuetify.breakpoint.mdAndUp"
      :size="240"
      :colors="logo"
      style="position: absolute; top: -80px; z-index: 5"
    />
    <div
      class="d-flex justify-end align-end flex-column"
      :style="'margin-top:' + ($vuetify.breakpoint.mdAndUp ? '8rem' : '2rem')"
    >
      <div
        class="d-flex flex-row text-uppercase justify-end align-end"
        :style="'color: ' + $vuetify.theme.themes.light.primary"
        :class="$vuetify.breakpoint.smAndUp ? 'text-h4' : 'text-h5'"
      >
        <div class="pb-3 mx-4">
          {{
            $vuetify.breakpoint.smAndUp ? 'INTERCONTINENTAL ACADEMIA' : 'ICA'
          }}
        </div>
        <div
          class="count pa-8"
          :style="
            'background-color:' +
            LightenDarkenColor($vuetify.theme.themes.light.primary, -30)
          "
        >
          #{{ current._ }}
        </div>
      </div>

      <div
        class="theme"
        :class="$vuetify.breakpoint.smAndUp ? 'text-h4' : 'text-h5'"
        :style="'background-color:' + $vuetify.theme.themes.light.primary"
      >
        INTELLIGENCE AND ARTIFICIAL INTELLIGENCE
      </div>

      <div class="by text-h4">BY UBIAS</div>
    </div>
    <v-carousel v-model="model" cycle height="auto">
      <v-carousel-item
        v-for="item in carousel"
        :key="item.label"
        :height="$vuetify.breakpoint.mdAndUp ? '600' : '300'"
        :lazy-src="$img(item.image, { width: 10, quality: 70 })"
        :src="$img(item.image, { height: 'auto', quality: 70 })"
        :srcset="_srcset(item.image).srcset"
        :sizes="_srcset(item.image).size"
        :nuxt="!item.open_in_new_tab"
        :blank="!item.open_in_new_tab"
        :to="item.link"
      >
      </v-carousel-item>
    </v-carousel>
    <v-row no-gutters class="ma-12" justify="center">
      <v-col cols="12" md="8">
        <div class="text-h5 py-6 text-justify">
          <nuxt-content :document="index" />
        </div>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9 mb-3" title="Testimonials"></TitleBlock>
    <v-row no-gutters class="mb-12">
      <v-col cols="12">
        <v-carousel
          cycle
          hide-delimiters
          :show-arrows="testimonials.length > 1"
          continuous
          :height="$vuetify.breakpoint.mdAndUp ? '330' : 'auto'"
          interval="20000"
        >
          <v-carousel-item v-for="item in testimonials" :key="item.slug">
            <div
              class="d-flex justify-center align-center mx-16 black--text mb-12"
              style="height: 100%"
            >
              <v-avatar v-if="$vuetify.breakpoint.mdAndUp" size="120px">
                <img
                  v-if="item.picture.length"
                  :src="item.picture"
                  :alt="item.first_name + ' ' + item.last_name"
                />
                <div v-else>
                  {{ item.first_name[0] + ' ' + item.last_name[0] }}
                </div>
              </v-avatar>
              <div :class="{ 'ml-12': $vuetify.breakpoint.mdAndUp }">
                <nuxt-content
                  :document="item"
                  class="d-inline-block testimonial"
                />
                <b>{{
                  item.first_name +
                  ' ' +
                  item.last_name +
                  ', ' +
                  item.title_and_institution +
                  ' - ICA' +
                  item.millesime
                }}</b>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const programs = await $content('Programs').sortBy('_', 'asc').fetch()
    const current = programs[programs.length - 1]
    const testimonials = await $content('testimonials').fetch()
    const carousel = await $content('Carousel').fetch()
    const index = await $content('Pages_content/index').fetch()
    const logo = [
      current.logo_colors['1_inner_circle_color'],
      current.logo_colors['2'],
      current.logo_colors['3'],
      current.logo_colors['4'],
      current.logo_colors['5_outer_circle_color'],
    ]
    programs.forEach(async (item) => {
      const target = 'content' + item.path + '.md'
      item.sessions = await $content('Sessions')
        .where({
          'related-program': target,
        })
        .sortBy('start_date_and_time', 'asc')
        .fetch()
    })

    return {
      index,
      programs,
      current,
      testimonials,
      logo,
      carousel,
    }
  },
  data: () => ({
    model: 0,
  }),
  mounted() {},
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
    _srcset(src) {
      return this.$img.getSizes(src, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
        },
      })
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
}
</style>
