import { createStore } from 'vuex'

import authStore from '../modules/auth/store/auth';

// Create a new store instance.
const store = createStore({
    modules:{
        authStore,
    }
})

export default store;