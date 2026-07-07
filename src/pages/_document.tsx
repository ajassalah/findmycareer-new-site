import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Find My Career",
              url: "https://findmycareer.org.uk",
              description:
                "Sri Lanka-based international education consultancy with 17+ years of experience.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "2nd Floor, 4 De Montfort St",
                  addressLocality: "Leicester",
                  postalCode: "LE1 7GA",
                  addressCountry: "GB",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "No. 18, Beltona Lane",
                  addressLocality: "Colombo",
                  postalCode: "04",
                  addressCountry: "LK",
                },
              ],
              areaServed: ["LK", "GB", "AU", "CA", "DE", "FR", "IE", "NZ", "US"],
            }),
          }}
        />
      </Head>
      <body style={{ fontFamily: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
