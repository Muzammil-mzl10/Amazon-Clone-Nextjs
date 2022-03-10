import "../styles/globals.css";
// import { Provider } from "react-redux"
import { Provider } from 'react-redux';
import { SessionProvider } from "next-auth/react"
import { store } from "../app/store";
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
  <SessionProvider session={pageProps.session}>
     <Component {...pageProps} />
  </SessionProvider>
  </Provider>
  )
}

export default MyApp;
