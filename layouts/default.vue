<template>
  <v-app>
    <v-app-bar
      clipped-left
      fixed
      app
      height="80"
      color="white"
      :elevate-on-scroll="$route.name !== 'index'"
      :flat="$route.name === 'index' && visible && $vuetify.breakpoint.mdAndUp"
    >
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="8" xl="6" class="d-flex align-center">
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
                id="svg8"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                width="50.432003"
                height="21.344009"
                viewBox="0 0 13.343467 5.647269"
                version="1.1"
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
                    id="text835"
                    xml:space="preserve"
                    :style="
                      'font-style: normal;font-variant: normal;font-weight: normal;font-stretch: normal;font-size: 8.46667px;line-height: 1.25;font-family: Petrona;letter-spacing: 0px;word-spacing: 0px;fill:' +
                      $vuetify.theme.themes.light.primary +
                      ';fill-opacity: 1;stroke: none;stroke-width: 0.264583;'
                    "
                    x="52.429337"
                    y="102.28076"
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
            <v-spacer></v-spacer>
            <v-menu left bottom offset-y>
              <template #activator="{ on, attrs }">
                <v-tab
                  v-bind="attrs"
                  class="headline primary--text"
                  offset-y="10"
                  v-on="on"
                >
                  About
                  <v-icon color="primary">mdi-chevron-down</v-icon>
                </v-tab>
              </template>

              <v-list>
                <v-list-item nuxt to="/about/concept" class="px-2">
                  <v-list-item-title
                    class="headline primary--text text-uppercase py-3"
                  >
                    Concept
                  </v-list-item-title>
                </v-list-item>
                <v-list-item nuxt to="/about/ica4" class="px-2">
                  <v-list-item-title
                    class="headline primary--text text-uppercase py-3"
                  >
                    ICA 4
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-tab nuxt to="/mentors" class="headline">Mentors</v-tab>
            <v-tab nuxt to="/fellows" class="headline">Fellows</v-tab>
            <v-tab nuxt to="/program" class="headline">Program</v-tab>
            <v-tab nuxt to="/blog" class="headline">Blog</v-tab>
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
      :padless="$vuetify.breakpoint.smAndDown"
      app
      :color="$vuetify.theme.themes.light.primary"
      class="justify-center flex-column white--text mt-16 py-6"
    >
      <v-row justify="center" no-gutters>
        <v-col cols="12" md="auto" class="text-center">
          <v-btn
            color="white"
            text
            href="mailto:info@intercontinental-academia.org"
            >Contact</v-btn
          >
        </v-col>
        <v-col cols="12" md="auto" class="text-center">
          <v-btn color="white" text nuxt to="/pressroom">Pressroom</v-btn>
        </v-col>
        <v-col cols="12" md="auto">
          <PrivacyPolicy />
        </v-col>
        <v-col cols="12" md="auto"> <Credits /> </v-col
      ></v-row>

      <span class="d-flex align-center text-uppercase"
        ><v-btn
          color="white"
          text
          href="https://www.paris-iea.fr/en/"
          max-width="90vw"
          target="_blank"
          >&copy; {{ new Date().getFullYear() }} by Paris
          {{
            $vuetify.breakpoint.smAndDown
              ? 'IAS'
              : 'Institute for Advanced Study'
          }}
        </v-btn>
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
              <v-icon color="white">mdi-github</v-icon></v-btn
            >
          </template>
          <span>This website is open source, under MIT licence</span>
        </v-tooltip></span
      >
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'HOME',
          to: '/',
        },
        {
          icon: 'mdi-numeric-4-box-multiple-outline',
          title: 'ABOUT',
          to: '/about/ica4',
        },
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'CONCEPT',
          to: '/about/concept',
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
        {
          icon: 'mdi-post',
          title: 'BLOG',
          to: '/blog',
        },
      ],
      visible: false,
      primary: 'rgb(100, 53, 139)',
      logo: [],
    }
  },
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
    this.primary = current.primary_color
  },
  mounted() {},
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
