"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({params, searchParams}){

    const {articleId} =  use(params);
    const {lang = "en"} = use(searchParams);

    return(
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