import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '@/contexts/Web3AuthContext';
import MainLayout from '@/components/MainLayout';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';

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


            </section>

            <section id={styles.hero} style={{ position: 'relative' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className={`${styles.headerText} ${styles.largeText}`}>
                                Invest in the environment<br />from just $10
                            </h1>
                            <p></p>
                            <p className={styles.smallText}>In a transparent and secure way through the implementation <br /> of blockchain technology.</p>
                        </div>

                        <div className="col-4 text-end" style={{ position: 'absolute', top: '160px', left: '1140px' }}>
                            <Image src="/images/mockup.png" alt='Mockup' width={450} height={650} />
                            <br />
                        </div>
                    </div>
                    <div className={styles.coolLinkContainer}>
                        <Link href="./projects" className={styles.coolLink}>Future available projects</Link>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <h2 style={{ fontSize: '48px', marginTop: '90px', marginBottom: '129px' }}>Simple, fast & secure</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex align-items-center offset-md-1">
                            <div className="text-center">
                                <Image src="/images/izquierda.webp" alt='izquierda' width={100} height={110} />
                                <h3> <br />Secured and Decentralized</h3>
                                <p className={styles.smallText}>Experience the full spectrum of blockchain
                                    <br />
                                    features with our non-custodial wallet.</p>
                            </div>
                        </div>
                        <br />

                        <div className="col d-flex align-items-center offset-md-1">
                            <div className="text-center">
                                <Image src="/images/derecha.webp" alt='derecha' width={110} height={100} />
                                <h3> <br />We have got you covered</h3>
                                <p className={styles.smallText}>Both Mastercard and Visa cards are <br />
                                    supported to give you what you need.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col d-flex justify-content-center'>
                            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                                <Image src="/images/abajo.webp" alt='abajo' width={128} height={96} />
                                <h4 style={{ marginTop: '50px', marginBottom: '20px' }}>Interoperability and Global Reach</h4>
                                <p className={styles.smallText}>Using common protocols and smart contracts, <br />
                                    enabling interoperability across different blockchain platforms.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                </div>
            </section>
            <br />


            <section id={styles.hero2} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '150px' }}>
                    <Image src="/images/nftmarco.png" alt='abajo' width={356} height={356} />
                </div>
                <div className='row'>
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className={`${styles.headerText2} ${styles.largeText}`} style={{
                            position: 'relative', // Mantén la posición relativa
                            marginTop: '90px',    // Ajusta la posición vertical hacia abajo en píxeles
                            marginLeft: '150px',   // Ajusta la posición horizontal hacia la derecha en píxeles
                            color: 'white',        // Cambia el color del texto a blanco
                            fontSize: '44px',
                            fontWeight: '400'       // Ajusta el tamaño de fuente a 48px para que coincida con el segundo bloque de texto
                        }}>
                            Ready to make a difference? You <br />can support the environment and<br />and get rewarded
                        </h1>
                        <p style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}>

                        </p>
                        <br />
                        <a href="https://studio.metaplex.com/project/carbonzero--early-adopter" className={styles.buttonBuy} style={{
                            position: 'absolute', // Agrega posición relativa
                            marginTop: '360px',    // Ajusta el margen superior para mover hacia abajo
                            marginLeft: '-1205px',   // Ajusta el margen izquierdo para mover a la izquierda
                            backgroundColor: 'white',
                            color: 'black',
                            textDecoration: 'none',
                            padding: '10px 30px',
                            borderRadius: '15px',
                            fontWeight: '600'
                        }}>BUY FOUNDER NFT</a>
                    </div>
                </div>
                <div className={styles.blackBox2} style={{ position: 'absolute', top: 0, left: 0, width: '140%', height: '140%', zIndex: -1 }}></div>
            </section>





            <br /><br /><br /><br /><br /><br /> <br />


            <section className={styles.centeredSection}>
                <div className={`row ${styles.centeredContent}`}>
                    <div className="col d-flex flex-column align-items-center">
                        <br /> <br />
                        <h1 className={`${styles.headerText2} ${styles.largeText} ${styles.smallerText}`} style={{ marginTop: '160px', marginBottom: '30px' }}>
                            What makes <span className={styles.leftAlignText}>tokenised carbon</span> <br /> <span className={styles.leftAlignText}>credits revolutionary?</span>
                        </h1>
                    </div>
                </div>


                <div className={`row ${styles.centeredContent}`}>
                    <div className="col-6 mx-auto ml-2 d-flex justify-content-end">

                        <div className={`${styles.squareBox} ${styles.column1} ${styles.blackBox}`}>
                            <div className={styles.content}>
                                <Image src="/images/eye.png" alt='Image 1' width={150} height={150} style={{ marginLeft: '60px', marginTop: '-0px' }} />
                                <h2 className={`${styles.title} ${styles.whiteText}`}>Accessibility and Fractional Ownership</h2>
                                <p className={`${styles.description} ${styles.whiteText}`}>
                                    Tokenization makes it possible to divide carbon credits into <br /> smaller units, allowing fractional ownership.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.squareBox} ${styles.column2} ${styles.blueBox}`}>
                            <div className={styles.content}>
                                <Image src="/images/forest.png" alt='Image 1' width={140} height={130} style={{ marginLeft: '60px' }} />
                                <h2 className={`${styles.title} ${styles.blackText}`}>Greener future</h2>
                                <p className={`${styles.description} ${styles.blackText}`}>
                                    From renewable energy projects to reforestation efforts, our  <br />
                                    platform covers a wide range of ventures aimed at lowering all carbon emissions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className={`row ${styles.centeredContent}`}>
                    <div className="col">
                        <div className={`${styles.newRectangle} ${styles.rectangleBackground}`}>
                            <div className={styles.flexContainer}>
                                <div className={styles.newImageContainer}>
                                    <Image src="/images/wallet.png" alt='Image 1' width={190} height={190} />

                                </div>
                                <div className={styles.newTextContainer}>
                                    <div className={`${styles.headerText3} ${styles.blackText}`}>Transparency and Traceability</div>
                                    <div className={`${styles.description} ${styles.blackText}`}>
                                        By utilizing blockchain technology, tokenized carbon credits offer <br /> enhanced transparency and traceability. Each transaction and <br />
                                        movement of carbon credits is recorded on the blockchain, creating <br />
                                        an immutable and auditable ledger. This transparency helps prevent fraud, double counting, and ensures the integrity of carbon credit transactions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section style={{ backgroundColor: 'rgb(35, 37, 41)', color: '#fff', padding: '8px 0', position: 'relative', marginTop: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '20px', marginTop: '40px' }}>
                    <div>
                        <h2 style={{ marginBottom: '5px' }}>CARBONZERO</h2>

                    </div>
                    <div style={{ textAlign: 'right', fontSize: '12px' }}>
                        © CarbonZero, Inc. All Rights Reserved.
                    </div>
                </div>
            </section>


        </MainLayout>
    );
}

