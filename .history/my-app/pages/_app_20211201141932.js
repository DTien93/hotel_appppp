import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'
// Layout
import Layout from '../components/Layout'


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
