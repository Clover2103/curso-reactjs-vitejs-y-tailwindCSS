import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout className='bg-red-100'>
      <div className='flex w-80 items-center justify-center relative mb-7'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map((product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title} 
                imageUrl={product.images} 
                price={product.price}
              />
            ) 
          ))
        }
      </div>
    </Layout>
  );
};

export { MyOrder };
