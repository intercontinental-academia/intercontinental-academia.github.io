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
        {{ results.length > 1 ? 'results' : 'result' }}
      </div>
      <div v-else class="overline text-h6 d-flex flex-column align-center">
        <div>No result found matching "{{ searchString }}"</div>
        <v-btn outlined class="mt-3" @click="searchString = ''"
          >Cancel my search</v-btn
        >
      </div>
      <template v-for="session in sessions">
        <meeting-block
          v-for="(meeting, index) in results.filter(
            (rst) => rst.session.slug === session.slug
          )"
          :key="index"
          :item="meeting"
          :session="meeting.session"
          :search="searchString"
          :index="index"
        />
      </template>
    </template>
    <SessionBlock
      v-for="(item, index) in sessions"
      v-else
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
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
    return {
      sessions,
      programs: programs[0],
    }
  },
  data() {
    return {
      searching: false,
      searchString: '',
      results: [],
    }
  },
  watch: {
    async searchString(searchString) {
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
