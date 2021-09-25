import React from 'react'
import Link from 'next/link'

type Props = {
  pageCount: number
  currentPage: string
}

const Pagination: React.FC<Props> = ({ pageCount, currentPage }) => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="w-full flex items-center justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {Array.from(Array(pageCount)).map((_, page) => (
            <span key={page + 1}>
              <Link href={page === 0 ? '/' : `/?page=${page + 1}`}>
                <a
                  className={
                    Number(currentPage) === page + 1
                      ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      : 'z-10 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                  }
                >
                  {page + 1}
                </a>
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Pagination
