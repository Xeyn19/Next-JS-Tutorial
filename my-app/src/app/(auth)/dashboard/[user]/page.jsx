import { redirect } from "next/navigation";

export async function generateMetadata({params}){
    const user = params.user?.toLowerCase(); 

  return{
    title:{
      absolute:`Welcome ${user.charAt(0).toUpperCase() + user.slice(1)}`,
    }
  }
}

export default function UserAuth({ params }) {
  const user = params.user?.toLowerCase(); 

  if (user === "edgar" || user === "vhana") {
    return (
      <div className="flex min-h-screen items-center font-bold text-2xl justify-center">
        <h1>
          Welcome {user === "edgar" ? "Sir" : "Mam"}{" "}
          {user.charAt(0).toUpperCase() + user.slice(1)}
        </h1>
      </div>
    );
  } else {
    redirect("/");
  }
}
