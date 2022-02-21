import axios from "axios"

class DataService {
  apiClient
  constructor(baseURL) {
    if (baseURL) {
      this.apiClient = axios.create({
        baseURL: baseURL,
        headers: {
          "Content-type": "application/json",
        }
      })
    }
  }

  get(url) {
    return this.apiClient.get(url)
  }
}

export default DataService
