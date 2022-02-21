import DataService from ".";

class CatalogService extends DataService {
  constructor () {
    super('https://nlstar.com/ru/api/catalog3/v1/')
  }

  async getCategories(cityId) {
    const result = await this.get(`menutags?city_id=${cityId}`)
    return result.data.tags
  }

  async getCities(term) {
    const result = await this.get(`city?term=${term}&country=ru`)
    return result.data.data
  }

  async getProducts(payload) {
    const { slug, cityId } = payload
    const result = await this.get(`menutags/${slug}?city_id=${cityId}`)
    return result.data.products
  }
}

export default new CatalogService()
