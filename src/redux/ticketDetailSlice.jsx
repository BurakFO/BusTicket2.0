import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedDepartureCityID: 1,
    selectedArrivalCityID: 5,
}

export const ticketDetailSlice = createSlice({
  name: 'ticketDetailSlice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {} = ticketDetailSlice.actions

export default ticketDetailSlice.reducer