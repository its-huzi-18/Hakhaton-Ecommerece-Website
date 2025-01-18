import Image from "next/image";
import Link from "next/link";
import Footer from "../Component/Footer";
import Features from "../Component/Features";
import MainImage from "../Component/MainImage";

const Cart = () => {
  return (
    <>
      <MainImage tittle="Carts" />
      <div className="w-full px-4 py-8 max-w-6xl mx-auto">
        {/* Cart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 rounded-lg p-6 bg-white md:shadow-none shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#FFF9E5]">
                    <th className="py-2 px-4 lg:pl-[7rem] text-sm md:text-base">Product</th>
                    <th className="py-2 px-4 lg:pl-10 text-sm md:text-base">Price</th>
                    <th className="py-2 px-4 text-sm md:text-base">Quantity</th>
                    <th className="py-2 px-4 text-sm md:text-base">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 mt-4 px-4 flex md:flex-row items-center flex-col space-x-4">
                      <Image
                        src="/Images/asgaraad sofa.png"
                        height={100}
                        width={100}
                        alt="Asgard sofa"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-md"
                      />
                      <div className=" text-xs sm:text-sm md:text-base text-center">Asgard sofa</div>
                    </td>
                    <td className="py-4 px-4 text-xs sm:text-sm md:text-base">Rs. 250,000.00</td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-12 h-8 text-center border border-gray-300 rounded-md text-sm"
                      />
                    </td>
                    <td className="py-4 px-4 text-sm md:text-base">Rs. 250,000.00</td>
                    <td className="py-4 px-4 text-center">
                      <button className="text-yellow-500 hover:text-yellow-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m5 4h.01"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#fff9e5] rounded-lg p-6  shadow-md">
            <h2 className="text-lg md:text-[32px] font-semibold  mb-12 text-center">Cart Totals</h2>
            <div className="flex justify-between mb-4 text-sm md:text-base">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg md:text-xl mb-4">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
            <div className="flex gap-4 flex-col justify-center items-center">
            <Link href="/Checkout">
              <button className=" h-12 w-48 border-2 border-black/50 hover:text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base">Checkout
              </button>
                </Link>
            <Link href="/ShipmentPage">
              <button className=" bg-green-500 h-12 w-48 border-2 border-black/50 text-zinc-900 hover:text-white rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base">Track Order
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Cart;
