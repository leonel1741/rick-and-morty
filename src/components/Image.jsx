import React from 'react';
import rickAndMorty from '../../public/rick-And-Morty.jpg';

const Image = () => {
    return (
        <div className='image'>
            <img src={require(rickAndMorty)} alt="" />            
        </div>
    );
};

export default Image;