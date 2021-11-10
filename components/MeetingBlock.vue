<template>
  <div>
    <div v-if="['program'].includes($route.name) && i === 0">
      <span
        class="text-h5 mt-6"
        v-html="highlight(item.session.name, search)"
      ></span>
      <v-divider></v-divider>
    </div>

    <v-card class="my-12 mx-3">
      <v-row class="justify-space-between pb-9">
        <v-col cols="auto" class="justify-start align-start">
          <div
            class="headline program-item"
            :style="
              'background-color:' +
              (!!item.public ? '#fba421' : $vuetify.theme.themes.light.primary)
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
              (!!item.public ? '#fba421' : $vuetify.theme.themes.light.primary)
            "
            >[{{ session.location }}]
          </v-card-title>
        </v-col>

        <v-col
          cols="12"
          :class="$vuetify.breakpoint.mdAndUp ? 'px-12' : 'px-3'"
        >
          <v-card-text>
            <div class="text-h5 mb-6 font-weight-black">
              <v-chip v-if="item.public" class="mr-2" label> PUBLIC </v-chip>
              {{ item.time }}
              <span v-html="highlight(item.name, search)"></span>
            </div>
            <YoutubeEmbed
              v-if="item.youtube_video_id"
              :yt="item.youtube_video_id"
              class="mb-6"
            ></YoutubeEmbed>
            <nuxt-content-highlight :document="item" :highlight-text="search">
            </nuxt-content-highlight>
            <div class="d-flex">
              <v-btn
                v-for="file in item.attachements"
                :key="file"
                :href="file"
                target="_blank"
              >
                <v-icon left> mdi-file-pdf-box </v-icon>
                {{ file.substring(1) }}
              </v-btn>
            </div>
            <div v-if="item.apply_link" class="d-flex justify-end">
              <v-btn
                :href="item.apply_link"
                target="_blank"
                color="#fba421"
                class="white--text font-weight-bold"
              >
                Subscribe!
              </v-btn>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    session: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: '',
    },
    i: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {}
  },
  computed: {
    titleData() {
      return this.highlight(this.item.time + ' ' + this.item.name, this.search)
    },
  },
  updated() {},
  methods: {
    highlight: (word = '', query) => {
      const check = new RegExp(query, 'ig')
      return word.replace(check, function (matchedText, a, b) {
        return (
          '<strong style="color: darkslategray;background-color: yellow;">' +
          matchedText +
          '</strong>'
        )
      })
    },
  },
}
</script>
<style lang="scss">
.highlight {
  background-color: #ff9;
}
</style>
