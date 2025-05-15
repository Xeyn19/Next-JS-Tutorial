import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen flex-col">
        <h1>Welcome to Home Page</h1>
        <Link href='/about' 
        className="py-3 px-5 bg-black text-white rounded-lg"
        >About</Link>
    </div>
  
    </>
  );
}
