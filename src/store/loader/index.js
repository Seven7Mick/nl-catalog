import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"

const loader = {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
}

export default loader
