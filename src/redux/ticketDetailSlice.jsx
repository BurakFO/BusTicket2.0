import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedDepartureCityID: 1,
  selectedArrivalCityID: 5,
  selectedTripDateString: "",

}

export const ticketDetailSlice = createSlice({
  name: 'ticketDetailSlice',
  initialState,
  reducers: {

    setDepartureCityID: (state, action) => {
      state.selectedDepartureCityID = action.payload;
    },
    
    setArrivalCityID: (state, action) => {
      state.selectedArrivalCityID = action.payload;
    },

    setTripDateString: (state, action) => {
      state.selectedTripDateString = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { setDepartureCityID, setArrivalCityID, setTripDateString } = ticketDetailSlice.actions

export default ticketDetailSlice.reducer