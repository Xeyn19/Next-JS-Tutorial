import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen flex-col">
        <h1>Welcome to Home Page</h1>
        <Link href='/about' 
        className="py-3 px-5 bg-black text-white rounded-lg"
        >About</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  
    </>
  );
}
