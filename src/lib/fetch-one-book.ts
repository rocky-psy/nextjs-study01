import { BookData } from "@/types";

export default async function fetchOneBook(id: number) : Promise<BookData 
| null> {    
    
    const url = `http://localhost:12345/book/${id}`;      
    
    // try {
    //     await fetch(url).then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }else{

    //             console.log('response', response);
    //             return await response.json();
    //         }    
    //     });   
    // }catch (error) {
    //     console.error('Fetch one book failed:', error);
    //     return null;    
    // }


    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }else{
            return await response.json();
        }
    } catch (error) {
        console.error('Fetch one book failed:', error);
        return null;    
    }


}