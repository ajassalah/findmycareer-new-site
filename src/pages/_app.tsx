import "@/styles.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { CookieConsent } from "@/components/CookieConsent";
import { getSeo, SITE_URL } from "@/lib/seo";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const seo = getSeo(router.pathname);
  const currentPath = router.asPath.split("?")[0].split("#")[0];
  const canonical = `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta name="author" content="Find My Career" />
        <meta property="og:site_name" content="Find My Career" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />
        <meta
          property="og:description"
          content={seo.description}
        />
        <meta
          name="twitter:description"
          content={seo.description}
        />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
