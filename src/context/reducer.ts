export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CLEAR_PRODUCTS = 'CLEAN_PRODUCTS'
import type { Product } from 'types/Product'
import type { GlobalState } from 'types/GlobalState'

const addProductToCart = (product: Product, size: string, state: GlobalState) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id && item.size === size,
  )
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1, size })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

const removeProductFromCart = (productId: number, state: GlobalState) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

const clearCart = (state: GlobalState) => {
  return { ...state, cart: [] }
}

type ActionType = {
  type: string
  size?: string
  productId?: number
  product?: Product
}

export const shopReducer = (state: GlobalState, action: ActionType) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (action.product && action.size) return addProductToCart(action.product, action.size, state)
    case REMOVE_PRODUCT:
      if (action.productId) return removeProductFromCart(action.productId, state)
    case CLEAR_PRODUCTS:
      return clearCart(state)
    default:
      return state
  }
}
