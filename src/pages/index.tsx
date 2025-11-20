// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { useEffect } from "react";
import fetchRandomBooks from "@/lib/fetch-random-books";


export const getServerSideProps = async () => {
  // 해당 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 미리 불러올 수 함수
  // 무조건 객체를 반환해야 한다.

  //const allBooks = await fetchBooks();  
  //const recoBooks = await fetchRandomBooks();

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks()
  ]); // api request 병렬 처리..

  return { props: {
          allBooks, 
          recoBooks
  } };

};

export default function Home({allBooks, recoBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  useEffect(() =>{

    console.log(window.location.hostname);
    console.log(allBooks);


  }
  , []);
  
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />  
          ))} 

      </section>
      <section>
        <h3>등록된 모든 도서</h3>
              {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />  
          ))} 
      </section>
    </div>
  );

}

Home.getLayout = (page: React.ReactNode) =>  {
  return <SearchableLayout>{page}</SearchableLayout>;
}
