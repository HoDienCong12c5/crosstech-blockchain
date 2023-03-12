import Head from 'next/head'
import React from 'react'

const SEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Cross - Tech</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="http://ipfs.pantograph.app/ipfs/QmXn99vcRhrYdcZDQyunKPuwPABA2neYne6XLcVBLxrjTM" />
      <meta name="description" content="Eatnsmile"/>

      {/* <!-- Google / Search Engine Tags --/> */}
      <meta itemprop="name" content="Cross - Tech"/>
      <meta itemprop="description" content="Cross - Tech"/>
      <meta itemprop="image" content="http://ipfs.pantograph.app/ipfs/QmXn99vcRhrYdcZDQyunKPuwPABA2neYne6XLcVBLxrjTM"/>

      {/* <!-- Facebook Meta Tags --/> */}
      <meta property="og:url" content="http://dev-star-token-client.w3w.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Cross - Tech"/>
      <meta property="og:description" content="Cross - Tech"/>
      <meta property="og:image" content="http://ipfs.pantograph.app/ipfs/QmXn99vcRhrYdcZDQyunKPuwPABA2neYne6XLcVBLxrjTM"/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Cross - Tech"/>
      <meta name="twitter:description" content="Cross - Tech"/>
      <meta name="twitter:image" content="http://ipfs.pantograph.app/ipfs/QmXn99vcRhrYdcZDQyunKPuwPABA2neYne6XLcVBLxrjTM" />

    </Head>
  )
}
export async function getServerSideProps ({ params, res }) {
  return {}
}
export default SEO
