import "../styles/globals.css";
// import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps }) {
  return(
  <SessionProvider session={pageProps.session}>
     <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp;
