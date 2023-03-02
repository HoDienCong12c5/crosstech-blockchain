import ReduxService from '@/Utils/ReduxService';
const { ethereum } = typeof window !== 'undefined' ? window : {};
class Metamask{
  static async connect(){
    if ( typeof window.ethereum !== 'undefined' ) {
      const metaMask = await ethereum.request( { method: 'eth_accounts' } )
      console.log( {metaMask} );
      ReduxService.setMetamask( metaMask );
    }else{
        console.log( 'not insstalled' );
    }
  }
}
export default Metamask;