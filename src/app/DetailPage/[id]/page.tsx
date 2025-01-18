import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface ProductType{
  _id:string,
  name:string
  image:any
  price:number,
  stockLevel:number,
  category:string,
  description:string,
}

const ProductDetails = async ({params}:{params:{id:string}}) => {
  // Fetch products using the Sanity client
  const products:ProductType[] = await client.fetch(
    `*[_type == "product" && _id == "${params.id}"]{
      _id,
      name,
      image,
      price,
      stockLevel,
      category,
      description,
    }`
  );
  

  return (
    <div className='flex items-center ml-10 gap-12 flex-wrap'>
      {products.map((data, i: number) => (
         <div key={data._id} className='flex md:flex-row flex-col gap-14 lg:gap-0 justify-center mt-10 mb-20 items-center'>
         <div className='w-[70%] md:w-[50]'>
           <Image 
             className='w-[660px] rounded-md'
             src={urlFor(data.image).url()}
             width={900} 
             height={900} 
             alt={data.name} 
           />
         </div>
         <div className='md:w-[40%] flex flex-col gap-3 px-6 md:px-0'>
           <p className=' font-bold text-[26px]'>{data.name}</p>
           <h3 className='font-bold text-cyan-600 text-[24px]'>${data.price}</h3>
           <div className='text-cyan-700 font-medium gap-2 flex'>
             <span className='text-black dark:text-gray-500 border-r-[2px] pr-2 border-black/70'>Item</span>{data.stockLevel}
           </div>
           <div className='-mt-1 text-cyan-700 font-medium gap-2 flex'>
             <span className='text-black border-r-[2px] pr-2 dark:text-gray-500 border-black/70'>Category</span>{data.category.charAt(0).toUpperCase() + data.category.slice(1)}
           </div>
           <p className='tracking-wide text-[16x]'>{data.description.charAt(0).toUpperCase() + data.description.slice(1)}</p>
           <div className='mt-5 md:mt-0 items-center flex gap-4'>
           {/* <ItemAddNotification cartItem={{ ...product, quantity: 1 }} buttonSize="px-4 py-[13px] rounded-md" /> */}
           <button className='bg-green-600 text-white rounded-md px-6 py-3 hover:opacity-85'>Buy Now</button>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
};

export default ProductDetails;
