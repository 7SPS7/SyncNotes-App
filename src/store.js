import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Redux/PasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})