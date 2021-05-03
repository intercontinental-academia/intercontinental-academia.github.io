<template>
  <div class="my-9">
    <TitleBlock title="Fellows"></TitleBlock>
    <template v-for="(item, index) in fellows">
      <people-block :item="item" :key="index"></people-block>
    </template>
  </div>
</template>
<script>
import PeopleBlock from '~/components/PeopleBlock.vue'

export default {
  components: { PeopleBlock },

  async asyncData({ app, $content }) {
    const fellows = await $content('Fellows').sortBy('slug').fetch()
    return {
      fellows,
    }
  },
  mounted() {},
}
</script>
