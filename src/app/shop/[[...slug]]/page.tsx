export default async function Shop({
    params
}:{
    params : Promise<{slug: string[]}>
}) {

    const { slug } = await params;
   
    if(slug?.length === 2) {
        return (
            <h1> Viewing shop {slug[0]} - {slug[1]}</h1>
        )
    }
    else if (slug?.length === 1) {
        return (
            <h1>Viewing shop {slug[0]} </h1>
        )
    }
    
    return <h1>Shop home page</h1>
}