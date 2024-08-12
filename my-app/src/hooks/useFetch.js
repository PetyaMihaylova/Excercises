import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
     useEffect(()=>{
        const getData = async () => {
            setError(false)
            setLoading (true)
            try{
                const result = await fetch(url)
            console.log(result);
            
            const data = await result.json()
            setData (data.results)
    
            }
            
            catch(error){
                setError(true)
            }
            
            finally{
                setLoading (false)
            }
           
        }
        getData()
     }, [])

     return {
        data, 
        loading,
        error
     }
}

export default useFetch