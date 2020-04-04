import React from 'react';
import Link from 'next/link';

import { Product } from '../vinyland';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white border rounded shadow-md h-full overflow-hidden hover:border-green-500">
      <div className="relative">
        <div className="absolute bottom-0 right-0 mx-4 my-2">
          {product.discountedPrice !== null && (
            <div className="bg-green-500 rounded font-semibold text-white text-sm uppercase px-1">
              On sale
            </div>
          )}
        </div>
        <Link
          href="/[category]/[product]"
          as={`/${product.category.friendlyURL}/${product.friendlyURL}`}
        >
          <a>
            <img src={product.image} alt={product.name} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col p-4">
        <Link href="/[category]" as={`/${product.category.friendlyURL}`}>
          <a className="font-semibold text-gray-600 text-xs uppercase tracking-wide hover:text-gray-700">
            {product.category.name}
          </a>
        </Link>
        <Link
          href="/[category]/[product]"
          as={`/${product.category.friendlyURL}/${product.friendlyURL}`}
        >
          <a className="flex-grow hover:underline">{product.name}</a>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-baseline">
            {product.discountedPrice === null ? (
              <>
                <div className="font-bold text-green-500">${product.price}</div>
              </>
            ) : (
              <>
                <div className="font-bold text-green-500">
                  ${product.discountedPrice}
                </div>
                <div className="text-sm text-gray-700 line-through ml-1">
                  ${product.price}
                </div>
              </>
            )}
          </div>
          <button
            type="button"
            className="group bg-green-600 text-white rounded-lg overflow-hidden hover:bg-green-700 focus:outline-none"
          >
            <div className="flex items-center">
              <div className="px-2 py-1">
                <div className="flex items-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938 7h11.898zm4.969-10l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
                  </svg>
                </div>
              </div>
              <div className="bg-green-500 font-semibold text-xs uppercase px-2 py-1 group-hover:bg-green-600">
                Add to cart
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
