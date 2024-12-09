import React from 'react';
import Image from 'next/image';
import ProductsItems from '../Component/ProductsItems';


const AsgaardPage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className=" h-24  flex items-center gap-8 pl-20">
                <ul className="flex items-center gap-2 list-none">
                    <li className="text-[#9F9F9F]">Home</li>
                    <Image
                        src="/Images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F]">Shop</li>
                    <Image
                        src="/Images/black-arr.png"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                    <li className="text-[#9F9F9F]">
                        <h3 className='border-l-2 border-[#9F9F9F] pl-2'>Asgaard Sofa</h3>
                        </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start justify-evenly mt-16 px-4 lg:px-24 gap-12">
                {/* Sidebar Thumbnails */}
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num}>
                            <Image
                                src={`/Images/sec${num}.png`}
                                alt={`sec${num}`}
                                width={76}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Product Image Container */}
                <div className="bg-[#F9F1E7] w-full lg:w-1/2 h-auto flex items-center justify-center p-4 rounded-md">
                    <Image
                        src="/Images/Asgaard sofa 1.png"
                        alt="Asgaard sofa 1"
                        width={500}
                        height={600}
                        className="max-w-full h-auto"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col max-w-lg">
                    <h1 className="text-4xl font-semibold mb-2">Asgaard Sofa</h1>
                    <span className="text-2xl text-[#9F9F9F]">Rs. 250,000.00</span>

                    <div className="flex items-center gap-3 mt-4">
                        <Image
                            src="/Images/five-star.png"
                            alt="star rating"
                            width={124}
                            height={20}
                        />
                        <div className="border-l border-[#9F9F9F] h-3"></div>
                        <span className="text-[#9F9F9F] text-sm">5 Customer Reviews</span>
                    </div>

                    <p className="mt-6 text-sm lg:text-base">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Size Selection */}
                    <h2 className="mt-14 text-[#9F9F9F]">Size:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <button className="w-8 h-8 bg-[#B88E2F] text-white rounded flex items-center justify-center text-sm hover:bg-[#A77A27]">
                            L
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XL
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XS
                        </button>
                    </div>

                    {/* Color Selection */}
                    <h2 className="mt-14 text-[#9F9F9F]">Color:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-[#816DFA] rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                        <div className="w-8 h-8 bg-[#B88E2F] rounded-full"></div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                        <div className="flex items-center border border-black/50 rounded-2xl w-[123px] h-[64px]">
                            <button className="px-3">-</button>
                            <span className="px-4">1</span>
                            <button className="px-3">+</button>
                        </div>
                    
                        <button className="w-[215px] h-[64px] bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-3">
                        Add To Cart
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-[#9F9F9F] w-full mt-14"></div>
                    <div className="mt-8 flex items-center justify-start gap-8">
                        <div className='flex flex-col text-[#9F9F9F] gap-3'>
                            <h4>SKU</h4>
                            <h4>Category</h4>
                            <h4>Tags</h4>
                            <h4>Share</h4>
                        </div>
                        <div className='flex flex-col text-[#9F9F9F] gap-3'>
                            <h4>: <span className='ml-2'>SS001</span></h4>
                            <h4>: <span className='ml-2'>Sofas</span></h4>
                            <h4>: <span className='ml-2'>Sofa, Chair, Home, Shop</span></h4>
                            <div className='flex items-center justify-start gap-3'>
                                :
                                <Image
                                    src={"/Images/fb.png"}
                                    alt='fb'
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src={"/Images/in.png"}
                                    alt='in'
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    src={"/Images/twi.png"}
                                    alt='twi'
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-b border-[#9F9F9F] mt-20'></div>
            <div className='h-[744px]'>
                <div className='flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-16 mt-10 text-[24px]'>
                    <h1 className='font-semibold'>Description</h1>
                    <span className='text-[#9F9F9F]'>Additional Information</span>
                    <span className='text-[#9F9F9F]'>Reviews [5]</span>
                </div>

                <div className='flex items-center flex-col mt-10'>
                    <p className='text-[#9F9F9F] w-full sm:w-[1026px] h-auto sm:h-[48px] px-4'>
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <br />
                    <p className='text-[#9F9F9F] w-full sm:w-[1026px] h-auto sm:h-[96px] px-4'>
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                </div>

                <div className='flex flex-col gap-6 sm:flex-row items-center justify-around mt-10'>
                    <Image
                        src={"/Images/sofa-fir.png"}
                        alt='sofa1'
                        width={605}
                        height={348}
                    />
                    <Image
                        src={"/Images/sofa2.png"}
                        alt='sofa2'
                        width={605}
                        height={348}
                    />
                </div>
            </div>
            <h1 className='text-[36px] font-semibold text-center mt-16'>Related Products</h1>
<div className='flex justify-center'>

<ProductsItems />
</div>
<div className='mt-10 flex justify-center '>
                <h3 className='pb-2 text-[24px] border-b-2 border-black/60'> View More</h3>
               
                </div>            

        
        </>
    );
};

export default AsgaardPage;