import axios from 'axios';
import React, { useState } from 'react';



const SearchType = () => {
    const [typeId, setTypeId] = useState({});

    const searchType = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
            .then((res) => setLocation(res.data));
    };

    return (
        <div className='nav'>
            <input 
                type="text"
                value={typeId}
                onChange={(e) => setTypeId(e.target.value)}
            />
            <button onClick={searchType}> search</button>
        </div>
    );
};

export default SearchType;