<template>
  <v-card class="my-12" nuxt :to="'/program/' + item.slug">
    <OptimizedImage class="white--text" :src="item.image" height="500">
      <v-row class="justify-space-between align-end pb-9">
        <v-col cols="auto" class="justify-start align-start">
          <v-card-title
            class="text-h4 text-uppercase program-item"
            :style="
              'background-color:' +
              (!!item.satellite
                ? '#fba421'
                : $vuetify.theme.themes.light.primary)
            "
            >{{ item.name }}</v-card-title
          >
          <br />
          <div
            class="headline program-item"
            :style="
              'background-color:' +
              (!!item.satellite
                ? '#fba421'
                : $vuetify.theme.themes.light.primary)
            "
          >
            {{ item.date }}
          </div>
        </v-col>
        <v-col cols="auto" class="align-end">
          <v-card-title
            class="align-end program-item headline"
            :style="
              'background-color:' +
              (!!item.satellite
                ? '#fba421'
                : $vuetify.theme.themes.light.primary)
            "
            >[{{ item.location }}]</v-card-title
          >
        </v-col>
      </v-row>
    </OptimizedImage>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
