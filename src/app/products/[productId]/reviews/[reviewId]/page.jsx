import { notFound } from "next/navigation";

export default async function ProductReviews ({params}) {

    const { productId, reviewId } = params;

    if (parseInt(reviewId) > 1000){
        notFound();
    } 
    return (
        <>
            <h1> Review {reviewId} for product {productId}</h1>
        </>
    )
}