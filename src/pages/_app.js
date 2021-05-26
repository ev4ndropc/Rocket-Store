import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '../styles/globals.css'
import config from '../config'

const theme = extendTheme(config.theme)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
