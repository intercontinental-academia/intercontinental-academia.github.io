<template>
  <div class="my-9">
    <TitleBlock title="PROGRAM"></TitleBlock>
    <v-card
      v-for="(item, index) in sessions"
      :key="index"
      class="my-12"
      nuxt
      :to="'/program/' + item.slug"
    >
      <v-img
        class="white--text d-flex align-end"
        :src="item.image"
        height="500"
      >
        <v-row class="justify-space-between pb-9">
          <v-col cols="auto" class="justify-start align-start">
            <v-card-title
              class="text-h3 text-uppercase program-item"
              :style="'background-color:' + $vuetify.theme.themes.light.primary"
              >{{ item.name }}</v-card-title
            >
            <br />
            <div
              class="headline program-item"
              :style="'background-color:' + $vuetify.theme.themes.light.primary"
            >
              {{ item.date }}
            </div>
          </v-col>
          <v-col cols="auto" class="align-end">
            <v-card-title
              class="align-end program-item"
              :style="'background-color:' + $vuetify.theme.themes.light.primary"
              >[{{ item.location }}]</v-card-title
            >
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const programs = await $content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()
    console.log('programs[0].slug: ', programs[0].slug)
    const target = 'content' + programs[0].path + '.md'
    const sessions = await $content('Sessions')
      .where({
        'related-program': target,
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()
    console.log('sessions: ', sessions)
    console.log('programs: ', programs)
    return {
      sessions,
      programs: programs[0],
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
.program-item {
  color: white !important;
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
