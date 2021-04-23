export default {
  state: {
    waybills: [
      {
        id: 1,
        date: '20.04.2021',
        number: '11',
        type: 'RUED',
      },
      {
        id: 2,
        date: '20.04.2021',
        number: '33',
        type: 'RUED',
      },
      {
        id: 3,
        date: '20.04.2021',
        number: '22',
        type: 'RUED',
      },
    ],
  },
  mutations: {
    createWaybill(state, newWaybill) {
      state.waybills.push(newWaybill);
    },
    deleteWaybill(state, id) {
      state.waybills = state.waybills.filter((el) => el.id !== id);
    },
    editWaybill(state, editedElem) {
      state.waybills = state.waybills.map((el) => (el.id === editedElem.id ? editedElem : el));
    },
  },
  getters: {
    allWaybills(state) {
      return state.waybills;
    },
  },
  actions: {},
};
