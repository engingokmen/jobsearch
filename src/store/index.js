import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joblist: null,
    joblistLoading: false,
    joblistError: false,
    jobdetail: null,
    jobdetailLoading: false,
    jobdetailError: false
  },
  mutations: {
    SET_JOBLIST_DATA(state, joblistData) {
      state.joblist = joblistData;
    },
    SET_JOBLIST_LOADING(state, loading) {
      state.joblistLoading = loading;
    },
    SET_JOBLIST_ERROR(state, error) {
      state.joblistError = error;
    },
    SET_JOBDETAIL_DATA(state, detail) {
      state.jobdetail = detail;
    },
    SET_JOBDETAIL_LOADING(state, loading) {
      state.jobdetailLoading = loading;
    },
    SET_JOBDETAIL_ERROR(state, error) {
      state.jobdetailError = error;
    }
  },
  actions: {
    getJoblist({ commit }) {
      fetch("/api/joblist")
        .then(res => {
          commit("SET_JOBLIST_LOADING", true);
          return res.json();
        })
        .then(data => {
          commit("SET_JOBLIST_DATA", data.items);
        })
        .catch(() => {
          commit("SET_JOBLIST_ERROR", true);
        })
        .finally(() => {
          commit("SET_JOBLIST_LOADING", false);
        });
    },
    getJobdetail({ commit }, payload) {
      fetch(`/api/jobdetail/${payload.id}`)
        .then(res => {
          commit("SET_JOBDETAIL_LOADING", true);
          return res.json();
        })
        .then(data => {
          commit("SET_JOBDETAIL_DATA", data);
        })
        .catch(() => {
          commit("SET_JOBDETAIL_ERROR", true);
        })
        .finally(() => {
          commit("SET_JOBDETAIL_LOADING", false);
        });
    }
  },
  getters: {
    getListFiltered: state => (searchLocation, searchKeyword) => {
      if (searchLocation != null) {
        return state.joblist.filter(item => {
          return (
            item.cityName
              .toLocaleLowerCase("tr")
              .match(searchLocation.toLocaleLowerCase("tr")) !== null
          );
        });
      } else if (searchKeyword != null) {
        return state.joblist.filter(item => {
          return (
            Object.values(item).filter(x => {
              return (
                String(x)
                  .toLocaleLowerCase("tr")
                  .match(searchKeyword.toLocaleLowerCase("tr")) !== null
              );
            }).length !== 0
          );
        });
      } else {
        return state.joblist;
      }
    }
  }
});
