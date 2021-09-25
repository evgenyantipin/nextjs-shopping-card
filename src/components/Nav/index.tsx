import React, { useContext } from 'react'
import Link from 'next/link'
import ShopContext from 'context/ShopContext'
import { ContextProps } from 'context/ShopContext'

const Nav: React.FC = () => {
  const context = useContext(ShopContext)

  const cartItemsCount = (context: ContextProps) => {
    return context.cart.reduce((count, curItem) => {
      return count + curItem.quantity
    }, 0)
  }

  return (
    <nav className="bg-white shadow-lg m-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="md:flex items-center space-x-1">
              <Link href="/">
                <a className="py-4 px-2 text-green-500">Магазин</a>
              </Link>
            </div>
          </div>

          <div className="md:flex items-center space-x-3 ">
            <Link href="/cart">
              <a className="relative inline-block py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartItemsCount(context)}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
