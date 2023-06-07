import Image from 'next/image'
import { getFoodReviews } from '@/sanity/lib/sanity-utils'
import food from '@/sanity/schemas/foodReview';
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '@/sanity/lib/image';

const SampleImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value)
  // console.log(urlForImage(value).toString());
  return (
    <Image
      src={urlForImage(value).toString()}
      width={width}
      height={height}
      alt={value.alt || ' '}
      className='border-2 border-sky-500'
      loading="lazy"
    />
  )
}

const components: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-4xl">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-red-500 border-l-2">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  types: {
    image: SampleImageComponent,
  },
}

export default async function Home() {
  const foodReviews = await getFoodReviews();
  return (
    <div className='max-w-5xl mx-auto'>
    {/* <div className=''> */}
      {
        foodReviews.map((foodReview) => (
          <div key={foodReview._id}>
            {foodReview.name}
            {foodReview.image}
            <div className='text-lg text-gray-70 mt-10'>
              <PortableText
                value={foodReview.content}
                // components={{
                //   types: {
                //     // block: ({children}:PortableTextTypeComponent<any>) => {console.log({children})},
                //     image: SampleImageComponent,
                //     block: components,
                //   }
                // }}
                components={components}
              />

            </div>
          </div>
        ))
      }
      {/* food reviews are here */}
    </div>
  )
}