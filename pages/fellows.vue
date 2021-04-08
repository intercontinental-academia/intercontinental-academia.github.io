<template>
  <div class="my-9">
    <TitleBlock title="FELLOWS"></TitleBlock>
    <v-row v-for="(item, index) in fellows" :key="index" class="mt-12">
      <v-col cols="4">
        <v-avatar size="100%">
          <img v-if="item.image" alt="Avatar" :src="item.image" />
          <v-icon v-else v-text="item.firstname[0] + item.lastname[0]"></v-icon>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <p><nuxt-content :document="item" /></p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const fellows = await $content('/fellows').fetch()
    return {
      fellows,
    }
  },
  mounted() {},
}
</script>
