import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const ResidentInfo = ({ url }) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        axios
            .get(url)
            .then(res => setResident(res.data));
    }, []);

    console.log(resident);

    const getStatus = () => {
        if (resident.status === "Dead") {
            return <i className="fa-solid fa-circle red"></i>
        } else if ( resident.status === "Alive") {
            return <i className="fa-solid fa-circle green"></i>
        } else {
            return <i className="fa-solid fa-circle gray"></i>
        }
    }

    return (
        <li className='resident-item'>
            <img src={resident.image} alt="" />
            <div className='status'>        
                <p>{getStatus()} <b>{resident?.status}</b></p>
            </div>
            <p className='name'><b>{resident?.name}</b></p>
            <div className='information'>
                <span>Origin: <b>{resident?.origin?.name}</b></span>
                <span>Species: <b>{resident?.species}</b></span>
                <span>Episodes where appear: <b>{resident.episode?.length}</b></span>          
            </div>
        </li>
    );
};

export default ResidentInfo;