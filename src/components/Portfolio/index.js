import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import photo from '../../assets/portfolio/coders_bay.PNG'

function Portfolio(props){
    const currentCategory = {
        name: 'portfolio',
        description: 'Projects that I have completed'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img 
                src={photo} 
                alt='Work example'
                className="img-thumbnail mx-1"
                ></img>
            </div>
        </section>
    );
}

export default Portfolio;