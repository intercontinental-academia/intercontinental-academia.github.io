<template>
  <v-card
    :id="(item.anchor && item.anchor.toLowerCase()) || item.post_title"
    class="pa-6 my-3"
    v-bind="$attrs"
  >
    <v-tooltip v-if="['blog', 'blog-page-page'].includes($route.name)" bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          icon
          v-bind="attrs"
          :href="'https://intercontinental-academia.org/blog/' + item.slug"
          target="_blank"
          rel="noopener noreferrer"
          :title="item.post_title"
          small
          class="float-right"
          v-on="on"
        >
          <v-icon>mdi-open-in-new</v-icon></v-btn
        >
      </template>
      <span>Open in a new tab</span>
    </v-tooltip>
    <v-card-subtitle class="pb-0">
      <v-tooltip
        v-if="
          index === null && ['blog', 'blog-page-page'].includes($route.name)
        "
        bottom
      >
        <template #activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">mdi-pin</v-icon>
        </template>
        <span>This post is pinned</span>
      </v-tooltip>
      {{
        new Date(item.date).toLocaleDateString('EN', {
          timezone: 'UTC',
        })
      }}
      <!--  +    ' - ' +
        new Date(item.date).toLocaleTimeString('EN', {
          hour: '2-digit',
          minute: '2-digit',
          timezone: 'UTC', 
      })-->
    </v-card-subtitle>
    <v-card-title>
      <span class="text-h4" v-html="highlight(item.post_title, search)"></span>
    </v-card-title>

    <div class="px-3">
      <v-chip v-for="(tag, index2) in item.tags" :key="index2" class="ma-2">
        {{ tag }}
      </v-chip>
    </div>

    <v-card-text>
      <v-row>
        <v-col cols="12">
          <YoutubeEmbed
            v-if="item.youtube_video_id"
            :yt="item.youtube_video_id"
            class="mb-9 ml-3"
          ></YoutubeEmbed
        ></v-col>
      </v-row>
      <OptimizedImage v-if="item.image" :src="item.image"> </OptimizedImage>
      <small v-if="item.copyright" class="muted caption"
        >&copy; {{ item.copyright }}</small
      >

      <nuxt-content :document="item" />
      <template v-if="item.authors.length">
        <div class="mb-3 px-3 font-italic">
          By
          <span v-for="(author, index2) in item.authors" :key="index2"
            >{{ author.name
            }}<template v-if="index < item.authors.length - 1"
              >,&nbsp;</template
            ></span
          >
        </div>
      </template>
      <SoundCloudEmbed
        v-for="(track, index2) in item.audio"
        :key="index2"
        :src="track"
      />
    </v-card-text>
  </v-card>
</template>
<script>
import { truncateString } from '~/assets/utils'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    truncateString(str = '') {
      return truncateString(str, 250)
    },
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
.nuxt-content p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.375rem !important;
  letter-spacing: 0.0071428571em !important;
}
</style>