import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  schoolname:"my-school",
  teachers:[],
  alumini:[],
}

export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    
    updateName: (state, action) => {
      state.schoolname = action.payload
    },
    addTeacher:(state,action)=>{
        state.teachers.push(action.payload)
    },
    addAlumini:(state,action)=>{
        state.alumini.push(action.payload)
    }  
},
})


export const {updateName,addTeacher,addAlumini } = schoolSlice.actions
export default schoolSlice.reducer