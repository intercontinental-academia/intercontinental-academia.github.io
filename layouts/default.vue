<template>
  <v-app>
    <v-app-bar clipped-left fixed app height="80" color="white" flat>
      <v-row no-gutters justify="center">
        <v-col
          cols="12"
          lg="8"
          xl="6"
          class="d-flex align-end"
          :class="$vuetify.breakpoint.mdAndUp ? 'align-end' : 'align-center'"
        >
          <template v-if="!($route.name === 'index' && visible)">
            <v-btn
              text
              height="80"
              width="80"
              class="ml-3"
              nuxt
              to="/"
              color="white"
            >
              <logo
                :size="80"
                :colors="[
                  '#ffdc00',
                  '#fba421',
                  '#c43688',
                  '#793e79',
                  '#5c3190',
                ]"
                class="d-block"
              />
            </v-btn>
            <nuxt-link
              text
              to="/"
              class="ml-6 headline font-weight-bold pb-2"
              style="text-decoration: none; color: #5c3190"
            >
              INTERCONTINENTAL ACADEMIA
            </nuxt-link>
          </template>

          <v-spacer></v-spacer>
          <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.smAndDown"
            @click.stop="drawer = !drawer"
          />
          <v-tabs v-if="$vuetify.breakpoint.mdAndUp" right optional>
            <v-tab nuxt to="/about" class="font-weight-bold">About</v-tab>
            <v-tab nuxt to="/mentors" class="font-weight-bold">Mentors</v-tab>
            <v-tab nuxt to="/fellows" class="font-weight-bold">Fellows</v-tab>
            <v-tab nuxt to="/program" class="font-weight-bold">Program</v-tab>
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
      color="#5c3190"
      class="justify-center flex-column white--text pt-12 pb-4"
    >
      <div class=""><span>Contact</span> - <span>Credits</span></div>
      <br />
      <span
        >&copy; {{ new Date().getFullYear() }} by Paris Institute for Advanced
        Study</span
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
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      visible: false,
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
</style>
