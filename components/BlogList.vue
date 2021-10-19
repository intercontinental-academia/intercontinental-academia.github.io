<template>
  <div class="my-9">
    <TitleBlock
      title="Blog"
      :search-string="searchString"
      @search="searchString = $event"
      @esc="searchString = ''"
    ></TitleBlock>
    <template v-if="searching">
      <div v-if="posts && posts.length > 0" class="overline">
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
    <div v-else class="overline mx-3">
      {{ count + ' blog posts available' }}
    </div>
    <template v-if="pinnedPost">
      <post-block :item="pinnedPost" :search="searchString" raised />
    </template>

    <post-block
      v-for="(post, index) in posts"
      :key="index"
      :item="post"
      :search="searchString"
      :index="index"
    />
    <div v-if="pages > 1" class="text-center">
      <v-pagination
        :v-model="current"
        :value="+$route.query.page || 1"
        :length="pages"
        circle
        @input="updatePage($event)"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import { getContent } from '~/assets/utils'
export default {
  data() {
    return {
      searching: false,
      searchString: '',
      results: [],
      pinnedPost: false,
      posts: [],
      pages: 1,
      current: this.$route.query.page || 1,
      count: 0,
    }
  },
  async fetch() {
    const rst = await getContent('Blog', this.$content, this.current, false)
    if (rst) {
      this.count = rst.count
      this.pages = rst.pages
      this.pinnedPost = rst.pinnedPost
      this.posts = rst.posts
    } else {
      this.count = 0
      this.pages = 1
      this.pinnedPost = false
      this.posts = []
    }
  },
  watch: {
    async current() {
      const rst = await getContent(
        'Blog',
        this.$content,
        this.current,
        this.searchString || null
      )

      if (rst) {
        this.count = rst.count
        this.pages = rst.pages
        this.pinnedPost = rst.pinnedPost
        this.posts = rst.posts
      } else {
        this.count = 0
        this.pages = 1
        this.pinnedPost = false
        this.posts = []
      }
      if (!this.searchString) {
        this.searching = false
      } else {
        this.searching = true
      }
    },
    async searchString(searchString) {
      const rst = await getContent(
        'Blog',
        this.$content,
        this.$route.query,
        searchString || null
      )
      if (rst) {
        this.count = rst.count
        this.pages = rst.pages
        this.pinnedPost = rst.pinnedPost
        this.posts = rst.posts
      } else {
        this.count = 0
        this.pages = 1
        this.pinnedPost = false
        this.posts = []
      }
      if (!searchString) {
        this.searching = false
      } else {
        this.searching = true
      }
    },
  },
  mounted() {},
  methods: {
    async updatePage(page) {
      this.current = +page
      await this.$router.push({
        name: 'blog',
        query: { ...this.$route.query, page },
      })
      window.scrollTo(0, 0)
    },
  },
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
