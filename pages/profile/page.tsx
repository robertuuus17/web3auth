import styles from './profile.module.css'; // Importa los estilos locales
import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '@/contexts/Web3AuthContext';
import MainLayout from '@/components/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { getWalletFromCookies } from '../../js/methods'

export default function ProfilePage() {
    const { provider, balance, getPrivateKey } = useContext(LoginContext);
    const [wallet, setWallet] = useState<string | undefined>(getWalletFromCookies())
    const [privateKey, setPrivateKey] = useState<string | null>(null); // Cambiar null a string | null

    useEffect(() => {
        const wallet = getWalletFromCookies()
        setWallet(wallet)
        console.log(wallet)
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
                        <div className={styles.profileContainer}>
                            <div className={styles.header}>
                                {/* Encabezado */}
                                <div className="col">
                                    <p>{provider ? `User wallet: ${getWalletFromCookies() as string}` : 'You need to log in'}</p>
                                    {provider && balance !== null && (
                                        <p>User balance: {balance}</p>
                                    )}
                                    {provider && privateKey !== null && (
                                        <p>User private key: {privateKey}</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </MainLayout>
    );
}

