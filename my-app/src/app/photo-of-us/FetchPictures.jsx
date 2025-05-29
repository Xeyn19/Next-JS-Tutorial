"use client"
import { useState, useEffect } from "react"
import pictures from "./data-pic"
import Link from "next/link"
import Image from "next/image"
import YouTube from "./loading"
export default function FetchPictures(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try{
                await new Promise((resolve) => setTimeout(resolve,1000))
                setData(pictures);
            }catch(error){
                console.error('Error fetching the data',error)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    if(loading){
        return(
            <YouTube />
        )
    }

    return (
        <>
        <div className="min-h-screen flex justify-center flex-col items-center py-20">
            <h1 className="text-4xl font-semibold my-5">Pictures Of Us</h1>
            <div className="grid grid-cols-3 gap-10">
            {data.map((pictures) => (
                <Link key={pictures.id} href={`/photo-of-us/${pictures.id}`}>
                    <Image 
                    alt={pictures.title || "photo"}
                    src={pictures.image}
                    width={300}
                    height={250}
                    className=""
                    />
                </Link>
            ))}
            </div>
            </div>
        </>
    )
}