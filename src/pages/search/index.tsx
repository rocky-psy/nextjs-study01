import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
// import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";


//Next.js에서 getServerSideProps는 요청이 들어올 때 서버에서 실행되는 함수입니다.
// 그리고 Next.js는 서버 요청과 관련된 여러 정보를 하나의 context 객체에 담아 함수의 첫 인자로 전달합니다.
// 즉 context는 "현재 들어온 요청의 모든 정보"를 담고 있는 객체입니다.
export const getServerSideProps = async (context : GetServerSidePropsContext) => {

    console.log(context);
    const q = context.query.q; // 쿼리스트링 값 가져오기
    const books = await fetchBooks(q as string); // 쿼리스트링이 없을 수도 있으므로 undefined 허용
    
    return { 
        props:{ books, }
    }; // 프롭스 프로퍼티를 포함하는 객체를 리턴.
}

export default function Page({books}:InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const router = useRouter();
//   //console.log(router);
//    const { q } = router.query; // 구조 분해할당으로 바로 꺼내올 수 있음

    return (   
        <div>{books.map((book) =>(
                <BookItem key={book.id} {...book }/>
            ))}
        </div>
    ); 
}

Page.getLayout = (page : React.ReactNode) => {
    return (
        <SearchableLayout>{page}</SearchableLayout>
    );
}   

// 쿼리스트링에 대한 설정 ( useRouter 훅 사용 )  http://localhost:3000/search?q=%EB%B0%95%EC%84%B1%EC%97%B0
