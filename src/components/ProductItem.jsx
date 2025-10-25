import React from 'react';
import Image from 'next/image';
import { List } from 'lucide-react';
import Link from 'next/link';

function ProductItem({product}) {
    //const productId = product?.id || product?.attributes?.id;
    return (
        <Link href={`/product-detalis/${product?.id}`} className='p-1 border-teal-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer'>
            <Image 
                src={product?.attributes?.images?.data?.[0]?.attributes?.url}
                alt="banner-card"
                width={500}
                height={600}
                className='rounded-t-lg object-cover'
                // Remove invalid 'property' prop
            />
            <div className='flex items-center justify-between p-3 rounded-b-lg bg-gray-50'>
                <div className=''>
                    <h2 className='text-[12px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
                    <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'>
                        <List className='w-4 h-4' /> {product?.attributes?.category}
                    </h2>
                </div>
                <h2>{product?.attributes?.price}</h2>
            </div>
        </Link> // This closing div was misplaced
    );  // Missing semicolon
}

export default ProductItem;