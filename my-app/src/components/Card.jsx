export const Card = ({children}) => {
    return(
        <div className="bg-slate-100 w-[300px] h-[200px] rounded-lg shadow-md">
            <div className="flex justify-center pt-5">  
                {children}
            </div>  
        </div>
    )
}