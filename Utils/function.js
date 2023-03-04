import { notification } from 'antd'
import bigdecimal from 'bigdecimal'
import Web3 from 'web3'

export const scientificToDecimal = ( num ) => {
  const sign = Math.sign( num )
  // if the number is in scientific notation remove it
  if ( /\d+\.?\d*e[+-]*\d+/i.test( num ) ) {
    const zero = '0'
    const parts = String( num ).toLowerCase().split( 'e' ) // split into coeff and exponent
    const e = parts.pop() // store the exponential part
    let l = Math.abs( e ) // get the number of zeros
    const direction = e / l // use to determine the zeroes on the left or right
    const coeffArray = parts[0].split( '.' )

    if ( direction === -1 ) {
      coeffArray[0] = Math.abs( coeffArray[0] )
      num = zero + '.' + new Array( l ).join( zero ) + coeffArray.join( '' )
    } else {
      const dec = coeffArray[1]
      if ( dec ) l = l - dec.length
      num = coeffArray.join( '' ) + new Array( l + 1 ).join( zero )
    }
  }

  if ( sign < 0 ) {
    num = -num
  }

  return num
}
export const convertBalanceToWei = ( strValue, iDecimal = 18 ) => {
  var multiplyNum = new bigdecimal.BigDecimal( Math.pow( 10, iDecimal ) )
  var convertValue = new bigdecimal.BigDecimal( String( strValue ) )
  return multiplyNum.multiply( convertValue ).toString().split( '.' )[0]
}

export const convertWeiToBalance = ( strValue, iDecimal = 18 ) => {
  var multiplyNum = new bigdecimal.BigDecimal( Math.pow( 10, iDecimal ) )
  var convertValue = new bigdecimal.BigDecimal( String( strValue ) )
  return scientificToDecimal( convertValue.divide( multiplyNum ).toString() )
}
export const roundingNumber = ( number, rounding = 7 ) => {
  const powNumber = Math.pow( 10, parseInt( rounding ) )
  return Math.floor( number * powNumber ) / powNumber
}
export const convertUtfToHex = ( string )=>{
  return Web3.utils.utf8ToHex( string );
}
export const convertNumberToHex = ( number )=>{
  return Web3.utils.numberToHex( number );
}
export const isObject = ( value ) => {
  return value && typeof value === 'object' && value.constructor === Object
}
export const isNotEnoughGas = ( err = null ) => {
  err = isObject( err ) ? err : { message: err.toString() }
  const outOfGasMsg = 'gas required exceeds allowance'
  return ( err.message && err.message.includes( outOfGasMsg ) ) || ( err.stack && err.stack.includes( outOfGasMsg ) )
}
export const isUserDeniedTransaction = ( err = null ) => {
  err = isObject( err ) ? err : { message: err ? err.toString() : '' }
  const deninedMsg = 'User denied transaction signature'
  const rejectReq = 'Failed or Rejected Request'
  const rejectTranc = 'user rejected transaction'
  return ( err.message && err.message.includes( deninedMsg ) ) || ( err.message && err.message.includes( rejectReq ) ) || ( err.message && err.message.includes( rejectTranc ) )
}
export const isErrorRpc = ( err = null ) => {
  err = isObject( err ) ? err : { message: err ? err.toString() : '' }
  const rejectRpc = 'Internal JSON-RPC error'
  return ( err.message && err.message.includes( rejectRpc ) )
}
export const showNotification = ( title = null, description = '', type = 'open', icon = '' ) => {
  let params = {
    placement: 'bottomRight',
    className: 'notification-class',
    bottom: 54,
    duration: 5,
    icon: icon || ''
  }
  if ( title ) {
    params['message'] = title
  }
  if ( description ) {
    params['description'] = description
  }
  notification[type]( params )
}
export const saveDataLocal = ( key, data ) => {
  localStorage.setItem( key, JSON.stringify( data ) )
}

export const getDataLocal = ( key ) => {
  if ( typeof window !== 'undefined' ) {
    return JSON.parse( localStorage.getItem( key ) )
  } else {
    return false
  }
}
export const obToString = ( key ) => {
  if ( typeof window !== 'undefined' ) {
    return JSON.parse( localStorage.getItem( key ) )
  } else {
    return false
  }
}
export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4
) => {
  return `${address.substr( 0, prefixLength )}...${address.substr(
    address.length - suffixLength,
    suffixLength
  )}`
}


export default () => {}