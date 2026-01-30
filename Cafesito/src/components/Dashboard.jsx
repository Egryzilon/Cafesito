import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard(){
    const url="https://dummyjson.com/quotes"
    // hooks 
    const [quotes, setQuotes]=useState([])
    const [loading, setLoading]=useState(true)
    //invoke service trough EndPoint
    const getQuotes = async()=>{
        try {
            const result = await axios.get(url)
            console.log(result.data.quotes)
        } catch(error) {
            console.log("Err to fetch data.\nErr result is:\n" + error)
        }
    }

    useEffect(()=>{
        getQuotes()},[]
    )

    return(
        <>
            <h1>Lista de Frases</h1>
        </>
    )
}

export default Dashboard