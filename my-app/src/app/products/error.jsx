"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function ErrorBoundary ({error}) {
    const router = useRouter();

    useEffect(() => {
        document.title = error.message
    }, [error])
    
    function handleClick(){
        router.push('/products')
    }
    return (
         <div className="flex justify-center flex-col items-center min-h-screen">
        
           <h1 className="text-4xl text-red-500">{error.message}</h1> 
            <button className="px-5 py-3 bg-black rounded-lg text-white cursor-pointer"
            onClick={handleClick}>Back to Products</button>
         </div>
    )
   
}