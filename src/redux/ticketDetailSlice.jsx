import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedDepartureCityID: 1,
  selectedArrivalCityID: 5,
  //selectedTripDateID: ""

}

export const ticketDetailSlice = createSlice({
  name: 'ticketDetailSlice',
  initialState,
  reducers: {

    setDepartureCityID: (state, action) => {
      state.selectedDepartureCityID = action.payload
    },
    
    setArrivalCityID: (state, action) => {
      state.selectedArrivalCityID = action.payload
    },



  },
})

// Action creators are generated for each case reducer function
export const { setDepartureCityID, setArrivalCityID } = ticketDetailSlice.actions

export default ticketDetailSlice.reducer