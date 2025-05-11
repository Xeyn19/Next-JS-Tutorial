export default async function ProductsDetails ({params}) {
    
    const productId = params.productId
    return (
       <>
       <div className="flex flex-col font-bold min-h-screen justify-center items-center">
            <h1>Details about products {productId}</h1>
       </div>
       
       </> 
    )
}