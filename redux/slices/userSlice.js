import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"my-name",
  role:"student",
  username:"user-name",
  email:"myemail@gmail.com",
  
}

export const uSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    updateName: (state, action) => {
      state.name = action.payload
    },
  },
})


export const {updateName } = uSlice.actions
export default uSlice.reducer