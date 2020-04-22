import Header from "next/head";
import FooterComponent from "../component/Footer";
import HeaderComponent from "../component/Header";

function App({ Component, pageProps }) {
  return <div>
    <Header>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <base href="/"></base>
      <title>Magnews24h</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700%7CLato:300,400" rel="stylesheet" />
      <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
      <link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
      <link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />
      <link rel="stylesheet" href="/css/font-awesome.min.css" />
      <link type="text/css" rel="stylesheet" href="css/style.css" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164230711-1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-164230711-1');`
        }}
      />
      <script>

      </script>


    </Header>
    <HeaderComponent />
    <Component {...pageProps} />
    <FooterComponent />
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

  </div>
}

export default App