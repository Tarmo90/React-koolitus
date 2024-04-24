import { createSlice, configureStore } from '@reduxjs/toolkit'

const cartSumSlice = createSlice({
  name: 'cartSum',
  initialState: {
    value: 0 //localstorage.getitem = k6ik tooted ja arvuta kogusumma
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    deduct: (state, action) => {
      state.value -= action.payload
    },
    empty: state => {
      state.value = 0
    }
  }
})

export const { add, deduct, empty } = cartSumSlice.actions

export default configureStore({
  reducer: {
    cartSum: cartSumSlice.reducer
  }
})