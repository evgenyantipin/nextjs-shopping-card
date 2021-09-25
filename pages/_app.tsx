import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import GlobalState from 'context/GlobalState'
import Nav from 'components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <Nav/>
      <Component {...pageProps} />;
    </GlobalState>
  )
}
export default MyApp
