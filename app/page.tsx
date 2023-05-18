import Image from 'next/image'
import { getFoodReviews } from '@/sanity/lib/sanity-utils'

export default async function Home() {
  const foodReviews = await getFoodReviews();
  return (
    <div>
      {
        foodReviews.map((foodReview) => (
          <div key={foodReview._id}>{foodReview.name}{foodReview.image}</div>
        ))
      }
      food reviews are here
    </div>
  )
}
