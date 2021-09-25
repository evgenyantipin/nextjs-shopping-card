import fetch from 'isomorphic-unfetch'
import type { CartItem } from 'types/CartItem'

export const placeOrder = (cartItems: CartItem[]) => {
  return fetch('http://localhost:3000/checkout/placeOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ products: cartItems.map((p) => ({ id: p.id, size: p.size })) }),
  }).then((r) => r.json())
}
