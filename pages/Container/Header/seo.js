import Head from 'next/head'
import React from 'react'

const SEO = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Cross - Tech</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://skywalker.infura-ipfs.io/ipfs/QmXtHZwGGsvvMmVBJDCjDH4fGNPa9rKw5zaSfkX9iSVc2r" />
      <meta name="description" content="Eatnsmile"/>

      {/* <!-- Google / Search Engine Tags --/> */}
      <meta itemprop="name" content="Cross - Tech"/>
      <meta itemprop="description" content="Cross - Tech"/>
      <meta itemprop="image" content="https://skywalker.infura-ipfs.io/ipfs/QmXtHZwGGsvvMmVBJDCjDH4fGNPa9rKw5zaSfkX9iSVc2r"/>

      {/* <!-- Facebook Meta Tags --/> */}
      <meta property="og:url" content="http://dev-star-token-client.w3w.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Cross - Tech"/>
      <meta property="og:description" content="Cross - Tech"/>
      <meta property="og:image" content="https://skywalker.infura-ipfs.io/ipfs/QmXtHZwGGsvvMmVBJDCjDH4fGNPa9rKw5zaSfkX9iSVc2r"/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Cross - Tech"/>
      <meta name="twitter:description" content="Cross - Tech"/>
      <meta name="twitter:image" content="https://skywalker.infura-ipfs.io/ipfs/QmXtHZwGGsvvMmVBJDCjDH4fGNPa9rKw5zaSfkX9iSVc2r" />

    </Head>
  )
}
export async function getServerSideProps ({ params, res }) {
  return {}
}
export default SEO
