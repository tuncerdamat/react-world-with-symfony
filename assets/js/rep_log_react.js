import React from 'react';
import { render } from 'react-dom';  // that means we only need render function from react-dom, not the whole module
import RepLogApp from "./RepLog/RepLogApp";

const shouldShowHeart = true;
const itemOptions = [
    { id: 'cat', text: 'Cat', },
    { id: 'fat_cat', text: 'Big Fat Cat', },
    { id: 'laptop', text: 'Laptop', },
    { id: 'coffee_cup', text: 'Coffee cup', },
]

render(
    <div>
        <RepLogApp 
            withHeart={shouldShowHeart}
            itemOptions={itemOptions}
        />
    </div>,
    document.getElementById('lift-stuff-app')
);