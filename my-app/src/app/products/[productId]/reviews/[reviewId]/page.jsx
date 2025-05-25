export const generateMetadata = async ({params}) => {
    const {reviewId, productId} = await params;


    return {
        title:{
            absolute:`Review ${reviewId} and Product ${productId}`
        }
    }
}

export default async function ReviewsDetails ({params}) {
    const {reviewId, productId} = await params;
 
    if(parseInt(productId) > 1000 && parseInt(reviewId) > 1500){
        throw new Error(`Error Product${productId} & Review ${reviewId}`)
    }
    else if(parseInt(productId) > 1000){
        throw new Error(`Error Product ${productId} `)
    }
    else if(parseInt(reviewId) > 1500){
        throw new Error(`Error review ${reviewId}`)
    }
 
    return(
        <h1>Reviews for {reviewId} and Product {productId}</h1>
    ) 
}