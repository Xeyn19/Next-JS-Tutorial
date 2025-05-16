"use client"
import { useRouter } from "next/navigation"

export default function OrderProductClient(){
    const router = useRouter();
    function handleClick (){
        console.log('Placing your order');
        router.push('/');
    }

    return (
        <>
        <div className="flex justify-center items-center min-h-screen flex-col">
             <h1>Order Product Id</h1>
            <button className="hover:underline cursor-pointer"
            onClick={handleClick}>Place Order</button>
        </div>
        </>
    )
}