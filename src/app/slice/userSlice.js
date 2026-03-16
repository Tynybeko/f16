import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  list: [],
  loading: false,
  error: null
}

export const fetchUserList = createAsyncThunk(`fetchAll/users`, async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return data
  } catch (err) {
  return  rejectWithValue('sdf')
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserList.rejected, (state) => {
        state.error = 'Ошибка при загрузке пользователей!'
        state.loading = false
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.list = action.payload
      })
  }
})


export default userSlice.reducer