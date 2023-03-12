// import { DefaultSeo, NextSeo } from '';
import Head from 'next/head'
import React from 'react'
const SEO_param = {
  title: 'Cross - Tech',
  description: 'Cross - Tech basic blockchain',
  openGraph: {
    url: 'https://crosstech-blockchain.vercel.app/',
    title: 'Cross - Tech',
    description: 'Cross - Tech basic blockchain',
    images: [
      {
        url: 'http://ipfs.pantograph.app/ipfs/QmXn99vcRhrYdcZDQyunKPuwPABA2neYne6XLcVBLxrjTM',
        width: 800,
        height: 600,
        alt: 'Image Alt Text',
      },
    ],
    site_name: 'Cross - Tech',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
const SEO = () => {
  return (
    <>
      {/* <DefaultSeo {...SEO_param} /> */}
      <Head>
        <meta charSet="utf-8" />
        <title>Cross - Tech</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no' />
        <link rel="icon" href="https://skywalker.infura-ipfs.io/ipfs/QmTZBqX5FbMPQEC6AaTmhaqDSPv3gpp5hb3XzZN7piA534" />
        <meta name="description" content="Cross - Tech"/>


        <meta itemprop="name" content="Cross - Tech"/>
        <meta itemprop="description" content="Cross - Tech"/>
        <meta itemprop="image" content="https://skywalker.infura-ipfs.io/ipfs/QmTZBqX5FbMPQEC6AaTmhaqDSPv3gpp5hb3XzZN7piA534"/>

        <meta property="og:url" content="http://dev-star-token-client.w3w.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Cross - Tech"/>
        <meta property="og:description" content="Cross - Tech"/>
        <meta property="og:image" content="https://skywalker.infura-ipfs.io/ipfs/QmTZBqX5FbMPQEC6AaTmhaqDSPv3gpp5hb3XzZN7piA534"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Cross - Tech"/>
        <meta name="twitter:description" content="Cross - Tech"/>
        <meta name="twitter:image" content="https://skywalker.infura-ipfs.io/ipfs/QmTZBqX5FbMPQEC6AaTmhaqDSPv3gpp5hb3XzZN7piA534" />

      </Head>
    </>

  )
}

export default SEO
