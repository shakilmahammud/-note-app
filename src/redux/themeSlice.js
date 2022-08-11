import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    name: 'theme',
    initialState:{
        mode:'light',
    },
    reducers: {
      toggleTheme: (state,action) => {
        state.mode = action.payload;
      
    },
}
  })

  export const { toggleTheme} = themeSlice.actions;
  export const selectTheme = state => state.theme.mode;
  export default themeSlice.reducer