export default {
  state: {
    waybills: [
      {
        id: 111,
        date: '20.04.2021',
        number: '11',
        type: 'RUED',
      },
      {
        id: 20,
        date: '22.04.2021',
        number: '33',
        type: 'RUED',
      },
      {
        id: 30,
        date: '24.04.2021',
        number: '22',
        type: 'RUED',
      },
    ],
    valueFilter: null,
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
    sortingWaybills(state, type) {
      function getNumber(str) {
        return +str.replace(/[^\d]/g, '');
      }

      const sortType = {
        IdAscending: () => state.waybills.sort((a, b) => b.id - a.id),
        IdDescending: () => state.waybills.sort((a, b) => a.id - b.id),
        dateAscending: () => {
          state.waybills.sort((a, b) => getNumber(b.date) - getNumber(a.date));
        },
        dateDescending: () => {
          state.waybills.sort((a, b) => getNumber(a.date) - getNumber(b.date));
        },
      };

      sortType[type]();
    },
    openResultFilter(state, value) {
      state.valueFilter = value;
    },
    closeResultFilter(state) {
      state.valueFilter = null;
    },
  },
  getters: {
    getWaybills(state) {
      if (state.valueFilter !== null) {
        return state.waybills.filter((el) => el.number === state.valueFilter);
      }
      return state.waybills;
    },
  },
  actions: {},
};
