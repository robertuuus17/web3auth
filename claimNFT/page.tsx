import React from 'react';
import Image from 'next/image';
import styles from './claimNFT.module.css';

const ClaimNFTPage = () => {
    return (
        <div>
            <hr />
            <section id={styles.hero2} className={styles.backgroundImageSection}>
                <div className='row'>
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className={`${styles.headerText2} ${styles.largeText}`}>
                        </h1>
                        <br /><br />
                    </div>
                </div>
                <div className='row2'>
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className={`${styles.headerText2} ${styles.largeText}`} style={{ marginBottom: '130px' }}>
                            Ready to make a difference? Hop <br />on the climate change train now!
                        </h1>

                    </div>

                </div>
            </section>

            <section id={styles.hero2}>
                <div className="col d-flex flex-column align-items-center">
                    <h1 className={`${styles.headerText2} ${styles.largeText}`}>
                        textoooooooooooooo
                    </h1>
                    <br /><br />
                    <button className={styles.buttonBuy}>CLAIM NFT a pagar chaval</button>
                </div>

            </section>
        </div>
    );
};

export default ClaimNFTPage;
