import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer, { UserStateType } from './modules/userReducer'
import ComponentsReducer, { ComponentStateType } from './modules/componentsReducer'

export type StoreStateType = {
    user: UserStateType
    components: ComponentStateType
}

const reducers = combineReducers({
    user: userReducer,
    components: ComponentsReducer,
})

const persistConfig = {
    key: 'redux',
    storage: storage,
    // whitelist: ['components'], // 白名单只保存某个仓库
    blacklist: ['components'], // 黑名单仅不保存某个仓库
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            //忽略了 Redux Persist 调度的所有操作类型
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store)
export default store

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector 