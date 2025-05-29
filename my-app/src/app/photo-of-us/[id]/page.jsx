
import Image from "next/image";
import pictures from "../data-pic";
export default async function PhotoPage({params}){
    const {id} = await params;

    const photo = pictures.find((p) => p.id === Number(id));

    if(!photo) return (
        <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl text-red-500 font-medium">Photo not Found!</h1>
        </div>
    )

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center items-center">
                <h1 className="text-2xl font-medium my-5">Picture of {photo.title}</h1>

                <Image 
                alt={photo.title || "Photo"}
                src={photo.image}
                width={500}
                height={500}
                /> 

            </div>
        
        </>
    )
}