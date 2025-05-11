export default function Doc({params}) {
   const {slug} = params;

   if (!slug) {
      return <h1>Docs home page</h1>;
   }

   return (
    <>
        <div className="">
            {slug.length === 2 
               ? <h1>Viewing Docs for feature {slug[0]} and concept {slug[1]}</h1>
               : slug.length === 1
                  ? <h1>Viewing docs for feature {slug[0]}</h1>
                  : <h1>Docs Home Page</h1>
            }
        </div>
    </>
   );
}