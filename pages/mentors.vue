<template>
  <div class="my-9">
    <TitleBlock
      title="Mentors"
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
        <v-btn outlined class="mt-3" @click="searchString = ''"
          >Cancel my search</v-btn
        >
      </div>
      <people-block
        v-for="(people, index) in results"
        :key="index"
        :item="people"
        :search="searchString"
      />
    </template>
    <template v-for="(item, index) in mentors" v-else>
      <people-block :key="index" :item="item" mentor></people-block>
    </template>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const mentors = await $content('Mentors').sortBy('slug').fetch()
    return {
      mentors,
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
      if (!searchString) {
        this.searching = false
      } else {
        this.searching = true
        this.results = await this.$content('Mentors')
          .sortBy('start_date_and_time', 'asc')
          .search(searchString)
          .fetch()
      }
    },
  },
  mounted() {},
}
</script>
