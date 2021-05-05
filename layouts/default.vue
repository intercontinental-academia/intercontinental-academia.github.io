<template>
  <v-app>
    <v-app-bar
      clipped-left
      fixed
      app
      height="80"
      color="white"
      :flat="
        !($route.name === 'index' && !visible && $vuetify.breakpoint.mdAndUp) ||
        $route.name !== 'index'
      "
    >
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="8" xl="6" class="d-flex align-end align-center">
          <template
            v-if="
              !(
                $route.name === 'index' &&
                visible &&
                $vuetify.breakpoint.mdAndUp
              )
            "
          >
            <v-btn
              text
              height="80"
              width="80"
              class=""
              nuxt
              to="/"
              color="white"
            >
              <logo :size="80" :colors="logo" class="d-block ml-3" />
            </v-btn>
            <nuxt-link
              text
              to="/"
              class="ml-2 headline font-weight-bold"
              :style="
                'text-decoration: none; color: ' +
                $vuetify.theme.themes.light.primary
              "
            >
              <svg
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                width="50.432003"
                height="21.344009"
                viewBox="0 0 13.343467 5.647269"
                version="1.1"
                id="svg8"
              >
                <defs id="defs2" />
                <metadata id="metadata5">
                  <rdf:RDF>
                    <cc:Work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type
                        rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                      />
                      <dc:title></dc:title>
                    </cc:Work>
                  </rdf:RDF>
                </metadata>
                <g id="layer1" transform="translate(-52.996603,-96.735093)">
                  <text
                    xml:space="preserve"
                    :style="
                      'font-style: normal;font-variant: normal;font-weight: normal;font-stretch: normal;font-size: 8.46667px;line-height: 1.25;font-family: Petrona;letter-spacing: 0px;word-spacing: 0px;fill:' +
                      $vuetify.theme.themes.light.primary +
                      ';fill-opacity: 1;stroke: none;stroke-width: 0.264583;'
                    "
                    x="52.429337"
                    y="102.28076"
                    id="text835"
                  >
                    <tspan
                      id="tspan833"
                      x="52.429337"
                      y="102.28076"
                      style="
                        font-style: normal;
                        font-variant: normal;
                        font-weight: normal;
                        font-stretch: normal;
                        font-size: 7px;
                        font-family: Petrona;
                        -inkscape-font-specification: Petrona;
                        stroke-width: 0.264583;
                      "
                    >
                      ICA
                    </tspan>
                  </text>
                </g>
              </svg></nuxt-link
            >
          </template>

          <v-spacer></v-spacer>
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.smAndDown"
            @click.stop="drawer = !drawer"
          />
          <v-tabs
            v-if="$vuetify.breakpoint.mdAndUp"
            right
            optional
            height="80px"
            slider-size="3"
            :color="$vuetify.theme.themes.light.primary"
          >
            <v-tab nuxt to="/about" class="headline">The 4th</v-tab>
            <v-tab nuxt to="/mentors" class="headline">Mentors</v-tab>
            <v-tab nuxt to="/fellows" class="headline">Fellows</v-tab>
            <v-tab nuxt to="/program" class="headline">Program</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      clipped
      fixed
      app
      right
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container
        fluid
        :class="{ 'pa-0': $vuetify.breakpoint.mdAndDown }"
        :style="'a {color:' + primary + '!important;}'"
        class="mb-12"
      >
        <v-row no-gutters justify="center">
          <v-col cols="12" lg="8" xl="6">
            <div v-intersect="onIntersect" class="observer"></div>
            <nuxt /> </v-col
        ></v-row>
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
      :color="$vuetify.theme.themes.light.primary"
      class="justify-center flex-column white--text mt-16"
    >
      <div class="pb-8">
        <div class="d-flex justify-center">
          <Contact /><PrivacyPolicy /><Credits />
        </div>
        <br />
        <span class="mt-3 d-flex align-center text-uppercase"
          ><v-btn
            color="white"
            text
            href="https://www.paris-iea.fr/en/"
            target="_blank"
            >&copy; {{ new Date().getFullYear() }} by Paris Institute for
            Advanced Study</v-btn
          >
          <v-tooltip top>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                text
                v-bind="attrs"
                href="https://github.com/intercontinental-academia/intercontinental-academia.github.io"
                target="_blank"
                small
                v-on="on"
              >
                <v-icon small color="white">mdi-github</v-icon></v-btn
              >
            </template>
            <span>This website is open source, under MIT licence</span>
          </v-tooltip></span
        >
      </div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  async created() {
    const programs = await this.$content('Programs').sortBy('_', 'asc').fetch()
    const current = programs[programs.length - 1]
    this.logo = [
      current.logo_colors['1_inner_circle_color'],
      current.logo_colors['2'],
      current.logo_colors['3'],
      current.logo_colors['4'],
      current.logo_colors['5_outer_circle_color'],
    ]
    console.log(this.logo)
  },
  data() {
    return {
      window,
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'HOME',
          to: '/',
        },
        {
          icon: 'mdi-numeric-4-box-multiple-outline',
          title: 'THE 4TH',
          to: '/about',
        },
        {
          icon: 'mdi-school',
          title: 'MENTORS',
          to: '/mentors',
        },
        {
          icon: 'mdi-school-outline',
          title: 'FELLOWS',
          to: '/fellows',
        },

        {
          icon: 'mdi-calendar',
          title: 'PROGRAM',
          to: '/program',
        },
      ],
      visible: false,
      primary: 'rgb(100, 53, 139)',
      logo: [],
    }
  },
  methods: {
    onIntersect(entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.visible = entries[0].isIntersecting
    },
  },
}
</script>
<style lang="scss">
.observer {
  position: absolute;
  top: 160px;
}
a {
  color: #5c3190 !important;
}
</style>
