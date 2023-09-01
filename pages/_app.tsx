import type { AppProps } from 'next/app'
// Contexts
import Web3AuthContext from '@/contexts/Web3AuthContext';
// Styles
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Web3AuthContext>
            <Component {...pageProps} />
        </Web3AuthContext>
    )
}
