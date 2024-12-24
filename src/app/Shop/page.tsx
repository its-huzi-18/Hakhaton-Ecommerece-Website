import MainImage from '@/app/Component/MainImage';
import React from 'react';
import Features from '../Component/Features';
import Image from 'next/image';
import Pagination from '../Component/Pagination';
import ProductDetails from '../Component/ProductDetails';

const Shop = () => {
  return (
    <>
      <div>
        <MainImage tittle="Shop" />

        {/* Filter Section */}
        <div className="hidden  lg:flex flex-col sm:flex-row items-center justify-around bg-[#F9F1E7] p-4">
          <div className=" flex flex-wrap sm:justify-evenly space-x-4">
            <Image
              src="/Images/dotted-line.svg"
              alt="dotted-line"
              width={25}
              height={25}
            />
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">
              Filter
            </h3>
            <Image
              src="/Images/four-dot.svg"
              alt="four-dot"
              width={25}
              height={25}
            />
            <Image
              src="/Images/square-line.svg"
              alt="square-line"
              width={25}
              height={25}
            />
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base border-l-2 border-black/30 pl-4">
              <h3>Showing 1–16 of 32 results</h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center sm:space-x-4 mt-4 sm:mt-0">
            {/* Show Section */}
            <div className="flex gap-2 items-center">
              <h2 className="text-xs sm:text-sm md:text-base">Show</h2>
              <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md">
                <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">
                  16
                </h3>
              </div>
            </div>

            {/* Sort By Section */}
            <div className="flex gap-2 items-center">
              <h3 className="text-xs sm:text-sm md:text-base">Sort by</h3>
              <div className="w-[128px] sm:w-[188px] bg-white h-[45px] sm:h-[55px] flex items-center justify-center rounded-md">
                <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">
                  Default
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <ProductDetails />

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
