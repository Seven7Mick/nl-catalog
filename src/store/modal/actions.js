const actions = {
  modalShow ({ commit }, payload) {
    commit('SET_IS_SHOW', true)
    if (payload.key) {
      commit('SET_CURRENT_MODAL_KEY', payload.key)
    }
    commit('SET_OPTIONS', payload)
  },
  modalHide ({ commit }) {
    commit('SET_IS_SHOW', false)
    commit('SET_CURRENT_MODAL_KEY', '')
    commit('SET_OPTIONS', {})
  },
}

export default actions
