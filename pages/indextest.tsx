import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '@/contexts/Web3AuthContext';
import MainLayout from '@/components/MainLayout';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const { wallet, provider, balance, getPrivateKey } = useContext(LoginContext);
    const [privateKey, setPrivateKey] = useState<string | null>(null); // Cambiar null a string | null

    useEffect(() => {
        // Obtener el privateKey una vez que el componente se monta (si el usuario está autenticado)
        if (provider) {
            handleGetPrivateKey();
        }
    }, [provider]);
    const handleGetPrivateKey = async () => {
        try {
            const privateKeyData = await getPrivateKey();
            if (privateKeyData !== null && privateKeyData !== undefined) {
                setPrivateKey(privateKeyData);
            } else {
                console.error('User private key not available');
            }
        } catch (error) {
            console.error('Error fetching user private key', error);
        }
    };



    return (
        <MainLayout>
            <section>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>{provider ? `User wallet: ${wallet}` : 'You need to log in'}</p>
                            {provider && balance !== null && (
                                <p>User balance: {balance}</p>
                            )}
                            {provider && privateKey !== null && (
                                <p>User private key: {privateKey}</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}


