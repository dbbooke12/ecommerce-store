import Vuex from 'vuex'
import firebase from 'firebase/app';
import 'firebase/auth';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      session: false
    }),
    mutations: {
      SET_SESSION (state, session) {
        state.session = session;
      }
    },
    getters: {
        session: state => state.session
    },
    actions: {
        setSession({ commit }) {
            firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            console.log('change');
            commit('SET_SESSION', user || false);
          });
        }
    }
  });
};

export default createStore