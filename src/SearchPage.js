import React from 'react';
import './SearchPage.css';
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {

    
    // destructure the search term
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
    //https://programmablesearchengine.google.com/cse/setup/basic?cx=82d873a1c3b5f4eac

    console.log(data)
  return (
    <div className='searchPage'>
        <div className="searchPage__header">
            <h1>{term}</h1>
        </div>
        <div className="searchPage__results">

        </div>
    </div>
  )
}
export default SearchPage

// HIT ENTER -> Term from Search will go to data layer. then useState will be used and term will be fetch from there. 
// then using custom hook term will be return as an object named data