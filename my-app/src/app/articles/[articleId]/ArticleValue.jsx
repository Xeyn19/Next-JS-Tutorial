"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArticleValue ({articleId}) {
    const searcParams = useSearchParams();
    const lang = searcParams.get("lang") || 'en';
    return (
         <div className="flex justify-center items-center min-h-screen flex-col font-bold">
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div className="space-x-2 text-slate-500">
                <Link className="hover:underline"
                href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link className="hover:underline"
                href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link className="hover:underline"
                href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}