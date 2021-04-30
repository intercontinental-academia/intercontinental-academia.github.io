<template>
  <div class="d-flex justify-space-between mb-12 mt-3">
    <div
      class="d-flex section-title justify-space-between"
      :style="'background-color: ' + $vuetify.theme.themes.light.primary"
      v-if="isSession"
    >
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn text icon x-large :to="previous" nuxt v-bind="attrs" v-on="on">
            <v-icon color="white" x-large>mdi-chevron-left</v-icon></v-btn
          >
        </template>
        <span>{{ returnTooltip }}</span>
      </v-tooltip>
      <div class="content text-h4 pa-3 mr-2" v-text="title"></div>
    </div>
    <div
      class="section-title"
      :style="'background-color:' + $vuetify.theme.themes.light.primary"
      v-else
    >
      <div class="content text-h4 pa-3 mr-2" v-text="title"></div>
    </div>
    <div v-if="isSession && next.length" class="d-flex align-center">
      <v-btn
        text
        class="text-h4 py-8 my-0"
        x-large
        :to="next"
        :color="$vuetify.theme.themes.light.primary"
        nuxt
        >{{ nextName }} <v-icon x-large>mdi-chevron-right</v-icon></v-btn
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isSession: {
      type: Boolean,
      default: false,
    },
    previous: {
      type: String,
      default: '',
    },
    next: {
      type: String,
      default: '',
    },
    nextName: {
      type: String,
      default: '',
    },
    previousName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    returnTooltip() {
      console.log(
        this.previousName.length > 0
          ? 'Back to ' + this.previousName
          : 'Back to the program'
      )
      return this.previousName.length > 0
        ? 'Back to ' + this.previousName
        : 'Back to the program'
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
div.section-title {
  color: #fff;
  border-radius: 0 !important;
  align-items: center;
  width: 50%;
  text-align: right;
  text-transform: uppercase;
  content {
    text-transform: uppercase;
  }
}
</style>
