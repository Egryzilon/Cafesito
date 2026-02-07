import { useEffect, useState } from "react";

function Quotes(){
    url="https://dummyjson.com/quotes"
    // captain
    // Hooks
    const [Quotes,setQuotes]=useState ([]) 
    const [loading, setLoading]=useActionState(true)

    const getData=()=>{
        return fetch(url)
        .then((res)=>res.json())
        .then(console.log);

    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        <h2>
            Frases chidas
        </h2>
        </>
    )
}
export default Quotes