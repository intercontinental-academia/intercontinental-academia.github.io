<template>
  <div class="my-9">
    <TitleBlock
      title="Blog"
      :search-string="searchString"
      @search="searchString = $event"
      @esc="searchString = ''"
    ></TitleBlock>
    <template v-if="searching">
      <div v-if="posts.length > 0" class="overline">
        Searching for "{{ searchString }}" - {{ posts.length }}
        {{ posts.length > 1 ? 'results' : 'result' }}
      </div>
      <div v-else class="overline text-h6 d-flex flex-column align-center">
        <div>No result found matching "{{ searchString }}"</div>
        <v-btn outlined class="mt-3" @click="searchString = ''"
          >Cancel my search</v-btn
        >
      </div>
    </template>
    <post-block
      v-for="(post, index) in posts"
      :key="index"
      :item="post"
      :search="searchString"
      :index="index"
    />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const posts = await $content('Blog')
      .where({ published: true })
      .sortBy('date', 'asc')
      .fetch()
    console.log('posts: ', posts)
    return {
      posts,
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
        this.posts = await this.$content('Blog')
          .where({ published: true })
          .sortBy('date', 'asc')
          .fetch()
        this.searching = false
      } else {
        this.searching = true
        this.posts = await this.$content('Blog')
          .where({ published: true })
          .sortBy('date', 'asc')
          .search(searchString)
          .fetch()
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
