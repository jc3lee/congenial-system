import Head from "next/head"
const WEBSITE_TITLE = "Ben Addison | Digital Marketing Strategy"
const WEBSITE_DESCRIPTION = "Are you looking for a digital marketing expert to propulse your business online and generate sales? I'm Ben Addison, and I've been using digital marketing techniques to help businesses make profits online."
const WEBSITE_URL = ""
const TWITTER_CARD_SRC = "/assets/images/twitterCard.png"

const Header = ({ title = "Welcome!" }) => {
  return (
    <Head>
      <title>{WEBSITE_TITLE}</title>
      {/* <meta name="description" content={WEBSITE_DESCRIPTION} />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <title>{WEBSITE_TITLE}</title>
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta itemprop="name" content={WEBSITE_TITLE} />
      <meta itemprop="description" content={WEBSITE_DESCRIPTION} />
      <meta itemprop="image" content={TWITTER_CARD_SRC} />
      <meta property="og:url" content={WEBSITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={WEBSITE_TITLE} />
      <meta property="og:description" content={WEBSITE_DESCRIPTION} />
      <meta property="og:image" content={TWITTER_CARD_SRC} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={WEBSITE_TITLE} />
      <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
      <meta name="twitter:image" content={TWITTER_CARD_SRC} /> */}
    </Head>
  )
}

export default Header