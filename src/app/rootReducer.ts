'use client'
import { combineReducers } from '@reduxjs/toolkit'
import { reducer as home } from '@/stores/home'

const rootReducer = combineReducers({
    home,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
