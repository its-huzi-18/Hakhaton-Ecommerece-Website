import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 py-8 bg-white">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left font-medium">
          {/* Address Section */}
          <div className="md:flex flex-col justify-center text-[16px] text-customGrey">
            <p className="tracking-wide leading-6">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="text-[16px] text-customGrey">Links</h3>
            <Link href="/" className="text-[16px] hover:underline">
              Home
            </Link>
            <Link href="/shop" className="text-[16px] hover:underline">
              Shop
            </Link>
            <Link href="/about" className="text-[16px] hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-[16px] hover:underline">
              Contact
            </Link>
          </div>

          {/* Help Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[16px] text-customGrey">Help</h3>
            <Link href="/payment-options" className="text-[16px] hover:underline">
              Payment Options
            </Link>
            <Link href="/returns" className="text-[16px] hover:underline">
              Returns
            </Link>
            <Link href="/privacy-policies" className="text-[16px] hover:underline">
              Privacy Policies
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[16px] text-customGrey">Newsletter</h3>
            <div className="flex gap-3">
              <div className="border-b-2 border-black w-[193px]">
                <input
                  type="text"
                  className="w-[173px] h-[21px] py-3 bg-transparent pb-2 focus:outline-none"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <button className="text-black text-[16px] border-b-2 border-black pb-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="w-full mt-6 mb-6" />
      <div className="text-center mb-4">
        <p className="text-[16px]">2022 Meubel House. All rights reserved</p>
      </div>
      </div>
    </>
  );
}

export default Footer;
