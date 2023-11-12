import getCurrentUser from "../actions/getCurrentUser";


export default async function RootLayout({
    children
}: {children: React.ReactNode}){

    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return null
    }

    return (
        <body>
            <div className="flex">
                <div className="container min-h-screen bg-black text-white">
                    {children}
               </div>
            </div>
        </body>
    )
}