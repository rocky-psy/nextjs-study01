import GlobalLayout from "@/components/global-layout";
import SearchableLayout from "@/components/searchable-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import  React from "react";
import { ReactNode } from "react";

// type 은 새로운 타입 별칭 (alias)을 정의한다는 것으로, 즉, 사용자 정의타입 이름입니다.
//
type NextPageWithLayout = NextPage & 
  { 
    getLayout?: (page: ReactNode) => ReactNode; // 선택적 프로퍼티 (optional property) 있어도 되고 없어도 되는 프로퍼티
  };
    

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout }) {
  
  const getLayout = Component.getLayout ?? ((page : React.ReactNode) => page);
  

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}  
    </GlobalLayout>
    

  ); 
  

}
