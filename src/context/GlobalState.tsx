import React, { useReducer } from 'react'
import type { Product } from 'types/Product'
import ShopContext from './ShopContext'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCTS } from './reducer'

type Props = {
  children: React.ReactNode
}

const GlobalState: React.FC<Props> = ({ children }) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] })

  const addProductToCart = (product: Product, size: string) => {
    dispatch({ type: ADD_PRODUCT, product: product, size })
  }

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_PRODUCTS })
  }

  return (
    <ShopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default GlobalState
