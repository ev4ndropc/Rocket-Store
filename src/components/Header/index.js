import Head from 'next/head'
import config from '../../config'

const Header = (props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      <meta name="description" content={props.description} />                                                                                                                                                                                                                                                                              ">
      <meta name="keywords" content={props.keywords} />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/images/logo-mini.png" />
      <title>{props.pageTitle} - {config.default.site_name}</title>
    </Head>
  )
}

export default Header