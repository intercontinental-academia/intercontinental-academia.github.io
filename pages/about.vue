<template>
  <div class="my-9">
    <TitleBlock :title="concept.title"></TitleBlock>

    <div class="px-12">
      <div class="text-h4 font-weight-black text-uppercase my-6">
        {{ concept.subtitle }}
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <nuxt-content :document="concept" />
        </v-col>
        <v-col cols="12" md="6">
          <nuxt-content :document="concept" />
        </v-col>
      </v-row>
    </div>
    <v-row justify="center">
      <v-col cols="12" sm="4">
        <div class="d-flex justify-center">
          <logo
            :size="100"
            :colors="['#f05b23', '#f48120', '#5bc3be', '#00aeac', '#00687b']"
            class="d-block"
          />
        </div>
        <div class="d-flex justify-center">on&nbsp;<b>TIME</b></div>

        Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
        Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
        hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
        hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
        Hodor hodor hodor...
      </v-col>
      <v-col cols="12" sm="4">
        <div class="d-flex justify-center">
          <logo
            :size="100"
            :colors="['#0b4b8b', '#2f8bc1', '#64a79f', '#178f8f', '#087288']"
            class="d-block"
          />
        </div>
        <div class="d-flex justify-center">on &nbsp;<b>HUMAN DIGNITY</b></div>
        Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
        Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
        hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
        hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
        Hodor hodor hodor...
      </v-col>
      <v-col cols="12" sm="4">
        <div class="d-flex justify-center">
          <logo
            :size="100"
            :colors="['#fdcc0a', '#f9a51a', '#f16f31', '#ec0d6c', '#b61552']"
            class="d-block"
          />
        </div>
        <div class="d-flex justify-center">
          on&nbsp;<b>LAWS: RIGIDITY AND DYNAMICS</b>
        </div>
        Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor!
        Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor -
        hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor
        hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor...
        Hodor hodor hodor...
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="THE 4TH EDITION"></TitleBlock>
    <v-row justify="center">
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          INTELLIGENCE AND ARTICIAL INTELLIGENCE
        </div>
        <p>
          Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
          Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor;
          hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor,
          hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR!
          Hodor hodor... Hodor hodor hodor...
        </p>
      </v-col>
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          ORGANIZERS
        </div>
        <p>
          Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
          Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor;
          hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor,
          hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR!
          Hodor hodor... Hodor hodor hodor...
        </p>
      </v-col>
      <v-col cols="12" class="px-12">
        <div class="text-h4 font-weight-black text-uppercase my-6">
          Institutions
        </div>
        <p>
          Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
          Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor;
          hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor,
          hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR!
          Hodor hodor... Hodor hodor hodor...
        </p>
      </v-col>
    </v-row>
    <TitleBlock class="mt-9" title="PARTNERS"></TitleBlock>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const concept = await $content('pages/about/concept').fetch()
    const previous = await $content('pages/about/previous').fetch()
    return {
      concept,
      previous,
    }
  },
  mounted() {},
}
</script>
