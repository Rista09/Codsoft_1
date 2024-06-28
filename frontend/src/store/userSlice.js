import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : null
}
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserDetails : (state,action)=>{
        console.log("Payload:>>>", action.payload);
        state.user = action.payload
        console.log("User state: --->", state.user);
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setUserDetails } = userSlice.actions
  
  export default userSlice.reducer