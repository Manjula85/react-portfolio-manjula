import React from 'react';
import ProjectList from '../ProjectList';
import {capitalizeFirstLetter} from '../../utils/helpers';


function Portfolio({currentCategory}){
    const {name, description} = currentCategory;
    console.log('Name:' + name);
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <ProjectList />
        </section>
    );
}

export default Portfolio;