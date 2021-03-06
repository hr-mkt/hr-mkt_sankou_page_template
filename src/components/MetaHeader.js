import * as React from 'react'
import Head from 'next/head'

const MetaHeader =  ({ title, description, keyword, image, url }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={keyword} />
            <meta property="og:type" content="blog" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@tcr_jp" />
            <meta name="twitter:url" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <link rel="canonical" href={url} />
            <link rel="shortcut icon" href={'/favicons/favicon.ico'} />
            <link rel="apple-touch-icon" href={'/favicons/apple-touch-icon.png'} />
        </Head>
    )
}


export default MetaHeader
