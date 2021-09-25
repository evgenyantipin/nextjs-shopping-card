import React from 'react'
import { NextPage } from 'next'
import ShopContext from 'context/ShopContext'
import CartItemCard from 'components/CartItemCard'
import { placeOrder } from 'api/order'

const CartPage: NextPage = () => {
  const context = React.useContext(ShopContext)
  const [orderId, setOrderId] = React.useState<number | null>(null)

  const createOrder = async () => {
    const { orderId } = await placeOrder(context.cart)
    if (orderId) {
      setOrderId(orderId)
      context.clearCart()
    }
  }

  const removeCartItem = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.id)
    context.removeProductFromCart(id)
  }

  const getTotalPrice = () => {
    return (
      context.cart.reduce((acc, cartItem) => {
        return (acc += cartItem.quantity * cartItem.priceInCents)
      }, 0) / 100
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {orderId && (
        <div>
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
            Ваш заказ №{orderId} успешно оформлен!
          </h4>
        </div>
      )}

      {!orderId && context.cart.length === 0 && (
        <div>
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Корзина пуста</h4>
        </div>
      )}

      {!orderId && context.cart.length > 0 && (
        <>
          {context.cart.map((cartItem, index) => (
            <CartItemCard key={index} cartItem={cartItem} removeCartItem={removeCartItem} />
          ))}

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Итого</p>
              <p>{getTotalPrice()}$</p>
            </div>
            <div className="mt-6">
              <button
                onClick={createOrder}
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
