<template>
  <div class="my-9">
    <TitleBlock title="MENTORS"></TitleBlock>
    <template v-for="(item, index) in mentors">
      <people-block mentor :item="item" :key="index"></people-block>
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
  mounted() {},
}
</script>
