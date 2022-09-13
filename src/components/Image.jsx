import React from 'react';
import rickAndMorty from '../assets/rick-and-morty.jpg';

const Image = () => {
    return (
        <div className='image'>
            <img src={rickAndMorty} alt="" />            
        </div>
    );
};

export default Image;