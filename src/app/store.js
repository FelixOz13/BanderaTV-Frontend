import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import commentReducer from '../features/comments/commentSlice'
import cardReducer from '../features/cards/cardSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    comments: commentReducer,
    cards: cardReducer,
  },
})