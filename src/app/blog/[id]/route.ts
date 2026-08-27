import { articles } from "../data";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }>}
){
    const {id} = await params
    
    const article = articles.find((item) => item.id === parseInt(id))

    return Response.json(article)
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{id: string}>}
) {

    const { id } = await params 
    const body = await request.json()
    const title = body.title
    const index = articles.findIndex(
        (item) => item.id === parseInt(id)
    )
    articles[index].title  = title

    return Response.json(articles[index])

}

export async function DELETE(
     request: Request,
    { params }: { params: Promise<{id: string}>}
){
    const { id } = await params 
    const index = articles.findIndex(
        (item) => item.id === parseInt(id)
    )

    const deletedPost = articles[index];
    articles.splice(index, 1)

    return Response.json(deletedPost);
}