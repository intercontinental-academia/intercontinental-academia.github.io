<template>
  <div class="my-9">
    <TitleBlock
      class="mt-9"
      :title="
        'About the ' +
        current._ +
        ([, 'st', 'nd', 'rd'][(current._ / 10) % 10 ^ 1 && current._ % 10] ||
          'th') +
        ' edition'
      "
    ></TitleBlock>
    <v-row justify="center" class="mr-3">
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          {{ current.title }}
        </div>
        <nuxt-content :document="current" />
      </v-col>
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">CHAIRS</div>
        <v-row>
          <v-col
            v-for="item in chairs"
            :key="item.slug"
            cols="12"
            class="d-flex"
          >
            <v-avatar
              v-if="$vuetify.breakpoint.smAndUp"
              class="mt-5 mr-6"
              size="125"
              :color="
                item.image.length
                  ? 'transparent'
                  : $vuetify.theme.themes.light.primary
              "
            >
              <v-img
                v-if="item.image"
                :src="item.image"
                :alt="item.firstname + ' ' + item.lastname"
              ></v-img>
              <span v-else class="white--text headline"
                >{{ item.firstname[0] }} {{ item.lastname[0] }}</span
              >
            </v-avatar>
            <div class="mt-3">
              <div class="text-h5 font-weight-black">
                <div :id="slugifyItem(item.lastname)" class="anchor"></div>

                {{ item.firstname }} {{ item.lastname }}
              </div>
              <div class="text-h6 mb-3">
                {{ item.title_and_institution }}
              </div>
              <p>{{ item.presentation }}</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          Steering committee
        </div>
        <ul>
          <li v-for="item in steering" :key="item.slug">
            <b>{{ item.firstname }} {{ item.lastname }}</b>
            - {{ item.presentation }}
          </li>
        </ul>
      </v-col>
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          Institutions
        </div>
        <v-row>
          <v-col
            v-for="item in institutions"
            :key="item.slug"
            cols="12"
            class="d-flex"
            justify="center"
          >
            <v-card
              v-if="$vuetify.breakpoint.smAndUp"
              class="my-3 mr-6"
              flat
              :href="item.url"
              target="_blank"
            >
              <v-avatar
                size="125"
                tile
                rounded
                :color="
                  item.logo.length
                    ? 'transparent'
                    : $vuetify.theme.themes.light.primary
                "
              >
                <v-img
                  v-if="item.logo"
                  :src="item.logo"
                  :alt="item.name"
                  contain
                ></v-img>
                <span v-else class="white--text headline">{{ item.name }}</span>
              </v-avatar>
            </v-card>
            <div class="flex-column align-content-start">
              <div
                class="d-flex flex-row text-h5 font-weight-black align-center"
              >
                {{ item.name }}
                <v-tooltip v-if="item.url" bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      text
                      icon
                      v-bind="attrs"
                      :href="item.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="item.name"
                      small
                      v-on="on"
                    >
                      <v-icon small>mdi-open-in-new</v-icon></v-btn
                    >
                  </template>
                  <span>Visit the website of {{ item.name }}</span>
                </v-tooltip>
              </div>

              <nuxt-content :document="item" />

              <small v-if="item.copyright" class="muted caption"
                >Image of &copy; {{ item.copyright }}</small
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="PARTNERS"></TitleBlock>

    <div class="mb-12">
      <v-tooltip v-for="item in partners" :key="item.name" bottom>
        <template #activator="{ on, attrs }">
          <v-card
            flat
            :href="item.url"
            target="_blank"
            v-bind="attrs"
            class="d-inline"
            v-on="on"
            ><v-avatar
              :color="item.logo_background_color"
              size="200"
              class="mx-6"
            >
              <v-img
                v-if="item.logo"
                :src="item.logo"
                :alt="item.name"
                contain
              ></v-img> </v-avatar
          ></v-card>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </div>
  </div>
</template>
<script>
import { slugify } from '~/assets/utils'

export default {
  async asyncData({ app, $content }) {
    const concept = await $content('Pages_content/about/concept').fetch()
    const editions = await $content('Programs').sortBy('_', 'asc').fetch()
    const chairs = await $content('Chairs').sortBy('order', 'asc').fetch()
    const partners = await $content('Partners_and_Sponsors')
      .sortBy('slug', 'asc')
      .fetch()
    const institutions = await $content('Institutions')
      .sortBy('slug', 'asc')
      .fetch()
    const steering = await $content('Steering_Committee')
      .sortBy('slug', 'asc')
      .fetch()
    const current = editions[editions.length - 1]
    const programs = await $content('Programs').sortBy('_', 'asc').fetch()

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
      concept,
      editions,
      current,
      chairs,
      steering,
      institutions,
      partners,
    }
  },
  mounted() {},
  methods: {
    slugifyItem(item) {
      return slugify(item)
    },
  },
}
</script>
<style scopped>
#conceptText {
  -webkit-columns: 500px 2;
  /* Chrome, Safari, Opera */
  -moz-columns: 500px 2;
  /* Firefox */
  columns: 500px 2;
}
</style>
