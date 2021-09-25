import type { NextPage } from 'next'
import ProductCard from 'components/ProductCard';
import Pagination from 'components/Pagination'
import { getProducts } from 'api/products'
import type { Product } from 'types/Product'

export const getServerSideProps = async ({
  query,
}: {
  query: { page?: string | null }
}) => {
  const currentPage = query?.page || '1'
  const { data, pageCount }: { data: Product[]; pageCount: number } = await getProducts(currentPage)

  return {
    props: {
      currentPage,
      pageCount,
      products: data,
    },
  }
}

type Props = {
  products: Product[]
  pageCount: number
  currentPage: string
}

const Home: NextPage<Props> = ({ products, pageCount, currentPage }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>

      <Pagination pageCount={pageCount} currentPage={currentPage} />
    </div>
  )
}

export default Home
