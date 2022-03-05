import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cars: ['Modal 3', 'Model Y', 'Model S', 'Model X'],
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {

    }
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;