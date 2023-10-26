import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../redux/slices/userSlice"
import schoolReducer from "../redux/slices/schoolSlice"

export const store = configureStore({
  reducer: {
    user:userReducer,
    school:schoolReducer

  },
})

