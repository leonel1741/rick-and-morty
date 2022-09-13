import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [location, setLocation] = useState({});
    const [typeId, setTypeId] = useState("");

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

        </div>
    );
};

export default Location;