import MainImage from '@/app/Component/MainImage';
import React from 'react';
import Features from '../Component/Features';
import Pagination from '../Component/Pagination';
import FilteredHead from '../Component/FilteredHead';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface ProductType {
  _id: string;
  name: string;
  image: any;
  price: number;
  stockLevel: number;
}

// Move data fetching to an async function
async function getProducts(): Promise<ProductType[]> {
  return await client.fetch(
    `*[_type == 'product']{
      _id,
      name,
      image,
      price,
      stockLevel
    }`
  );
}

const Shop = async () => {
  const products = await getProducts(); // Fetch products

  return (
    <>
      <div>
        <MainImage tittle="Shop" />
        <FilteredHead />

        {/* Product Details */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {products.map((detail) => (
            <div className="flex flex-col gap-3" key={detail._id}>
              <Link href={`/DetailPage/${detail._id}`}>
                <Image
                  src={urlFor(detail.image).url()}
                  width={300}
                  height={300}
                  alt={detail.name}
                />
              </Link>
              <div className="w-[260px] gap-2 flex flex-col">
                <h3 className="font-medium text-[16px] w-[212px]">
                  {detail.name}
                </h3>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{detail.price}$</h4>
                  <h4>Item: {detail.stockLevel}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="my-10">
          <Pagination />
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </>
  );
};

export default Shop;
