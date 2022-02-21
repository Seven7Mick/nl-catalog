import catalogService from '@/utils/api/catalogService'

const actions = {
  async fetchCategories ({ commit, dispatch }, payload) {
    const { cityId } = payload
    try {
      dispatch('loader/setLoading', true, { root: true })
      const categories = await catalogService.getCategories(cityId)
      commit('SET_CATEGORIES', categories)
      commit('SET_CITY_ID', cityId)
    } catch (error) {
      console.log('fetchCategories', error);
    } finally {
      dispatch('loader/setLoading', false, { root: true })
    }
  },

  async fetchCities ({ commit }, payload) {
    const { term } = payload
    try {
      const cities = await catalogService.getCities(term)
      commit('SET_CITIES', cities.splice(0,5))
    } catch (error) {
      console.log('fetchCities', error);
    } 
  },

  async fetchProducts ({ commit, dispatch }, payload) {
    try {
      dispatch('loader/setLoading', true, { root: true })
      const products = await catalogService.getProducts(payload)
      commit('SET_PRODUCTS', products)
    } catch (error) {
      console.log('fetchCities', error);
    } finally {
      dispatch('loader/setLoading', false, { root: true })
    }
  },

  clearCities ({ commit }) {
      commit('SET_CITIES', [])
  }
}

export default actions
