export const metadata = {
    title: "Page de cv",
    description: "Cette page comporte une description detaillée de mon cv. "
}

export default function CVLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <>
            {children}
            <h1>CV layout here </h1>
        </>

        
    )
}