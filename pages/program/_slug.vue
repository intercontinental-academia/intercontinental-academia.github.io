<template>
  <div class="my-9">
    <TitleBlock
      :title="event.name.toUpperCase()"
      is-session
      :next="next"
      :previous="previous"
      :next-name="nextName"
      :previous-name="previousName"
    ></TitleBlock>
    <v-card
      v-for="(item, index) in event.meetings"
      :key="index"
      class="my-12 mx-3"
    >
      <v-row class="justify-space-between pb-9">
        <v-col cols="auto" class="justify-start align-start">
          <div class="headline program-item">{{ item.date }}</div>
        </v-col>
        <v-col cols="auto" class="align-end">
          <v-card-title class="align-end program-item"
            >[{{ event.location }}]</v-card-title
          >
        </v-col>

        <v-col cols="12" class="px-12">
          <v-card-text>
            <b> {{ item.time + ' ' + item.title }}</b>
            <p>{{ item.description }}</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { slugify } from '~/assets/utils'
export default {
  async asyncData({ app, $content, params }) {
    const program = await $content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()

    const event = program[0].sessions.find(
      (item) => slugify(item.name) === params.slug
    )
    const index = program[0].sessions.findIndex(
      (item) => slugify(item.name) === params.slug
    )
    const next =
      index < program[0].sessions.length - 1
        ? '/program/' + slugify(program[0].sessions[index + 1].name)
        : ''

    const nextName =
      index < program[0].sessions.length - 1
        ? program[0].sessions[index + 1].name
        : ''
    const previousName = index === 0 ? '' : program[0].sessions[index - 1].name

    const previous =
      index === 0
        ? '/program/'
        : '/program/' + slugify(program[0].sessions[index - 1].name)

    return {
      event,
      next,
      previous,
      nextName,
      previousName,
    }
  },
  mounted() {},
}
</script>
<style lang="scss">
.program-item {
  color: white !important;
  background-color: #5c3190;
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
