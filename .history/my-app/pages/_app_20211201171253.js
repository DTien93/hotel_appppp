import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'
// Layout
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}>
          </Component>
          </Layout>
        </ChakraProvider>
    </>
  )
}

export default MyApp
