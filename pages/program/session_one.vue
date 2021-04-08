<template>
  <div class="my-9">
    <TitleBlock title="SESSION ONE"></TitleBlock>
    <v-btn color="primary" text x-small nuxt to="/program"
      ><v-icon left>mdi-arrow-left</v-icon>Back to the program</v-btn
    >
    <v-card v-for="(item, index) in events" :key="index" class="my-12">
      <v-row class="justify-space-between pb-9">
        <v-col cols="auto" class="justify-start align-start">
          <div class="headline program-item">{{ item.date }}</div>
        </v-col>
        <v-col cols="auto" class="align-end">
          <v-card-title class="align-end program-item"
            >[{{ item.place }}]</v-card-title
          >
        </v-col>

        <v-col cols="12" class="pa-3">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr v-for="(slot, index2) in item.items" :key="index2">
                  <td style="vertical-align: top">{{ slot[0] }}</td>
                  <td>{{ slot[1] }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const events = await $content('/program/schedule/opening').fetch()
    console.log('events: ', events)
    return {
      events: events.sort(function (a, b) {
        const textA = a.slug.toUpperCase()
        const textB = b.slug.toUpperCase()
        return textA < textB ? -1 : textA > textB ? 1 : 0
      }),
    }
  },
  mounted() {},
}
</script>
<style lang="scss">
.program-item {
  color: white !important;
  background-color: #5c3190;
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
