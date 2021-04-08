<template>
  <div class="my-9">
    <TitleBlock title="PROGRAM"></TitleBlock>
    <v-card
      v-for="(item, index) in events"
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
            <v-card-title class="text-h3 text-uppercase program-item">{{
              item.name
            }}</v-card-title>
            <br />
            <div class="headline program-item">{{ item.date }}</div>
          </v-col>
          <v-col cols="auto" class="align-end">
            <v-card-title class="align-end program-item"
              >[{{ item.place }}]</v-card-title
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
    const events = await $content('program').fetch()
    return {
      events,
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
