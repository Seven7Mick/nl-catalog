const mutations = {
  SET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  SET_CITY_ID (state, payload) {
    state.cityId = payload
  },
  SET_CITIES (state, payload) {
    state.cities = payload
  },
  SET_PRODUCTS (state, payload) {
    state.products = payload
  },
}

export default mutations
