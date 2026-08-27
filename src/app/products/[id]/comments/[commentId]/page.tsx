import { notFound } from "next/navigation";

export default async function CommentDetails(
   { params} : { params: Promise<{id: string, commentId: string}>
}) {
    
    const {id, commentId } = await params;

    if(parseInt(id) > 50){
        notFound()
    }

    return <h1> commentaire {commentId} pour le product {id}  </h1>
}