<template>
  <v-menu>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            icon
            v-bind="attrs"
            class="ml-3"
            v-on="{ ...tooltip, ...menu }"
          >
            <v-icon large color="white">mdi-rss</v-icon>
          </v-btn>
        </template>
        <span>RSS, Atom and JSON feeds</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in feeds"
        :key="index"
        nuxt
        :href="item.url"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      feeds: [
        {
          name: 'RSS',
          url: '/blog/rss.xml',
        },
        {
          name: 'Atom',
          url: '/blog/atom.xml',
        },
        {
          name: 'Json',
          url: '/blog/feed.json',
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
