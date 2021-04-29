<template>
  <div class="my-9">
    <TitleBlock title="MENTORS"></TitleBlock>
    <v-row v-for="(item, index) in mentors" :key="index" class="mt-12 mx-6">
      <v-col
        cols="4"
        justify="center"
        align="center"
        class="d-flex flex-column align-center"
      >
        <v-avatar size="160">
          <img v-if="item.image" alt="Avatar" :src="item.image" />
          <v-icon
            v-else
            class="text-white"
            background-color="primary"
            :v-text="item.firstname[0] + item.lastname[0]"
          ></v-icon>
        </v-avatar>
        <div class="flex-row justify-center">
          <v-tooltip bottom v-if="item.wikipedia">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon text v-bind="attrs" v-on="on">
                <v-icon>mdi-wikipedia</v-icon></v-btn
              >
            </template>
            <span>Check the Wikipedia page of the mentor </span>
          </v-tooltip>
          <v-tooltip bottom v-if="item.linkedin">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon text v-bind="attrs" v-on="on">
                <v-icon>mdi-linkedin</v-icon></v-btn
              >
            </template>
            <span>Get in touch on Linkedin</span>
          </v-tooltip>
          <v-tooltip bottom v-if="item.twitter">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon text v-bind="attrs" v-on="on">
                <v-icon>mdi-twitter</v-icon></v-btn
              >
            </template>
            <span>Follow this mentor on Twitter</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col cols="8">
        <div class="text-h5 font-weight-black">
          {{ item.firstname }} {{ item.lastname }}
        </div>
        <div class="text-h5 mb-3">
          {{ item.title }}
        </div>
        <p>{{ item.presentation }}</p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> References </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-content :document="item" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const mentors = await $content('Mentors').sortBy('slug').fetch()
    return {
      mentors,
    }
  },
  mounted() {},
}
</script>
