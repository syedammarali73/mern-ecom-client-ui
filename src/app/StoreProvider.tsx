'use client'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/lib/store/store'
import { setInitialCart } from '@/lib/store/features/cart/cartSlice'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    // Create the store instance the first time this renders
    const [store] = useState<AppStore>(makeStore)

    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

    if (isLocalStorageAvailable) {
        const cartItems = window.localStorage.getItem('cartItems');

        try {
            const parsedItems = JSON.parse(cartItems as string)
            store.dispatch(setInitialCart(parsedItems))
        } catch (err) {
            console.error(err);
        }
    }

    return <Provider store={store}>{children}</Provider>
}