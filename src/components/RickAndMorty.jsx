import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import SearchType from './SearchType';
const RickAndMorty = () => {
    const [location, setLocation] = useState({});
    const [typeId, setTypeId] = useState("");
    const [numberPage, setnumberPage] = useState(1);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 126) + 1;
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomIndex}/`)
            .then(res => setLocation(res.data));
    }, []);

    const searchType = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
            .then((res) => setLocation(res.data));
    };

    console.log(location);

    // const getPages = () => {
    //     if ()
    // }

    return (
        <div className='location-container'>
            <div className='nav'>
            <input
                type="text"
                value={typeId}
                onChange={(e) => setTypeId(e.target.value)}
            />
            <button onClick={searchType}>Search</button>
            </div>
            <ul className='location'>
                <li>
                    <b>Name:</b>
                    <br />
                    {location?.name}
                </li>
                <li>
                    <b>Type: </b>
                    <br />
                    {location?.type}
                </li>
                <li>
                    <b>Dimension: </b>
                    <br />
                    {location?.dimension}
                </li>
                <li>
                    <b>Population: </b>
                    <br />
                    {location.residents?.length}
                </li>
            </ul>
            <ul className='resident-container'>
                {
                    location.residents?.map((resident) => (
                        <ResidentInfo url={resident} key={resident} />
                    ))
                }
            </ul>
            {/* {
                location.residents?.map((resident, index) => (
                    
                    // if(index === 3) {

                    //     <button onClick={() => setnumberPage}>{numberPage}</button>
                    // }
                ))
            } */}
            
        </div>
    );
};

export default RickAndMorty;