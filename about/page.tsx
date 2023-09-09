import React from 'react';
import styles from './about.module.css';

const AboutPage = () => {
    return (
        <div>
            <hr className={styles.noMarginHr} />
            <section id={styles.hero2} className={styles.backgroundImageSection}>
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className={`${styles.headerText2} ${styles.largeText}`}>
                        </h1>
                        <br /><br />
                    </div>
                </div>
                <div className="row2">
                    <div className="col d-flex flex-column align-items-center">
                        <h1 className={`${styles.headerText2} ${styles.largeText}`} style={{ marginBottom: '100px' }}>
                            ABOUT PRODUCT
                        </h1>

                    </div>
                </div>
            </section>

            <section id={styles.hero2}>
                <div className="col d-flex flex-column align-items-center">
                    <h1 className={`${styles.headerText2} ${styles.largeText}`}>

                    </h1>
                    <br /><br />
                    <div style={{ margin: '90px 0 150px', textAlign: 'center' }}>
                        <p>Discover our innovative platform, where you can purchase tokenized carbon credits to offset your carbon footprint. Verified and </p>
                        <p>certified by reputable organizations, our credits represent real greenhouse gas reductions. With a user-friendly interface and secure </p>
                        <p>blockchain technology, it is easy to make a positive impact. Join our eco-conscious community today and be part of the solution to </p>
                        <p>combat climate change. Embrace the future of carbon offsetting and create a greener planet</p>
                    </div>
                </div>

            </section>

            <section style={{ backgroundColor: 'rgb(35, 37, 41)', color: '#fff', padding: '8px 0', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '20px', marginTop: '40px' }}>
                    <div>
                        <h2 style={{ marginBottom: '5px' }}>CARBONZERO</h2>
                        {/* Aquí podrías agregar tus preguntas frecuentes u otro contenido */}
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '12px' }}>
                        © CarbonZero, Inc. All Rights Reserved.
                    </div>
                </div>
            </section>



        </div>
    );
};

export default AboutPage;
