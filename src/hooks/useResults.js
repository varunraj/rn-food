import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default ()=> {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')


    const searchApi = async (searchTerm)=>{
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'new york'    
                }
            });
            console.log(response.data.businesses[0])
            setResults(response.data.businesses)
        }catch(err) {
            setErrorMessage('Something went wrong')
        }
    }


    // below code is to render data before user enter a search term
    useEffect(()=>{
        searchApi('pasta')
    },[]) // render only once

    return [searchApi, results, errorMessage]

}