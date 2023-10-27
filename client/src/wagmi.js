import { configureChains, createConfig } from "wagmi";
import { mainnet, bscTestnet, bsc, sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, sepolia, bscTestnet],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "DrawCard",
      },
    }),
    new WalletConnectConnector({
      chains: [mainnet, bsc, sepolia, bscTestnet],
      options: { projectId: process.env.REACT_APP_PROJECT_ID },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});
