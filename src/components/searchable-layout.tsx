import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ReactNode } from 'react';  
import style from './searchable-layout.module.css';


export default function SearchableLayout({children} : {children : ReactNode}) {
    const [search, setSerach] = React.useState("");
    const router =  useRouter();

    const q = router.query.q as string;  

    useEffect(() => {
        setSerach(q || ""); // q의 값이 있으면 q, 없으면 빈문자열
    }, [q]);
    
    
    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSerach(e.target.value);
         
    } 

    const onSubmit = () => {
        if(!search || q === search ) return;
        router.push(`/search?q=${search}`);

    };

    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            onSubmit();
        }
    }

    return (
            <div>
                <div className={style.searchbar_container}>
                    <input value={search} 
                    onChange={onChangeSearch} 
                    onKeyDown={onKeyDown}
                    type="text" 
                    placeholder="검색어를 입력하세요." />
                    <button onClick={onSubmit} >검색</button>
                </div>
                {children}
            </div>
    );  
}