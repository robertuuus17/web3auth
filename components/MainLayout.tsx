import { FC, ReactNode } from "react"
import Head from "next/head"
// Components
import NavBar from "./NavBar"

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <>
            <Head>
                <title>Welcome to Brik!</title>
                <meta name="description" content="Welcome to Brik" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div id="content">
                {children}
            </div>
        </>
    )
}

export default MainLayout
