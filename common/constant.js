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
  },
  5:{
    rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
    chainId: '0x5',
    chainName: 'Ethereum (Goerli) Testnet',
    nativeCurrency: {
      name: 'Ethereum (Goerli) ',
      symbol: 'ETH_T',
      decimals: 18
    },
    blockExplorerUrls: ['https://goerli.etherscan.io/']
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
  clickOverClose:true,
  isDisableIcon: false,
  //show icon close modal
  showIconClose:true,
  maskStyle: {},
  title: null,
  footer: null,
  //click esc modal to close
  clickESCClose:true,
}
export const GlobalModal = {
  body: <></>,
  modalConfig:modalConfig
}
export const OBSERVER_KEY = {
  CHANGED_ACCOUNT:'CHANGED_ACCOUNT',
  LOGIN:'LOGIN'
}
export const dataFireBase = {
  'time': 0,
  'hash': '0',
  'to': '0',
  'from': '0',
  'title': '0',
  'contract': '0',
  'data': {
    'image': '0',
    'address': '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    'nameUser': '0',
    'title': '0'
  },
  'id': '0'
}
export const PAGE__SIGN = [
  '/Screen/MyProfile',
]

export const URI_NFT = process.env.NEXT_PUBLIC_URI_NFT
export const URI_NFT_CHAIN = process.env.NEXT_PUBLIC_URI_NFT_CHAIN
export const URL_NFT = process.env.NEXT_PUBLIC_IPFS

export default () => { }
