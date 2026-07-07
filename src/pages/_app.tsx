import "@/styles.css";

import Head from "next/head";
import type { AppProps } from "next/app";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Find My Career - Study Abroad Consultancy in Sri Lanka</title>
        <meta
          name="description"
          content="Sri Lanka's most trusted study-abroad consultancy. 17+ years guiding students to top universities in the UK, Australia, Canada, Europe and more."
        />
        <meta name="author" content="Find My Career" />
        <meta property="og:site_name" content="Find My Career" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Find My Career - Study Abroad Consultancy in Sri Lanka" />
        <meta name="twitter:title" content="Find My Career - Study Abroad Consultancy in Sri Lanka" />
        <meta
          property="og:description"
          content="Sri Lanka's most trusted study-abroad consultancy. 17+ years guiding students to top universities in the UK, Australia, Canada, Europe and more."
        />
        <meta
          name="twitter:description"
          content="Sri Lanka's most trusted study-abroad consultancy. 17+ years guiding students to top universities in the UK, Australia, Canada, Europe and more."
        />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
