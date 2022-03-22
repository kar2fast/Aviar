import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import collectionReducer from '../features/collections/collectionSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionReducer
  }
})
