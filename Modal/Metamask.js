import { KEY_PAGE } from '@/Redux/Lib/constants';
import ReduxService from '@/Utils/ReduxService';
import MetaMaskOnboarding from '@metamask/onboarding';
import { isMobile } from 'react-device-detect';
import Web3 from 'web3';
import Observer from '@/Utils/Observer'
import { removeDataLocal } from '@/Utils/function';
import { OBSERVER_KEY } from '@/common/constant';
const { ethereum } = typeof window !== 'undefined' ? window : {};
let onboarding
class Metamask {
  static async connect() {
    if (typeof window.ethereum !== 'undefined') {
      let address = '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c'
      this.signPersonalMessage(address, 'CrossTech')
    } else {
      console.log('not insstalled');
    }
  }
  static async initialize() {
    try {
      if (!onboarding) {
        onboarding = new MetaMaskOnboarding()
      }
      if (!MetaMaskOnboarding.isMetaMaskInstalled() && !isMobile) {
        onboarding.startOnboarding()
      } else {
        onboarding.stopOnboarding()
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        if (accounts.length > 0) {
          this.onConnect(accounts)

          // subscribe to events
          this.subscribeToEvents()
        } else {
          let accounts = await this.enableMetaMask()
          this.onConnect(accounts)
          // subscribe to events
          this.subscribeToEvents()
        }
      }
    } catch (error) {
      console.log('initialize', error)
    }
  }
  static changeAc = (acc)=>{
    console.log('====================================');
    console.log({acc});
    console.log('====================================');
  }
  static subscribeToEvents() {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      ethereum.on('accountsChanged', this.changeAc())

      ethereum.on('chainChanged', this.killSession())
      ethereum.on('networkChanged', this.killSession())
    }
  }
  static resetApp () {
    console.log('====================================');
    console.log('reset');
    console.log('====================================');
    // update redux state
    ReduxService.resetUser()
    // Observer.emit(OBSERVER_KEY.CHANGED_ACCOUNT)
    removeDataLocal('wallet_connect_session')
  }

  static killSession = () => {
    this.resetApp()
    console.log('====================================');
    console.log({onboarding});
    console.log('====================================');
    if (onboarding) {
      // onboarding?.stopOnboarding()
    }
  }
  static async onConnect(accounts) {
    const address = accounts[0]
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    })
    const dataMetaMask = {
      chainId,
      address: address,
      accounts: [address]
    }
    const signature = await this.signPersonalMessage(accounts[0])
    if (signature && signature?.includes('0x')) {
      ReduxService.setMetamask(dataMetaMask)
      ReduxService.setConnectionMethod(KEY_PAGE.META_MASK)
    }

  }

  static signPersonalMessage(address, message) {
    //
    message = 'CrossTech Welcome to you'
    const msgParams = [
      Web3.utils.toHex(message),
      address
    ]
    if (window.ethereum) {
      return new Promise((resolve, reject) => {
        // Sign transaction
        window.ethereum
          .request({ method: 'personal_sign', params: msgParams })
          .then((result) => {
            // Returns signed transaction
            return resolve(result)
          })
          .catch((error) => {
            // Error returned when rejected
            return reject(error)
          })
      })
    } else {
      return null
    }
  }
}
export default Metamask;
