<template>
  <div class="my-9">
    <TitleBlock
      :title="session.name.toUpperCase()"
      is-session
      :next="next"
      :previous="previous"
      :next-name="nextName"
      :previous-name="previousName"
    ></TitleBlock>
    <v-card v-for="(item, index) in meetings" :key="index" class="my-12 mx-3">
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
              <v-chip v-if="item.public" class="mr-2" label> PUBLIC </v-chip
              >{{ item.time + ' ' + item.name }}
            </div>
            <YoutubeEmbedded
              v-if="item.youtube_video_id"
              :yt="item.youtube_video_id"
              class="mb-6"
            ></YoutubeEmbedded>
            <nuxt-content :document="item" />
            <div class="d-flex">
              <template v-for="file in item.attachements">
                <v-btn :key="file" :href="file" target="_blank">
                  <v-icon left> mdi-file-pdf </v-icon>
                  {{ file.substring(1) }}
                </v-btn>
              </template>
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
  async asyncData({ app, $content, params }) {
    console.log('params: ', params)
    const program = await $content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()

    const sessions = await $content('Sessions')
      .where({
        'related-program': 'content' + program[0].path + '.md',
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()

    const session = sessions.find((item) => item.slug === params.slug)
    const index = sessions.findIndex((item) => item.slug === params.slug)
    console.log('index: ', index)

    console.log('session: ', session)

    const meetings = await $content('Meetings')
      .where({
        'related-session': 'content' + session.path + '.md',
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()
    const next =
      index < sessions.length - 1 ? '/program/' + sessions[index + 1].slug : ''
    const nextName = index < sessions.length - 1 ? sessions[index + 1].name : ''
    const previousName = index === 0 ? '' : sessions[index - 1].name
    const previous =
      index === 0 ? '/program/' : '/program/' + sessions[index - 1].slug

    return {
      session,
      sessions,
      meetings,
      next,
      previous,
      nextName,
      previousName,
    }
  },
  mounted() {},
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
