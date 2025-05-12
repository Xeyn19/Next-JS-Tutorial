"use client";

import { usePathname } from "next/navigation";


export default function NotFound () {

    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];

    return (
        <>
            <div className="flex font-bold flex-col min-h-screen justify-center items-center">
                <h1 className="text-4xl">Review {reviewId} Not Found for product {productId}</h1>
            </div>    
        </>
    )
}