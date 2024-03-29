
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const originalRenderPage = ctx.renderPage

  //   // Run the React rendering logic synchronously
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       // Useful for wrapping the whole react tree
  //       enhanceApp: (App) => App,
  //       // Useful for wrapping in a per-page basis
  //       enhanceComponent: (Component) => Component,
  //     })

  //   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //   const initialProps = await Document.getInitialProps(ctx)

  //   return initialProps
  // }

  render() {
    return (
      <Html lang="en">
        <Head >
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <link rel="icon" href="https://skywalker.infura-ipfs.io/ipfs/QmfSbEq4qrQn53YydFj59Saiz9issKWFuxEJS4hDTCnNzh" />
          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{
            __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WRGMC62');`
          }}/>
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript dangerouslySetInnerHTML={{
            __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRGMC62"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}/>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
