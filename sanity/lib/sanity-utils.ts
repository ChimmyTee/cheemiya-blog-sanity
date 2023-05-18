import { groq } from "next-sanity";
import { client } from "./client";
import { FoodReview } from "@/types/FoodReview";

export async function getFoodReviews(): Promise<FoodReview[]> {
    return client.fetch(
        groq`*[_type == "foodReview"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}