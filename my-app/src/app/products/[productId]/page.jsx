
export const generateMetadata = async ({params}) => {
    const {productId} = await params;

    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${productId}`)
        }, 100)
    })
 

    return {
        title: {
            absolute:`Product ${title}`,
        }
    }
}

export default async function ProductDetails ({params}){
    const {productId} = await params;

    if(parseInt(productId) > 1000){
        throw new Error(`Error Product ${productId}`)
    }
    return <h1>Details About Product {productId}</h1>
 }