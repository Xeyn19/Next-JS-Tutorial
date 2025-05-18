
export default async function Blog () {
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Intentional Delay!')
        },2000)
    })
    
    return (
            <>
            <div className="">
            
                 <h1 className="">Welcome to blog Page!</h1>
            </div>    
               
        </>
    
    )
}

   