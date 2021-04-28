<template>
  <div class="my-9">
    <TitleBlock title="FELLOWS"></TitleBlock>
    <v-row v-for="(item, index) in fellows" :key="index" class="mt-12 mx-6">
      <v-col cols="4" justify="top" align="center">
        <v-avatar size="220">
          <img v-if="item.image" alt="Avatar" :src="item.image" />
          <v-icon
            v-else
            class="text-white"
            background-color="primary"
            :v-text="item.firstname[0] + item.lastname[0]"
          ></v-icon>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <p>{{ item.presentation }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const fellows = await $content('Fellows').sortBy('slug').fetch()
    return {
      fellows,
    }
  },
  mounted() {},
}
</script>
