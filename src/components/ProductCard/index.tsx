import React from 'react'
import Link from 'next/link'
import type { Product } from 'types/Product'

type Props = {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-2/6 mb-4 p-4">
      <Link href={`/product/[id]?id=${product.id}`} as={`/product/${product.id}`}>
        <a>
          <img src={product.image} alt={product.name} />
          <div> {product.name}</div>
        </a>
      </Link>
    </div>
  )
}

export default ProductCard
