export const state = () => ({
  primary: '#5c3190',
  logo: ['#ffdc00', '#fba421', '#c43688', '#793e79', '#5c3190'],
})

export const mutations = {
  setColors(state, values) {
    state = values
  },
}
