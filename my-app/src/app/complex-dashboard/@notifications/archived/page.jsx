import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications (){
    return (
        <Card>
        <div className="self-center">
           <h1 className="text-md font-medium">Archived Notifications</h1>
           <div className="">
            <Link className="hover:underline" replace
            href="/complex-dashboard">Default</Link>
           </div>
        </div>
        </Card>
    )
}