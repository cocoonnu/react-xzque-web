import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer, { UserStateType } from './modules/userReducer'

export type StoreStateType = {
    user: UserStateType
}

const reducers = combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: 'redux',
    storage: storage,
    // whitelist: ['CollapsedReducer'],//白名单只保存CollapsedReducer
    // blacklist:['CollapsedReducer'],//黑名单仅不保存CollapsedReducer
}

const persistedRedcer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedRedcer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            //忽略了 Redux Persist 调度的所有操作类型
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store)
export default store

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 