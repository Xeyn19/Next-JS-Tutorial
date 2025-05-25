import ArticleValue from "./ArticleValue";

export const generateMetadata = async ({searchParams}) =>{
    const {lang = "en"} = await searchParams;
    let langname;

    if(lang === "fr"){
        langname ="France"
    }else if(lang === "es"){
        langname = "Espanyol"
    }else{
        langname = "English"
    }

    return{
        title:{
            absolute:`${langname}`
        }
    }
}


export default async function NewsArticle({params}){

    const {articleId} = await params;

    return(
        <>
            <ArticleValue articleId={articleId}  />
        </>
    )
}