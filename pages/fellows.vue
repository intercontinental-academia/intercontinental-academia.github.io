<template>
  <div class="my-9">
    <TitleBlock title="Fellows"></TitleBlock>
    <v-row
      v-for="(item, index) in fellows"
      :key="index"
      class="mt-12 mx-6"
      :class="{ 'mx:6': $vuetify.breakpoint.mdAndUp }"
    >
      <v-col
        cols="3"
        col-md-offset="1"
        justify="center"
        align="center"
        class="d-flex flex-column align-center"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-avatar size="160" class="mb-3">
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
            <span>Check the Wikipedia page of the fellow </span>
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
            <span>Follow this fellow on Twitter</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <div class="text-h5 font-weight-black">
          {{ item.firstname }} {{ item.lastname }}
        </div>
        <div class="text-h6 mb-3">
          {{ item.title }}
        </div>
        <p>{{ item.presentation }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const fellows = await $content('Fellows').sortBy('slug').fetch()
    return {
      fellows,
    }
  },
  mounted() {},
}
</script>
