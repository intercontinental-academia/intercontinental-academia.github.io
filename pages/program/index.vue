<template>
  <div class="my-9">
    <TitleBlock
      title="PROGRAM"
      :search-string="searchString"
      @search="searchString = $event"
      @esc="searchString = ''"
    ></TitleBlock>
    <template v-if="searching">
      <div v-if="results.length > 0" class="overline">
        Searching for "{{ searchString }}" - {{ results.length }}
        {{ results.length > 1 ? 'results' : 'result' }}-<v-btn
          color="primary"
          class="pl-1"
          small
          text
          @click="
            $router.replace({ query: null })
            searchString = null
          "
          >Cancel my search</v-btn
        >
      </div>
      <div v-else class="overline text-h6 d-flex flex-column align-center">
        <div>No result found matching "{{ searchString }}"</div>
        <v-btn
          outlined
          class="mt-3"
          @click="
            searchString = ''
            $router.replace({ query: null })
          "
          >Cancel my search</v-btn
        >
      </div>
      <template v-for="session in sessions">
        <meeting-block
          v-for="(meeting, meetingIndex) in results.filter(
            (rst) => rst.session.slug === session.slug
          )"
          :key="meeting.title"
          :item="meeting"
          :session="meeting.session"
          :search="searchString"
          :i="meetingIndex"
        />
      </template>
    </template>
    <SessionBlock
      v-for="(item, index2) in sessions"
      v-else
      :key="index2"
      :item="item"
      :i="index2"
    />
  </div>
</template>
<script>
export default {
  async asyncData({ app, query, $content }) {
    console.log('app: ', query)
    const programs = await $content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()
    const target = 'content' + programs[0].path + '.md'
    const sessions = await $content('Sessions')
      .where({
        'related-program': target,
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()
    let results = []
    if (query.search) {
      console.log('SEARCHING')
      const rst = await $content('Meetings')
        .sortBy('start_date_and_time', 'asc')
        .search(query.search)
        .fetch()
      results = rst.map((item) => {
        return {
          ...item,
          session: sessions.find((meeting) => {
            return (
              item['related-session'] ===
              'content/Sessions/' + meeting.slug + '.md'
            )
          }),
        }
      })
    }
    return {
      sessions,
      programs: programs[0],
      results,
    }
  },
  data() {
    return {
      searching: this.$route.query.search || false,
      searchString: this.$route.query.search || '',
      results: [],
    }
  },
  watch: {
    async searchString(searchString) {
      console.log('searchString: ', searchString)
      if (!searchString) {
        this.searching = false
      } else {
        this.searching = true
        const results = await this.$content('Meetings')
          .sortBy('start_date_and_time', 'asc')
          .search(searchString)
          .fetch()
        this.results = results.map((item) => {
          return {
            ...item,
            session: this.sessions.find((meeting) => {
              return (
                item['related-session'] ===
                'content/Sessions/' + meeting.slug + '.md'
              )
            }),
          }
        })
      }
    },
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
