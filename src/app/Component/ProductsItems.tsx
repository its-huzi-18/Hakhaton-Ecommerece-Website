import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

interface ProductType{
  _id:string,
  name:string
  image:SanityImageSource
  price:number,
  stockLevel:number
}

const ProductItems = async () => {
  // Fetch products using the Sanity client
  const products:ProductType[] = await client.fetch(
    `*[_type == 'product']{
      _id,
      name,
      image,
      price,
      stockLevel
    }[1..5]`
  );
  const filteredProducts = products.filter((_, index) => index !== 3);
  return (
    <div className='flex items-center justify-center gap-12 flex-wrap'>
      {filteredProducts.map((detail, i: number) => (
        <div className='flex flex-col gap-3' key={detail._id}>
          <Image
            src={urlFor(detail.image).url()}
            width={300}
            height={300}
            alt={detail.name}
          />
          <div className='w-[260px] gap-2 flex flex-col'>
            <h3 className='font-medium text-[16px] w-[212px] '>
              {detail.name}
            </h3>
            <div className='flex justify-between items-center'>
            <h4 className=' font-medium'>
              {detail.price}$
            </h4>
            <h4>Item:{detail.stockLevel}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
