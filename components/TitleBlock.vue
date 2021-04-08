<template>
  <div class="section-title text-h4 pa-3 mr-2">{{ title }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
div.section-title {
  text-align: right;
  background-color: #592991 !important;
  width: 50%;
  text-transform: uppercase;
  color: #fff;
  border-radius: 0 !important;
}
</style>
