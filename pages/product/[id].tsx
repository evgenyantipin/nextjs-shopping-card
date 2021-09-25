import React from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import he from 'he'
import { NextPage } from 'next'
import { getProduct } from 'api/products'
import type { Product } from 'types/Product'
import ShopContext, { ContextProps } from 'context/ShopContext'
import Size from 'components/Size'

export const getServerSideProps = async ({ params }: { params: { id?: number } }) => {
  const id = String(params?.id)
  const data: Product = await getProduct(id)
  return {
    props: {
      product: data,
    },
  }
}

type Props = {
  product: Product
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter()
  const context = React.useContext<ContextProps>(ShopContext)
  const [selectedSize, setSelectedSize] = React.useState<string>('')
  const [showSelectedSizeError, setSelectedSizeError] = React.useState<boolean>(false)

  if (!product || Object.keys(product).length === 0) {
    return <Error statusCode={404} />
  }

  const renderHTML = (escapedHTML: string) =>
    React.createElement('div', { dangerouslySetInnerHTML: { __html: escapedHTML } })

  const selectSize = (e: React.SyntheticEvent<HTMLLabelElement>) => {
    const size = e.currentTarget.dataset.size
    if (size) setSelectedSize(size)
  }

  const addToCart = () => {
    if (!selectedSize) {
      setSelectedSizeError(true)
      return
    }
    context.addProductToCart(product, selectedSize)
    router.push('/cart')
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
        </div>

        <div>
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">{product.name}</h1>
            <div className="text-xl font-semibold text-gray-500">{product.price}</div>
            <div className="text-sm">{renderHTML(he.decode(product.description))}</div>
          </div>
          <div className="flex items-baseline mt-4 mb-3">
            <div className="space-x-2 flex">
              {product.sizes?.map((size) => (
                <Size key={size} size={size} selectSize={selectSize}/>
              ))}
            </div>
          </div>
          {!selectedSize && showSelectedSizeError && (
            <div className="text-sm text-red-500 mb-6"> Пожалуйста, укажите размер</div>
          )}
          <div className="flex space-x-3 mb-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button
                className="w-full flex items-center justify-center rounded-md border border-gray-300 p-3"
                type="button"
                onClick={addToCart}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
