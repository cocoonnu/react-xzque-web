import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserStateType = {
    username: string
    nickname: string
}

const initialState: UserStateType = {
    username: '',
    nickname: ''
}

const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        setUserState: (state: UserStateType, action: PayloadAction<UserStateType>) => {
            return action.payload
        },

        clearUserState: () => {
            return initialState
        }
    }
})

export const { setUserState, clearUserState } = userSlice.actions
export default userSlice.reducer