'use client'
import Store from '@/redux/store/Store'
import React from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }) => {
    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}

export default StoreProvider