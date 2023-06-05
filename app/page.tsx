'use client';
import Image from 'next/image'
import { getFoodReviews } from '@/sanity/lib/sanity-utils'
import food from '@/sanity/schemas/foodReview';
import { PortableText } from '@portabletext/react'
// import { PortableTextTypeComponent, PortableTextTypeComponentProps } from '@portabletext/react';


export default async function Home() {
  const foodReviews = await getFoodReviews();

  return (
    <div className='max-w-5xl mx-auto'>

      {
        foodReviews.map((foodReview) => (
          <div key={foodReview._id}>{foodReview.name}{foodReview.image}
            <div className='text-lg text-gray-70 mt-10'>
              <PortableText
                value={foodReview.content}
                components={{
                  types: {
                    image: ({value}) => <Image src={value.imageUrl} alt={'fdsa'} />,
                  },
                }}
              />
            </div>
          </div>
        ))
      }
      food reviews are here
    </div>
  )
}
