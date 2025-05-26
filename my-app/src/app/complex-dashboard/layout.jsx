export default function ComplexDashboardLayout ({children, users, notifications, revenue}){
    return (
        <div className="">
            <div className="flex justify-center items-center min-h-screen ">
            <div className="grid grid-cols-3">
                <div className="">
                    {children}
                </div>
                <div className="">
                    {users}
                </div>
                <div className="">
                    {revenue}
                </div>
                <div className="">
                        {notifications}
                </div>
            </div>
            </div>
        </div>

    )
}