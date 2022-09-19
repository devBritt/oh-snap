import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
    const currentCagetory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks and other commercial projects'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCagetory.name)}</h1>
            <p>{currentCagetory.description}</p>
            <div>
                <img src={photo} alt='Fresh Produce' className='img-thumbnail mx-1' />
            </div>
        </section>
    );
}

export default Gallery;