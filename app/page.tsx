import Image from 'next/image'
import { getFoodReviews } from '@/sanity/lib/sanity-utils'
import food from '@/sanity/schemas/foodReview';
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '@/sanity/lib/image';

const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value)
  console.log(urlForImage(value).toString());
  return (
    <Image
      src={urlForImage(value).toString()}
      width={500}
      height={500}
      alt={value.alt || ' '}
      className='my-5'
      loading="lazy"
    />
  )
}

export default async function Home() {
  const foodReviews = await getFoodReviews();

  return (
    <div className='max-w-5xl mx-auto'>

      {
        foodReviews.map((foodReview) => (
          <div key={foodReview._id}>
            {foodReview.name}
            {foodReview.image}
            <div className='text-lg text-gray-70 mt-10'>
              {/* console.log(foodReview.content); */}
              <PortableText
                value={foodReview.content}
                components={{
                  types: {
                    image: SampleImageComponent,
                  },
                }}
              />

            </div>
          </div>
        ))
      }
      {/* food reviews are here */}
    </div>
  )
}