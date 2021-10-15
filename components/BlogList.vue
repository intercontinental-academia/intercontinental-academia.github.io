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
    <div v-else class="overline">{{ count + ' blog posts available' }}</div>
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
        :value="current"
        :length="pages"
        circle
        @input="
          $router.push({
            name: 'blog-page-page',
            params: { page: +$event },
          })
        "
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
      current: +this.$route.params.page || 1,
      count: 0,
    }
  },
  async fetch() {
    const rst = await getContent(
      'Blog',
      this.$content,
      this.$route.params,
      false
    )
    this.count = rst.count
    this.pages = rst.pages
    this.pinnedPost = rst.pinnedPost
    this.posts = rst.posts
  },
  watch: {
    async searchString(searchString) {
      const rst = await getContent(
        'Blog',
        this.$content,
        this.$route.params,
        searchString || null
      )

      this.count = rst.count
      this.pages = rst.pages
      this.pinnedPost = rst.pinnedPost
      this.posts = rst.posts
      if (!searchString) {
        this.searching = false
      } else {
        this.searching = true
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
