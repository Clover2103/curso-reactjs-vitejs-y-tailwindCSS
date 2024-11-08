import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon =<XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer" ></ XMarkIcon>
  }
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-16 h-16">
          <img className="w-full h-full object-cover rounded-lg" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        { renderXMarkIcon }
      </div>
    </div>
  );
};

export { OrderCard };