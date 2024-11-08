import React, { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCard = (event ,productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheacoutSideMenu();
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCard = context.cartProducts.filter(product => product.id === id).length > 0;

    if (isInCard) {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCard(event, data.data)}>
          <CheckIcon className="size-7 text-white"></CheckIcon>  
        </div>
      )
    } else {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCard(event, data.data)}>
          <PlusIcon className="size-6 text-black"></PlusIcon>  
        </div>
      )
    }
  }

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60'
      onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-midium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export { Card };