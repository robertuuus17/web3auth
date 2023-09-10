import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { LoginContext } from '@/contexts/Web3AuthContext';
import styles from './NavBar.module.css';

const NavBar: FC = () => {

    const { login, logout, provider } = useContext(LoginContext);

    const loginButton = () => {
        return (
            <span className={`${styles.button} ${styles.buttonMargin}`} onClick={login}>
                Log In
            </span>
        );
    };

    const logoutButton = () => {
        return (
            <span className={`${styles.button} ${styles.buttonMargin}`} onClick={logout}>
                Log Out
            </span>
        );
    };

    return (
        <nav className={`${styles.navbar} ${styles.alignLeft}`}>
            <section>
                <div>
                    <br />
                </div>
                <div className={`d-flex justify-content-between align-items-center ${styles.links}`}>
                    <span className={`${styles.brandText}`}>CARBONZERO</span>
                    <div className="row">
                        <div className="col">
                            <ul className="list-unstyled d-flex align-items-center">
                                <li>
                                    {provider ? (
                                        logoutButton()
                                    ) : (
                                        loginButton()
                                    )}
                                </li>
                                <li><Link href="/projects/page" className={`${styles.linkMargin} ${styles.smallText}`}>Projects</Link></li>
                                <li><Link href="/about/page" className={`${styles.linkMargin} ${styles.smallText}`}>About</Link></li>
                                <li><Link href="/profile/page" className={`${styles.linkMargin} ${styles.smallText}`}>Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default NavBar;

