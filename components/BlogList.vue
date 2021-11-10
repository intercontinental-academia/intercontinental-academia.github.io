<template>
  <div class="my-9">
    <TitleBlock
      title="Blog"
      :search-string="searchString"
      @search="searchString = $event"
      @esc="searchString = ''"
    ></TitleBlock>
    <template
      v-if="searchString || ($route.query.tags && $route.query.tags.length)"
    >
      <div v-if="count > 0" class="overline mb-3">
        Searching
        <template v-if="$route.query.tags && $route.query.tags.length"
          >by tag <template v-if="searchString">and</template></template
        ><template v-if="searchString"> for "{{ searchString }}"</template> -
        {{ count }}
        {{ count > 1 ? 'results' : 'result' }}-<v-btn
          color="primary"
          class="pl-1"
          small
          text
          @click="$router.replace({ query: null })"
          >Cancel my search</v-btn
        >
      </div>
      <div v-else class="overline text-h6 d-flex flex-column align-center">
        <div>
          No result found matching
          <template v-if="searchString"
            >"{{ searchString }}"
            <b v-if="$route.query.tags && $route.query.tags.length"
              >and</b
            ></template
          >
          <template v-if="$route.query.tags && $route.query.tags.length"
            >your tags</template
          >
        </div>
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
    </template>
    <div v-else class="overline mx-3">
      {{ count + ' blog posts available' }}
    </div>
    <TagFilter />
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
      searchString: this.$route.query.search || '',
      results: [],
      pinnedPost: false,
      posts: [],
      pages: 1,
      current: this.$route.query.page || 1,
      count: 0,
    }
  },
  async fetch() {
    const rst = await getContent(
      'Blog',
      this.$content,
      this.$route.query,
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
  },
  watch: {
    async current() {
      const rst = await getContent(
        'Blog',
        this.$content,
        this.$route.query,
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
    },
    async '$route.query'(query) {
      if (!query.search) this.searchString = null
      const rst = await getContent(
        'Blog',
        this.$content,
        this.$route.query,
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
