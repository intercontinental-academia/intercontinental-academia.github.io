<template>
  <div class="my-9">
    <TitleBlock :title="concept.title" class="mt-6"></TitleBlock>
    <div class="px-12">
      <div class="text-h4 font-weight-black text-uppercase my-6">
        {{ concept.subtitle }}
      </div>
      <v-row>
        <v-col cols="12">
          <nuxt-content id="conceptText" :document="concept" />
        </v-col>
      </v-row>
    </div>
    <v-row class="px-12">
      <v-col v-for="(item, index) in programs" :key="item.slug" cols="12">
        <div v-if="index < programs.length - 1">
          <div class="d-flex mb-6">
            <logo
              :size="100"
              :colors="Object.values(item.logo_colors)"
              class="d-block"
            />
            <div class="flex-column align-self-center ml-6" justify="bottom">
              <div class="text-h5 font-weight-black">
                ICA {{ item._ }} - {{ item.title.toUpperCase() }}
                <v-tooltip v-if="item.website" bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      text
                      icon
                      v-bind="attrs"
                      :href="item.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="item.title"
                      small
                      v-on="on"
                    >
                      <v-icon small>mdi-open-in-new</v-icon></v-btn
                    >
                  </template>
                  <span
                    >Visit the website of ICA {{ item._ }} -
                    {{ item.title }}</span
                  >
                </v-tooltip>
              </div>
              <div
                v-for="session in item.sessions"
                :key="session.date"
                class="font-italic"
              >
                {{ session.location }}: {{ session.date }}
              </div>
            </div>
          </div>
          <nuxt-content :document="item" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const concept = await $content('Pages_content/about/concept').fetch()
    const programs = await $content('Programs').sortBy('_', 'asc').fetch()
    const current = programs[programs.length - 1]

    programs.forEach(async (item) => {
      const target = 'content' + item.path + '.md'
      item.sessions = await $content('Sessions')
        .where({
          'related-program': target,
        })
        .sortBy('start_date_and_time', 'asc')
        .fetch()
    })

    return {
      concept,
      programs,
      current,
    }
  },
}
</script>
