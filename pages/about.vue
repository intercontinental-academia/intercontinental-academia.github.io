<template>
  <div class="my-9 mx-3">
    <TitleBlock
      class="mt-9"
      :title="'THE ' + editions.length + 'TH EDITION'"
    ></TitleBlock>
    <v-row justify="center">
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
            xl="6"
            class="d-flex"
          >
            <v-avatar
              v-if="$vuetify.breakpoint.smAndUp"
              class="my-3 mr-6"
              size="125"
              tile
              rounded
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
              <b>{{ item.firstname }} {{ item.lastname }}</b>
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
            <v-avatar
              v-if="$vuetify.breakpoint.smAndUp"
              class="my-3 mr-6"
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
            <nuxt-content :document="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="PARTNERS"></TitleBlock>

    <div class="mb-12">
      <v-avatar
        v-for="item in [1, 2, 3, 4]"
        :key="item"
        color="indigo"
        size="100"
        class="mx-6"
      >
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const concept = await $content('Pages_content/about/concept').fetch()
    const editions = await $content('Programs').sortBy('_', 'asc').fetch()
    const chairs = await $content('Chairs').sortBy('slug', 'asc').fetch()
    const institutions = await $content('Institutions')
      .sortBy('slug', 'asc')
      .fetch()
    const steering = await $content('Steering_Committee')
      .sortBy('slug', 'asc')
      .fetch()
    const current = editions[editions.length - 1]
    console.log('editions: ', editions)
    return {
      concept,
      editions,
      current,
      chairs,
      steering,
      institutions,
    }
  },
  mounted() {},
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
