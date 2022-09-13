import React from 'react';
import rickAndMorty from '../../public/rick-and-morty.jpg';

const Image = () => {
    return (
        <div className='image'>
            <img src={require(rickAndMorty)} alt="" />            
        </div>
    );
};

export default Image;