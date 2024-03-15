'use client'
import { createSlice } from '@reduxjs/toolkit'
import { STATE_DEFAULT } from '@/utils/constants'
import * as homeActions from './actions'
import { extraBuilder } from '@/utils/store'

const initialState: any = {
    get: {
        ...STATE_DEFAULT,
    },
}

const slice = createSlice({
    name: 'productDevelopment',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder: Record<string, any>) => {
        extraBuilder(
            homeActions,
            homeActions.actions,
            homeActions.types,
            builder
        )
    },
})

// > Export
// * Action
export const actions = {
    ...slice.actions,
    ...homeActions,
}
// * Reducer
export const { reducer } = slice
