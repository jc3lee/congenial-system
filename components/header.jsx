import Head from "next/head"

const Header = ({ title = "Welcome!" }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" />
    </Head>
  )
}

export default Header