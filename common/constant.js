export const BSC_RPC = {
  56: {
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com']
  },
  97: {
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com']
  }
}
export const ETH_RPC = {
  1: {
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    chainId: '0x31',
    chainName: 'Ethereum Chain Mainnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com']
  },
  '0x4e454153': {
    rpcUrls: ['https://testnet.aurora.dev'],
    chainId: '0x61',
    chainName: 'Ethereum Chain Testnet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com']
  }
}
export const REQUEST_TYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export const LOCALE_DATA = {
  JA: 'ja',
  CN: 'cn',
  EN: 'en'
}

export const CONNECTION_METHOD = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT',
  PANTOGRAPH: 'PANTOGRAPH'
}
export const modalConfig = {
  wrapClassName: '',
  width: 500,
  //click over modal to close
  maskClosable: true,
  isDisableIcon: false,
  //show icon close modal
  closable: true,
  maskStyle: {},
  title: null,
  footer: null,
  //click esc modal to close
  keyboard:true
}
export default ()=>{}