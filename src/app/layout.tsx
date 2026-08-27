export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <html lang="en">
            <header
                style={{
                    backgroundColor: 'tomato',
                    padding: '1rem'
                }}
            >
                Header
            </header>   
            <body>
                <main>{children}</main>
            </body>
            <footer
                style={{
                    backgroundColor: 'lightgreen',
                    padding: '1rem'
                }}
            >
                Footer
            </footer>
        </html>
    )
}