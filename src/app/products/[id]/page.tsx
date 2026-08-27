import { Metadata } from "next"

export  const generateMetadata = ({params}:{params :Promise<{id: string}>}):
Metadata => {
    // const { number } = await params;
    return {
        title: ` Product Number` 
    }
}

export default async function ProductDetails({ 
   params 
}: {
    params: { id: string }
    }) {
        const resolvedParams = await params;
        const id = resolvedParams.id;
        // console.log(id)
        return <h1> Product Details {id} </h1>
    }