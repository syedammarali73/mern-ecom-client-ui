'use client'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/lib/store/store'
import { setInitialCart } from '@/lib/store/features/cart/cartSlice'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [store] = useState<AppStore>(makeStore)

    useEffect(() => {
        const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
        if (isLocalStorageAvailable) {
            const cartItems = window.localStorage.getItem('cartItems');
            try {
                const parsedItems = JSON.parse(cartItems as string)
                if (Array.isArray(parsedItems)) {
                    store.dispatch(setInitialCart(parsedItems))
                }
            } catch (err) {
                console.error(err);
            }
        }
    }, [store]);

    return <Provider store={store}>{children}</Provider>
}