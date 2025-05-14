export const generateMetadata = async ({params}) => {
    const {reviewId}= await params;
    const {productId} = await params;

    return {
        title:`Review ${reviewId} and Product ${productId}`
    }
}

export default async function ReviewsDetails ({params}) {
    const {reviewId}= await params;
    const {productId} = await params;
    return <h1>Reviews for {reviewId} and Product {productId}</h1>
}