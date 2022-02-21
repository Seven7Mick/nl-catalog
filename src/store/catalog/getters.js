const getters = {
  getCategories: (state) => state.categories,
  getCityId: (state) => state.cityId,
  getCities: (state) => state.cities,
  getCategory: (state) => (slug) => state.categories.find(el => el.slug === slug) || {},
  getProducts: (state) => state.products,
  getSortingProducts: (state) => (subSlug) => {
    if (!subSlug) {
      return state.products
    }
    const result = state.products.filter(el => {
      for (const tag of el.tags) {
        if (tag.slug === subSlug) {
          return true
        }
      }
    }) || []
    return result
  },
}

export default getters
