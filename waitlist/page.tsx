'use client';
import React, { useState } from 'react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import styles from './waitlist.module.css'; // Import CSS module

// Importa la función de enviarCorreo y otros módulos si es necesario

const Waitlist = () => {
    const modalState = useWalletModal();
    const [connected, setConnected] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);


    const handleConnect = async () => {
        modalState.setVisible(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de conexión exitosa
        setConnected(true);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };


    const handleEmailSend = () => {
        // Llama a tu función para enviar el correo electrónico
        // enviarCorreo(email);
        setEmailSent(true); // Simulación de envío exitoso
    };

    return (
        <div>
            <hr className={styles.noMarginHr} />
            <div className={styles.popupContainer}>
                <hr className={styles.noMarginHr} />
                <p className={styles.popupText}>
                    Connect your wallet and enter an email to receive confirmation that you have been successfully added to the waitlist!
                </p>
                <button
                    className={`${styles.connectButton} ${styles.buttonMargin}`}
                    onClick={connected ? undefined : handleConnect}
                    style={{ fontWeight: 'bold' }} // Añade esta línea
                >
                    {connected ? 'CONNECTED SUCCESSFULLY' : 'Connect Wallet'}
                </button>

                {connected && !emailSent && (
                    <div className={styles.emailInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className={styles.emailInput}
                        />
                        <button
                            className={styles.sendEmailButton}
                            onClick={handleEmailSend}
                        >
                            Validate email
                        </button>
                    </div>
                )}

                {emailSent && (
                    <p className={styles.emailConfirmationText}>
                        The email {email} has been added to the list. You will be notified when the first NFTs are available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Waitlist;

