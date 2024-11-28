import Head from 'next/head'

const MetaTags = ({title, imageURL, description, url}) => {
  return (
    <Head>
        <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (OG) for Facebook, LinkedIn, etc. */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

export default MetaTags