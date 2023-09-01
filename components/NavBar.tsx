import { LoginContext } from "@/contexts/Web3AuthContext";
import { FC, useContext } from "react"
import styles from "@/styles/NavBar.module.css"

const NavBar: FC = () => {

    const { login, logout, provider } = useContext(LoginContext);

    const loginButton = () => {
        return (
            <button onClick={login}>Log In</button>
        )
    }

    const logoutButton = () => {
        return (
            <button onClick={logout}>Log Out</button>
        )
    }

    return (
        <nav>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>{provider ? logoutButton() : loginButton()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar
