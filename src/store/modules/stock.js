const state = {
  funds: 10000,
  stocks: {
    BMW: {
      id: 0,
      price: 110,
    },
    Apple: {
      id: 1,
      price: 100,
    },
    IBM: {
      id: 2,
      price: 90,
    },
    Microsoft: {
      id: 3,
      price: 120,
    },
  },
};

const getters = {
  getStocks: (state) => {
    return state.stocks;
  },
  getFunds: (state) => {
    return state.funds;
  },
};

const mutations = {
  buystock: (state, payload) => {
    state.funds -= payload * state.stocks["Apple"].price;
  },
};

const actions = {
  buystock: ({ commit }, payload) => {
    commit("buystock", payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
