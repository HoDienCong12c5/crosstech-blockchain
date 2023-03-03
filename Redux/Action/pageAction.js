import { KEY_PAGE } from '../Lib/constants';

export default class PageReduxAction {
  static setInternet ( payload ) {
    return {
      type: KEY_PAGE.SET_INTERNET,
      payload
    }
  }
  static setMetamask ( payload ) {
    return {
      type: KEY_PAGE.SET_METAMASK_INFO,
      payload
    }
  }
  static setBalance ( payload ) {
    return {
      type: KEY_PAGE.SET_BALANCE,
      payload
    };
  }
  static setBnbPrice ( payload ) {
    return {
      type: KEY_PAGE.SET_BNB_PRICE,
      payload
    };
  }
  static setConnectionMethod ( payload ) {
    return {
      type: KEY_PAGE.CONNECTION_METHOD,
      payload
    };
  }
}
