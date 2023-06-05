import Image from 'next/image'
import { getFoodReviews } from '@/sanity/lib/sanity-utils'
import food from '@/sanity/schemas/foodReview';
import { PortableText } from '@portabletext/react'
// import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '@/sanity/lib/image';

const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value)
  console.log(urlForImage(value).toString());
  return (
    // <img
    //   src={urlBuilder()
    //     .image(value)
    //     .width(isInline ? 100 : 800)
    //     .fit('max')
    //     .auto('format')
    //     .url()}
    //   alt={value.alt || ' '}
    //   loading="lazy"
    //   style={{
    //     // Display alongside text if image appears inside a block text span
    //     display: isInline ? 'inline-block' : 'block',

    //     // Avoid jumping around with aspect-ratio CSS property
    //     aspectRatio: width / height,
    //   }}
    // />
    <Image
      src={urlForImage(value).toString()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

// const components = {
//   types: {
//     image: SampleImageComponent,
//     // Any other custom types you have in your content
//     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
//   },
// }



export default async function Home() {
  const foodReviews = await getFoodReviews();

  return (
    <div className='max-w-5xl mx-auto'>

      {
        foodReviews.map((foodReview) => (
          <div key={foodReview._id}>{foodReview.name}{foodReview.image}
            <div className='text-lg text-gray-70 mt-10'>
              {/* console.log(foodReview.content); */}
              <PortableText
                value={foodReview.content}
                // components={{
                //   types: {
                //     image: myImageComponent, // Use the custom component for 'image' type
                //   },
                // }}
                components={{
                  // ...
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

const myImageComponent = (node: any) => {
  return <Image src={node.asset.url} alt={node.alt} width={300} height={200} />;
};