import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Meta from '../components/Meta'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <div className='page-container'>
        <Menu />
        <div className='page-section2'>
          <div className='page-section2-container'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
