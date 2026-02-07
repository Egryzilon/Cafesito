import axios from 'axios'
import { useEffect, useState } from 'react'

function Dashboard() {
    const url = "https://dummyjson.com/quotes"
    //hook
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    //INVOCAR AL SERVICIO (ENDPOINT)
    const getQuotes = async () => {
        try {
            const result = await axios.get(url)
            console.log(result.data.quotes)
            setQuotes(result.data.quotes)
            setLoading(false)
        }
        catch (error) {
            console.log("error al slicitar los datos", error)
            setLoading(true)
        }
    }
    useEffect(() => {
        getQuotes()

    }, [])
    return (
        <>
            <h1>Dashboard</h1>
            {loading ? <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWxtemxiNW12cWFydXB1aDV6Ynd3MXFqanN3cnlqNHhiZHllb2QzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qrHBsKJll7WtGp7Ixo/giphy.gif"></img> : (
                <>
                    <p> Mostrando datos</p>
                    {
                        quotes.map(
                            item => (
                                <p>
                                    {item.quote} - <i>{item.author}</i> </p>
                            )
                        )
                    }
                </>
            )
            }
        </>
    );
}
export default Dashboard;