import { Helmet } from 'react-helmet-async';

export function SEO() {
  const siteUrl = 'https://resilient-lily-22ff49.netlify.app';
  const title = 'JOPIPS - Professional Forex & Gold Trading Signals | 7-Day Free Trial';
  const description = 'Get real-time forex and gold trading signals delivered via Telegram. Start your 7-day free trial with no credit card required. Join 12,450+ disciplined traders worldwide.';
  const ogImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="forex signals, gold trading signals, forex trading, telegram signals, trading signals, forex tips, gold tips, professional trading, JOPIPS" />
      <meta name="author" content="JOPIPS" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="JOPIPS" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0B0F19" />
      <meta name="msapplication-TileColor" content="#C9A227" />
      <meta name="application-name" content="JOPIPS" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "JOPIPS",
          "description": "Professional Forex and Gold Trading Signals Service",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "image": ogImage,
          "priceRange": "$49/month",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Global"
          },
          "offers": {
            "@type": "Offer",
            "name": "7-Day Free Trial",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1247"
          }
        })}
      </script>
    </Helmet>
  );
}
