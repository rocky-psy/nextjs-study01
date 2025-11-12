
import { useRouter } from "next/router";


//URL 파라미터 방식
export default function Page() {

    const router = useRouter();
    console.log(router);
        const { id } = router.query; // 구조 분해할당으로 바로 꺼내올 수 있음

      

  return <h1>Book --- {id}</h1>;
}   