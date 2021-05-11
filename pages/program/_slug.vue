<template>
  <div class="my-9">
    <TitleBlock
      :title="session.name.toUpperCase()"
      is-session
      :is-satellite="isSatellite"
      :next="next"
      :previous="previous"
      :next-name="nextName"
      :next-satellite="nextSatellite"
      :previous-name="previousName"
    ></TitleBlock>
    <meeting-block
      v-for="(item, index) in meetings"
      :key="index"
      :item="item"
      :session="session"
    />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content, params }) {
    console.log('params: ', params)
    const program = await $content('Programs')
      .sortBy('_', 'desc')
      .limit(1)
      .fetch()

    const sessions = await $content('Sessions')
      .where({
        'related-program': 'content' + program[0].path + '.md',
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()

    const session = sessions.find((item) => item.slug === params.slug)
    const index = sessions.findIndex((item) => item.slug === params.slug)
    console.log('index: ', index)

    console.log('session: ', session)

    const meetings = await $content('Meetings')
      .where({
        'related-session': 'content' + session.path + '.md',
      })
      .sortBy('start_date_and_time', 'asc')
      .fetch()
    const next =
      index < sessions.length - 1 ? '/program/' + sessions[index + 1].slug : ''
    const nextName = index < sessions.length - 1 ? sessions[index + 1].name : ''
    const previousName = index === 0 ? '' : sessions[index - 1].name
    const previous =
      index === 0 ? '/program/' : '/program/' + sessions[index - 1].slug

    return {
      session,
      sessions,
      meetings,
      next,
      previous,
      nextName,
      previousName,
      isSatellite: session.satellite,
      nextSatellite: next ? sessions[index + 1].satellite : false,
    }
  },
  mounted() {},
}
</script>
<style lang="scss">
.program-item {
  color: white !important;
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
