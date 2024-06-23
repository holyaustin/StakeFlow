import {
    DynamicContextProvider,
    DynamicWidget,
  } from "@dynamic-labs/sdk-react-core";
  
  import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
  
  
  export default function DynamicWallet() {
    return (
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "bf1d0314-1d62-4467-93b7-597b6f626ba2",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    );
  };