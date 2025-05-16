import { redirect } from "next/navigation";

export const generateMetadata = async ({params}) => {
    const {reviewId}= await params;
    const {productId} = await params;


    return {
        title:`Review ${reviewId} and Product ${productId}`
    }
}

export default async function ReviewsDetails ({params}) {
    const {reviewId, productId}= await params;
    if(parseInt(reviewId > 1000)){
        redirect('/products')
    }

    return <h1>Reviews for {reviewId} and Product {productId}</h1>
}