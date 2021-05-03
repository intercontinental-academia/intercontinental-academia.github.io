<template>
  <v-app>
    <v-app-bar
      clipped-left
      fixed
      app
      height="80"
      color="white"
      :flat="
        !($route.name === 'index' && !visible && $vuetify.breakpoint.mdAndUp)
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
              <logo
                :size="80"
                :colors="[
                  $store.state.logo[0],
                  $store.state.logo[1],
                  $store.state.logo[2],
                  $store.state.logo[3],
                  $store.state.logo[4],
                ]"
                class="d-block ml-3"
              />
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
              ICA
            </nuxt-link>
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
      <v-container fluid :class="{ 'pa-0': $vuetify.breakpoint.mdAndDown }">
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
      class="justify-center flex-column white--text pt-8 pb-8"
    >
      <div class="d-flex"><Contact /><PrivacyPolicy /><Credits /></div>
      <br />
      <span class="mt-3 d-flex align-items-center text-uppercase"
        ><v-btn
          color="white"
          text
          href="https://www.paris-iea.fr/en/"
          target="_blank"
          >&copy; {{ new Date().getFullYear() }} by Paris Institute for Advanced
          Study</v-btn
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
    </v-footer>
  </v-app>
</template>
<script>
export default {
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
    }
  },
  async created() {
    const programs = await this.$content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()
    this.$store.commit('setColors', {
      primary: programs[0].primary_color,
      colors: [
        programs[0].logo_colors['1_inner_circle_color'],
        programs[0].logo_colors['2'],
        programs[0].logo_colors['3'],
        programs[0].logo_colors['4'],
        programs[0].logo_colors['5_outer_circle_color'],
      ],
    })

    this.$vuetify.theme.themes.light.primary = programs[0].primary_color
    console.log('programs[0].primary_color: ', programs[0].primary_color)
    console.log(
      'this.$vuetify.theme.themes.light.primary: ',
      this.$vuetify.theme.themes.light.primary
    )
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
.v-application a {
  color: var(--v-primary-base);
}
</style>
