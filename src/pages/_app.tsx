import SmoothScroll from "@/components/Portuguese/Lenis";
import "@/styles/globals.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import "animate.css/animate.compat.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Script from "next/script";
import { QueryParamsProvider } from "@/context/QueryContext";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  async function fetchUserDetails(): Promise<UserData> {
    return {
      email: "user@example.com",
      firstName: "John",
      lastName: "Doe",
      phone: "1234567890",
      gender: "male",
      dateOfBirth: "1990-01-01",
      city: "CityName",
      state: "StateName",
      zipCode: "12345",
      country: "CountryName",
    };
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchUserDetails();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default;
          ReactPixel.init("875794081268430");
          ReactPixel.pageView();
        })
        .catch((err) =>
          console.error("Failed to load React Facebook Pixel", err)
        );
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="O Rei dos Sites - Aprenda a viver de sites"
        />
        <title>O Rei dos Sites</title>
        <link
          rel="preload"
          href="https://scripts.converteai.net/4b7dcf06-4129-47b4-a172-e3169474979f/players/6784e725ad735d16cd74217e/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://images.converteai.net/4b7dcf06-4129-47b4-a172-e3169474979f/players/6784e725ad735d16cd74217e/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/4b7dcf06-4129-47b4-a172-e3169474979f/6784e6ff209b6966c0f1543b/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="og:description"
          content="Descubra o mundo da tecnologia e desenvolvimento web com o Rei dos Sites. Aprenda a criar sites do zero e transforme suas ideias em realidade."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/dei-de-presente-software.appspot.com/o/BannerMobile.jpg?alt=media&token=b4d01a47-e3af-4511-a853-9a356776e41b"
        />
      </Head>
      <Script
        id="HotJarAnalytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `  (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
    })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5262179);`,
        }}
      />
      <SmoothScroll />
      <GoogleAnalytics gaId="G-32JCH9GGY4" />
      <QueryParamsProvider>
        <Component {...pageProps} />
      </QueryParamsProvider>
    </>
  );
}
