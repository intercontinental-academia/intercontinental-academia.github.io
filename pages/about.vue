<template>
  <div class="my-9">
    <TitleBlock :title="concept.title"></TitleBlock>

    <div class="px-12">
      <div class="text-h4 font-weight-black text-uppercase my-6">
        {{ concept.subtitle }}
      </div>
      <v-row>
        <v-col cols="12">
          <nuxt-content :document="concept" />
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col v-for="(item, index) in editions" :key="item.slug" cols="12">
        <div v-if="index < editions.length - 1">
          <div class="d-flex">
            <logo
              :size="100"
              :colors="Object.values(item.logo_colors)"
              class="d-block"
            />
            <div class="flex-column" justify="bottom">
              <div>ICA {{ item._ }} - {{ item.title.toUpperCase() }}</div>
              <div v-for="session in item.sessions" :key="session.date">
                {{ session.location }}: {{ session.date }}
              </div>
            </div>
          </div>
          <nuxt-content :document="item" />
        </div>
      </v-col>
    </v-row>
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
            lg="6"
            class="d-flex"
          >
            <v-avatar class="ma-3" size="125" tile rounded>
              <v-img :src="item.image"></v-img>
            </v-avatar>
            <div>
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
        <v-row>
          <v-col
            v-for="item in steering"
            :key="item.slug"
            cols="12"
            lg="6"
            class="d-flex"
          >
            <v-avatar class="ma-3" size="125" tile rounded>
              <v-img :src="item.image"></v-img>
            </v-avatar>
            <div>
              <b>{{ item.firstname }} {{ item.lastname }}</b>
              <p>{{ item.presentation }}</p>
            </div>
          </v-col>
        </v-row>
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
            <v-avatar class="ma-3" size="125" tile rounded>
              <v-img contain :src="item.logo"></v-img>
            </v-avatar>
            <nuxt-content :document="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="PARTNERS"></TitleBlock>
    <v-avatar
      v-for="item in [1, 2, 3, 4]"
      :key="item"
      color="indigo"
      size="200"
      class="mx-6"
    >
      <v-icon dark> mdi-account-circle </v-icon>
    </v-avatar>
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
