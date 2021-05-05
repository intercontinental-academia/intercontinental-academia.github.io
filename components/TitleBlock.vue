<template>
  <div class="d-flex justify-space-between mb-12 mt-3">
    <div
      v-if="isSession"
      class="d-flex section-title justify-space-between"
      :style="
        'background-color: ' +
        $vuetify.theme.themes.light.primary +
        ';width:' +
        ($vuetify.breakpoint.mdAndUp ? '50%;' : 'auto;')
      "
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
      v-else
      class="section-title"
      :style="
        'background-color: ' +
        $vuetify.theme.themes.light.primary +
        ';width:' +
        ($vuetify.breakpoint.mdAndUp ? '50%;' : '100%;')
      "
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
    <div
      v-if="['program', 'fellows', 'mentors'].includes($route.name)"
      class="d-flex"
    >
      <v-expand-x-transition>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              v-show="!expand"
              text
              class="text-h4 py-8 my-0"
              nuxt
              v-bind="attrs"
              v-on="on"
              @click="showInput()"
              ><v-icon large :color="$vuetify.theme.themes.light.primary"
                >mdi-magnify</v-icon
              ></v-btn
            >
          </template>
          <span>Search in the program</span>
        </v-tooltip>
      </v-expand-x-transition>
      <v-expand-x-transition>
        <v-text-field
          v-show="expand"
          ref="search"
          v-model="searchString"
          height="64"
          large
          :style="'max-width:' + (expand ? '300px' : '0px') + ';'"
          placeholder="Search"
          outlined
          prepend-inner-icon="mdi-magnify"
          :color="$vuetify.theme.themes.light.primary"
          hide-details
          clearable
          @keyup="$emit('search', searchString)"
          @keydown.esc.prevent="
            expand = false
            $emit('esc')
          "
          @click:clear="
            expand = false
            $emit('esc')
          "
        />
      </v-expand-x-transition>
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
    return {
      expand: false,
      searchString: '',
    }
  },
  computed: {
    returnTooltip() {
      return this.previousName.length > 0
        ? 'Back to ' + this.previousName
        : 'Back to the program'
    },
  },
  mounted() {},
  methods: {
    showInput() {
      // Show the input component
      this.expand = true
      // Focus the component, but we have to wait
      // so that it will be showing first.
      this.$nextTick(() => {
        this.focusInput()
      })
    },

    focusInput() {
      this.$refs.search.focus()
    },
    onClickOutside() {
      this.expand = false
    },
  },
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
