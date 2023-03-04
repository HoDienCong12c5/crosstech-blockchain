class IPFSService{
  static async createIPFS(){
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
    const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_SERET_KEY
    const authorization = 'Basic ' + btoa( projectId + ':' + projectSecretKey );
    const ipfs = ipfsHttpClient( {
      url: 'https://ipfs.infura.io:5001/api/v0',
      headers: {
        authorization
      }
    } )
    return ipfs
  }
  static async uploadFile( file ){
    try {
      const ipfs = await this.createIPFS()
      const result = await ipfs.add( file );
      return result?.path
    } catch ( error ) {
      return null
    }

  }
}
export default IPFSService;