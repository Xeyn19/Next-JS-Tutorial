import Link from "next/link"
export const metadata = {
    title:{
        absolute:"Products",
    }
}

export default function ProductsPage () {
    const productId = 21;
    const reviewId = 23;
    return (
        <>
            <div className="min-h-screen flex justify-center items-center space-y-2 flex-col">
                <h1>Welcome to Products Page!</h1>
                <Link  className="py-3 px-5 bg-black  text-white rounded-lg"
                href={`products/${productId}`}>Product {productId}</Link>
                <Link  replace
                className="py-3 px-5 bg-black  text-white rounded-lg"
                href={`products/${productId}/reviews/${reviewId}`}>Review {reviewId}</Link>
            </div>
            
        </>
    )
}