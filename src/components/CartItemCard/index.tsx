import React from 'react'
import Link from 'next/link'
import type { CartItem } from 'types/CartItem'

type Props = {
  cartItem: CartItem
  removeCartItem: (e: React.SyntheticEvent<HTMLButtonElement>)  => void
}

const CartItemCard: React.FC<Props> = ({ cartItem, removeCartItem }) => {
  return (
    <div className="w-full mb-4 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
      <div className="w-full sm:w-1/5">
        <Link href={`/product/[id]?id=${cartItem.id}`} as={`/product/${cartItem.id}`}>
          <a>
            <img className="object-cover w-full h-48" src={cartItem.image} alt={cartItem.name} />
          </a>
        </Link>
      </div>
      <div className="flex-1 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{cartItem.name}</h4>

        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Цена {cartItem.price}</p>
        </div>

        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Размер {cartItem.size}</p>
        </div>

        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Кол-во {cartItem.quantity}</p>
          <div className="flex">
            <button
              onClick={removeCartItem}
              data-id={cartItem.id}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
