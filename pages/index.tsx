import { useContext } from 'react'
// Web3Auth
import { LoginContext } from '@/contexts/Web3AuthContext';
// Components
import MainLayout from '@/components/MainLayout'
// Styles
import styles from '@/styles/Home.module.css'

export default function Home() {

    const { wallet, provider } = useContext(LoginContext);

    return (
        <MainLayout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>{provider ? `User wallet: ${wallet}` : 'You need to log in'}</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
