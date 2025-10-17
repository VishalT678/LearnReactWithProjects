import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductCard({product}) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='bg-white rounded-xl shadow p-6 flex flex-col items-center w-60'>
      <h3 className='text-xl font-bold mb-2'>{product.name}</h3>
      <p className='text-gray-700 mb-4'>${product.price}</p>
      <button 
      className='bg-yellow-509 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'
      onClick={()=>addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard
