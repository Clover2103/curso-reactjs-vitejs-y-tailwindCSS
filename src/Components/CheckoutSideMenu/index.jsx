import React, { useContext } from 'react';
import { OrderCard } from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './style.css';


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside  
      className={`${context.isCheacoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon onClick={context.closeCheacoutSideMenu} className="size-6 text-black cursor-pointer" ></ XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-x-scroll'>
        {
          context.cartProducts.map((product => (
              <OrderCard
                key={product.id}
                title={product.title} 
                imageUrl={product.images} 
                price={product.price}
              />
            ) 
          ))
        }
        
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }