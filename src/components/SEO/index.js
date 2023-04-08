import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const socialTags = ({
  createdAt,
  description,
  image,
  openGraphType,
  social: { twitter },
  title,
  updatedAt,
  url,
}) => [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: twitter },
    { name: "twitter:description", content: description },
    { name: "twitter:image:src", content: image },
    { name: "twitter:site", content: twitter },
    { name: "twitter:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: image },
    { name: "og:published_time", content: createdAt || new Date().toISOString() },
    { name: "og:modified_time", content: updatedAt || new Date().toISOString() },
    { name: "og:site_name", content: title },
    { name: "og:title", content: title },
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
];

const SEO = (props) => {
  const { description, image, schemaType, title, url } = props;
  return (
    <Head>
      <title>Ale Davila</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      { socialTags(props).map(({ name, content }) => <meta key={name} name={name} content={content} /> ) }
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
      <link rel="icon" type="image/x-icon" href="/images/cc-logo-floating.png" /> {/* for image in link */}
    </Head>
  )
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  openGraphType: PropTypes.string,
  schemaType: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
  }),
  title: PropTypes.string,
  url: PropTypes.string,
};

SEO.defaultProps = {
  description: 'Alessandra Davila - frontend developer',
  image: '/images/cc-logo-floating.png',
  openGraphType: 'website',
  schemaType: 'Article',
  social: {
    twitter: '@aledavila__'
  },
  title: 'Ale Davila',
  url: 'https://www.aledavila.com',
};

export default SEO;