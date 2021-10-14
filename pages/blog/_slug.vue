<template>
  <div>
    <v-breadcrumbs
      nuxt
      :items="[
        {
          text: 'Blog',
          disabled: false,
          href: '/blog',
        },
        {
          text: item.post_title,
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
      ]"
    >
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <PostBlock :item="item" flat />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content, params }) {
    const item = await $content('/Blog', params.slug).fetch()
    return { item }
  },
  data() {
    return {}
  },
  created() {},
}
</script>
