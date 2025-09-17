import React from 'react'
import ProductCard from './ourProducts/ProductCard'
import { Products } from '@/data/Products'

const ProductsList = ({ products, count }: { products: typeof Products; count: number }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.slice(0, count).map((product) => (
        <ProductCard
          cost={product.cost}
          img={product.img}
          tag={product.tag}
          title={product.title}
          key={product.title}
        />
      ))}
    </ul>
  )
}

export default ProductsList