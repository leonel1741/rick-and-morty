import React from 'react';
import rickAndMorty from '../assets/rick-And-Morty.jpg';

const Image = () => {
    return (
        <div className='image'>
            <img src={rickAndMorty} alt="" />            
        </div>
    );
};

export default Image;