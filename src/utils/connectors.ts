import { InjectedConnector } from '@web3-react/injected-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const connectors = {
  metamask: () => new InjectedConnector({ supportedChainIds: [56] }),
}

export default connectors
