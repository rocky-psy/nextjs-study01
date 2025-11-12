import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <>  
        <header>헤더</header>
        <Component {...pageProps} />
        <footer>푸터</footer>
    </>

  );
  

}
