import { CandyMachine, Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import { CustomChainConfig, SafeEventEmitterProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";

export default class SolanaRpc {
    private provider: SafeEventEmitterProvider;

    constructor(provider: SafeEventEmitterProvider) {
        this.provider = provider;
    }

    getAccounts = async (): Promise<string[]> => {
        try {
            const solanaWallet = new SolanaWallet(this.provider);
            const acc = await solanaWallet.requestAccounts()

            return acc;
        } catch (error) {
            return error as string[];
        }
    };

    getPrivateKey = async (): Promise<string> => {
        const privateKey = await this.provider.request({
            method: "solanaPrivateKey",
        });

        return privateKey as string;
    };

    getBalance = async (): Promise<string> => {
        try {
            const solanaWallet = new SolanaWallet(this.provider);
            const connectionConfig = await solanaWallet.request<CustomChainConfig>({
                method: "solana_provider_config",
                params: [],
            });
            const conn = new Connection(connectionConfig.rpcTarget);

            const accounts = await solanaWallet.requestAccounts();
            const balance = await conn.getBalance(new PublicKey(accounts[0]));

            return balance.toString();
        } catch (error) {
            return error as string;
        }
    };

}
