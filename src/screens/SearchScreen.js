import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults' // contains useState and useEffect logic
import ResultsList from '../components/ResultsList';
import ResultList from '../components/ResultsList';


const SearchScreen = () =>{
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()


    const filterResultsByPrice = (price)=>{
            // price == $, $$, $$$
            return results.filter(result=>{
                return result.price === price
            });
        };


    return( // below style says to use only visibile space on screen
        <View style={{flex :1}}> 
            
            <SearchBar 
                term={term} 
                onTermChange={newTerm=>setTerm(newTerm)}
                onTermSubmit={()=> searchApi(term)}
            />
            {errorMessage ?  <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results = {filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList results = {filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultList results = {filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;