<template>
  <div>
    <TitleBlock title="Media"></TitleBlock>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card
          :class="{
            'pa-6 mb-6': $vuetify.breakpoint.mdAndUp,
          }"
          :flat="$vuetify.theme.isDark"
        >
          <v-card-title class="justify-center font-weight-black text-uppercase">
            Contact
          </v-card-title>
          <v-card-text
            :class="{ 'pa-2': $vuetify.breakpoint.smAndDown }"
            class="subtitle-1"
            color="black"
          >
            <v-list three-line subheader align="left">
              <v-list-item
                :class="{ 'pl-2': $vuetify.breakpoint.smAndDown }"
                href="mailto:Claire.Jeandel@paris-iea.fr"
              >
                <v-list-item-avatar>
                  <v-icon large> mdi-account-circle </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Claire Jeandel</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon color="grey"> mdi-phone </v-icon
                    >&nbsp;+&#051;&#051;&#032;(&#048;)&#049;&#032;&#053;&#054;&#032;&#056;&#049;&#032;&#048;&#057;&#032;&#050;&#048;
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon color="grey"> mdi-email </v-icon
                    >&nbsp;&#099;&#108;&#097;&#105;&#114;&#101;&#046;&#106;&#101;&#097;&#110;&#100;&#101;&#108;&#064;&#112;&#097;&#114;&#105;&#115;&#045;&#105;&#101;&#097;&#046;&#102;&#114;
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-card
          :class="{
            'pa-6 mb-6': $vuetify.breakpoint.mdAndUp,
          }"
          :flat="$vuetify.theme.isDark"
        >
          <v-card-title class="justify-center font-weight-black text-uppercase">
            Podcasts
          </v-card-title>
          <v-card-text
            :class="{
              'mb-6': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-list v-if="podcasts.length" two-line subheader>
              <v-list-item
                v-for="(post, index) in podcasts"
                :key="index"
                :to="'/blog/' + post.slug"
                nuxt
              >
                <v-list-item-content>
                  <v-list-item-title>{{ post.post_title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{
                      new Date(post.date).toLocaleDateString('EN', {
                        timezone: 'UTC',
                      }) +
                      ' - ' +
                      new Date(post.date).toLocaleTimeString('EN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        timezone: 'UTC',
                      })
                    }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div v-else class="text-h6">No video available yet.</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-6 mb-6" :flat="$vuetify.theme.isDark">
          <v-card-title class="justify-center font-weight-black text-uppercase">
            Videos
          </v-card-title>
          <v-card-text :class="{ 'pa-2': $vuetify.breakpoint.smAndDown }">
            <v-list v-if="videos.length" two-line subheader>
              <v-list-item
                v-for="(video, index) in videos"
                :key="index"
                :to="'/blog/' + video.slug"
                nuxt
                :class="{ 'pl-2': $vuetify.breakpoint.smAndDown }"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ video.post_title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{
                      new Date(video.date).toLocaleDateString('EN', {
                        timezone: 'UTC',
                      }) +
                      ' - ' +
                      new Date(video.date).toLocaleTimeString('EN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        timezone: 'UTC',
                      })
                    }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div v-else class="text-h6">No video available yet.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData({ app, $content }) {
    const posts = await $content('Blog')
      .where({ published: true })
      .sortBy('date')
      .fetch()
    const podcasts = posts.filter((item) => item.audio && item.audio.length)
    const videos = posts.filter(
      (item) => item.youtube_video_id && item.youtube_video_id.length
    )
    console.log('podcasts: ', podcasts)
    console.log('videos: ', videos)
    return {
      podcasts,
      videos,
    }
  },
  data() {
    return {
      contact: false,
    }
  },
  mounted() {},
}
</script>
