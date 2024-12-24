import Image from 'next/image';
import React from 'react';

function ProductsItems() {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center  items-center">
        {/* Product 1 */}
        <div className="flex flex-col items-center md:items-start md:w-[287px]">
          <Image 
            src={'/Images/guestCaoch.png'}
            width={287}
            height={287}
            alt="Trenton modular sofa"
            className="w-full max-w-[287px] h-auto"
          />
          <div className="flex flex-col mt-4 text-center md:text-left">
            <h3 className="font-medium text-[16px] md:w-[212px] leading-tight">
              Trenton modular sofa_3
            </h3>
            <h4 className="font-medium text-[24px] mt-2 text-gray-700">
              Rs. 25,000.00
            </h4>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center md:items-start md:w-[287px]">
          <Image 
            src={'/Images/Granite dining table.png'}
            width={287}
            height={287}
            alt="Granite dining table"
            className="w-full max-w-[287px] h-auto"
          />
          <div className="flex flex-col mt-4 text-center md:text-left">
            <h3 className="font-medium text-[16px] md:w-[212px] leading-tight">
              Granite dining table with dining chair
            </h3>
            <h4 className="font-medium text-[24px] mt-2 text-gray-700">
              Rs. 25,000.00
            </h4>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center md:items-start md:w-[287px]">
          <Image 
            src={'/Images/Outdoor bar table.png'}
            width={287}
            height={287}
            alt="Outdoor bar table"
            className="w-full max-w-[287px] h-auto"
          />
          <div className="flex flex-col mt-4 text-center md:text-left">
            <h3 className="font-medium text-[16px] md:w-[212px] leading-tight">
              Outdoor bar table and stool
            </h3>
            <h4 className="font-medium text-[24px] mt-2 text-gray-700">
              Rs. 25,000.00
            </h4>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center md:items-start md:w-[287px]">
          <Image 
            src={'/Images/Plain console.png'}
            width={287}
            height={287}
            alt="Plain console"
            className="w-full max-w-[287px] h-auto"
          />
          <div className="flex flex-col mt-4 text-center md:text-left">
            <h3 className="font-medium text-[16px] md:w-[212px] leading-tight">
              Plain console with teak mirror
            </h3>
            <h4 className="font-medium text-[24px] mt-2 text-gray-700">
              Rs. 25,000.00
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsItems;
