import { createSelector } from '@reduxjs/toolkit'

const selectSelf = (state: any) => state.home

export const selector = {
    selectData: createSelector(selectSelf, (state) => {
        return state
    }),
}

export * from './slice'
