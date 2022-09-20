import React from 'react';
import './SearchPage.css';
import {useStateValue} from './StateProvider';

function SearchPage() {

    // destructure the search term
    const [{term}, dispatch] = useStateValue();
    //https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
    //https://programmablesearchengine.google.com/cse/setup/basic?cx=82d873a1c3b5f4eac
    

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