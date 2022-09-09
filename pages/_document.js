import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="stylesheet" href="css/bootstrap.min.css"/>
        
            <link rel="stylesheet" href="css/style.css"/>      
            <link rel="stylesheet" href="css/responsive.css"/>
            <link rel="icon" href="images/fevicon.png" type="image/gif" />
            <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css"/>
            <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
        </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="js/jquery.min.js" strategy='beforeInteractive'></Script>
        <Script src="js/bootstrap.bundle.min.js" strategy='beforeInteractive'></Script>
        <Script src="js/jquery-3.0.0.min.js" strategy='beforeInteractive'></Script>
        <Script src="js/jquery.mCustomScrollbar.concat.min.js" strategy='beforeInteractive'></Script>
        <Script src="js/custom.js" strategy='beforeInteractive'></Script>
      </body>
    </Html>
  )
}
