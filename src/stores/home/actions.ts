import { createAsyncThunk } from '@reduxjs/toolkit'
import getHomePage from '@/api/api'

// List
export const get = createAsyncThunk(
    '/',
    async (payload: object, { rejectWithValue }) => {
        try {
            const data = await getHomePage()
            console.log('1111 :>> ', data)
            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data)
            }
            return rejectWithValue(error)
        }
    }
)

export const types = ['get']
export const actions = ['get']
