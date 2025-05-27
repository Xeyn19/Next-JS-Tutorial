import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications (){
    return (
        <Card>
        <div className="self-center">
           <h1 className="text-md font-medium">Notifications</h1>
           <div className="">
            <Link className="hover:underline" replace
            href="/complex-dashboard/archived">Archived</Link>
           </div>
        </div>
        </Card>
    )
}