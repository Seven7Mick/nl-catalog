import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"

const bridge = {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
}

export default bridge
