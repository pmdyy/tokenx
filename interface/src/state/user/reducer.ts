import { createSlice } from '@reduxjs/toolkit'
import { ConnectionType } from 'connection'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  selectedWallet?: ConnectionType
  timestamp: number
}

export const initialState: UserState = {
  selectedWallet: undefined,
  timestamp: currentTimestamp(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet
    },
  },
})

export const { updateSelectedWallet } = userSlice.actions
export default userSlice.reducer
