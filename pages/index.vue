<template>
  <div>
    <logo
      :size="240"
      :colors="['#ffdc00', '#fba421', '#c43688', '#793e79', '#5c3190']"
      style="position: absolute; top: -80px; z-index: 5"
    />
    <div
      class="text-h4 text-center text-uppercase mt-12"
      style="color: #5c3190"
    >
      INTERCONTINENTAL ACADEMIA
    </div>
    <div class="d-flex justify-end align-end flex-column">
      <div class="count text-h4">4th</div>

      <div class="theme text-h4">INTELLIGENCE AND ARTIFICIAL INTELLIGENCE</div>

      <div class="by text-h4">BY UBIAS</div>
    </div>
    <v-carousel v-model="model" cycle>
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row class="my-9">
      <v-col cols="auto" class="text-h4" offset="2"
        >10 Mentors for 15 fellows</v-col
      >
      <v-col cols="auto" class="text-h4" offset="4"
        >One group, two institutions</v-col
      >
      <v-col cols="auto" class="text-h4" offset="6"
        >From Paris to Belo Horizonte</v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
}
</script>
<style lang="scss">
.count,
.theme,
.by {
  display: inline;
  padding: 0.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.theme {
  color: white !important;
  background-color: #5c3190;
  padding: 1.5rem 80px 1.5rem 2rem;
}
.count {
  color: white !important;
  background-color: #3a1d60;
  padding: 1rem;
  margin-bottom: -20px;
  z-index: 2;
}
</style>