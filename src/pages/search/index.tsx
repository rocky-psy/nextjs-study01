import { useRouter } from "next/router";



export default function Page() {

  const router = useRouter();

  //console.log(router);
   const { q } = router.query; // 구조 분해할당으로 바로 꺼내올 수 있음

  return <div>Search 페이지 {q} </div>;
}
// 쿼리스트링에 대한 설정 ( useRouter 훅 사용 )  http://localhost:3000/search?q=%EB%B0%95%EC%84%B1%EC%97%B0
