import { configureStore } from '@reduxjs/toolkit'

import listasReducer from './reducers/listas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    listas: listasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
