export default async function ProductReviews ({params}) {

    const { productId, reviewId } = params;
    return (
        <>
            <h1> Review {reviewId} for product {productId}</h1>
        </>
    )
}