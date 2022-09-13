import React, { useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({});
    axios
        .get(`https://rickandmortyapi.com/api/location/$/`)
        .then(res => setData(res.data));
    return {data, setData, url};
};

export default useFetch;