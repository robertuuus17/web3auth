import { createContext, FC, ReactNode, useCallback, useEffect, useState } from "react";
// Web3Auth
import { CHAIN_NAMESPACES, SafeEventEmitterProvider, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import RPC from "@/pages/api/solanaRPC";
// Web3
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const LoginContext = createContext({
    provider: null,
    user: null,
    wallet: "",
    balance: 0,
    login: () => { },
    logout: () => { },
    getAccounts: () => { },
    getUserInfo: () => { },
    getBalance: () => { },
    getPrivateKey: () => { },
});

const clientId = "BJTbZxMyz49kqs6qv23nG-AEheKz5gWk2gDCAhvpEdQ9n8S2Zuo8wqsGWTAXXXiEPzFWrwHF4eoWmQp7hk5Scis";
const devnet = "https://api.devnet.solana.com";
const testRPC = "https://little-crimson-ensemble.solana-devnet.discover.quiknode.pro/fe70ebfea4b2f293b0d829d22ea11b2ec030bc5f/";
const prodRPC = "https://misty-greatest-aura.solana-mainnet.discover.quiknode.pro/551836f08625e6ccaa217aaa6d0165bea76248bb/";

const Web3AuthContext: FC<{ children: ReactNode }> = ({ children }) => {

    const [user, setUser] = useState({});
    const [wallet, setWallet] = useState("");
    const [balance, setBalance] = useState(0);
    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

    useEffect(() => {

        const init = async () => {

            try {

                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: "testnet",
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.SOLANA,
                        chainId: "0x3",
                        rpcTarget: "https://cosmological-snowy-lambo.solana-devnet.discover.quiknode.pro/1bf4f5bb542a2a82e07c2bb609c6142fbcdb94e4/",
                    },
                    uiConfig: {
                        theme: "light",
                        loginMethodsOrder: ["facebook", "google"],
                        appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                    }
                });

                const openloginAdapter = new OpenloginAdapter({
                    loginSettings: {
                        mfaLevel: "default",
                    },
                    adapterSettings: {
                        whiteLabel: {
                            name: "Your app Name",
                            logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                            logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
                            defaultLanguage: "en",
                            dark: false,
                        },
                    }
                });

                web3auth.configureAdapter(openloginAdapter);

                setWeb3auth(web3auth);

                await web3auth.initModal({
                    modalConfig: {
                        [WALLET_ADAPTERS.OPENLOGIN]: {
                            label: "openlogin",
                            loginMethods: {
                                google: {
                                    name: "Google Login",
                                    logoDark: "url to your custom logo which will shown in dark mode",
                                },
                                facebook: {
                                    name: "Facebook Login",
                                    showOnModal: false,
                                },
                            },
                            // Setting it to false will hide all social login methods from modal.
                            showOnModal: true,
                        },
                    },
                });

                setProvider(web3auth.provider);

                if (!web3auth) { return }
                if (!web3auth.provider) { return }

                const user = await web3auth.getUserInfo();
                const rpc = new RPC(web3auth.provider);
                const address = await rpc.getAccounts();
                const balance = await rpc.getBalance();

                setUser(user)
                setWallet(address[0])
                setBalance(Number(balance) / LAMPORTS_PER_SOL)

                console.log(provider)

            } catch (error) {
                console.error(error);
            }
        };

        init();

    }, []);

    // Login
    const login = useCallback(async () => {
        if (!web3auth) { return }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
    }, [web3auth]);

    // Logout
    const logout = useCallback(async () => {
        if (!web3auth) { return }
        setProvider(null);
        await web3auth.logout();
    }, [web3auth]);

    // Get user wallet accounts
    const getAccounts = useCallback(async () => {
        if (!provider) { return }
        const rpc = new RPC(provider);
        const address = await rpc.getAccounts();
        return address[0];
    }, [provider]);

    // Get user info hosted in Web3auth
    const getUserInfo = useCallback(async () => {
        if (!web3auth) { return }
        const user = await web3auth.getUserInfo();
        return user;
    }, [web3auth]);

    // Get user balance
    const getBalance = useCallback(async () => {
        if (!provider) { return }
        const rpc = new RPC(provider);
        const balance = await rpc.getBalance();
        return Number(balance) / LAMPORTS_PER_SOL;
    }, [provider]);

    // Get user's wallet private key
    const getPrivateKey = useCallback(async () => {
        if (!provider) { return }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();
        return privateKey
    }, [provider]);

    return (
        <LoginContext.Provider
            value={{
                user,
                wallet,
                provider,
                balance,
                login,
                logout,
                getAccounts,
                getUserInfo,
                getBalance,
                getPrivateKey
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default Web3AuthContext;
