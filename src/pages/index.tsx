import React from 'react';
import { NextPage, GetServerSideProps } from 'next';

import ProductCard from '../components/product-card';
import api from '../services/api';
import { Product } from '../vinyland';

type Props = {
  products?: Product[];
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <main className="container mx-auto px-2">
      <section className="mt-8">
        <h2 className="font-semibold text-2xl">Best selling vinyls</h2>
        <div className="bg-green-500 w-32 h-1 rounded-full mt-1" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div key={product.id} className="col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('products');
  const products = response.data;

  return {
    props: { products },
  };
};

export default Home;
