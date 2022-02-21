import { createStore } from 'vuex'

import catalog from './catalog'
import loader from './loader'
import modal from './modal'

const store = createStore({
  modules: { catalog, loader, modal }
})

export default store
