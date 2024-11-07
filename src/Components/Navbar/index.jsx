import React, { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context';


const Navbar = () => {

  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'>
              Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/All'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Clothes'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Electronics'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Furnitures'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Toys'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/Other'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Other
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          Cristian@platzi.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              My Acoount
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={ ({isActive}) =>
              isActive ? activeStyle : undefined
            }>
              Sign In
          </NavLink>
        </li>
        <li className='flex gap-1 align-center justify-center'>
          <ShoppingBagIcon className="size-6 text-black"></ShoppingBagIcon>        
          {context.count}
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };