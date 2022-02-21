const mutations = {
  SET_IS_SHOW: (state, payload) => (state.isShow = payload),
  SET_CURRENT_MODAL_KEY: (state, payload) => (state.currentModalKey = payload),
  SET_OPTIONS: (state, payload) => (state.options = payload),
}

export default mutations
