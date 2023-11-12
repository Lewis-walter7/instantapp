import Sidebar from "./components/Sidebar"

export default async function RootLayout({
    children
}: {children: React.ReactNode}){


    return (
        <body>
            <div className="flex">
                <Sidebar />
                <div className="container min-h-screen bg-black text-white">
                    {children}
               </div>
            </div>
        </body>
    )
}