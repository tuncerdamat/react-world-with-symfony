import React from 'react';
import { render } from 'react-dom';  // that means we only need render function from react-dom, not the whole module
import RepLogApp from "./RepLog/RepLogApp";

const shouldShowHeart = true;

render(
    <diV>
        <RepLogApp withHeart={shouldShowHeart}/>
        <RepLogApp withHeart={false}/>
    </diV>,
    document.getElementById('lift-stuff-app')
);