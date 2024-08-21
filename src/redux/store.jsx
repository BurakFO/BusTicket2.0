import { configureStore } from '@reduxjs/toolkit'
import ticketDetailSliceReducer from './ticketDetailSlice'

export const store = configureStore({
  reducer: {
    ticketDetailSlice: ticketDetailSliceReducer,
  },
})