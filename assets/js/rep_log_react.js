import React from 'react';
import { render } from 'react-dom';  // that means we only need render function from react-dom, not the whole module
import RepLogApp from "./RepLog/RepLogApp";

const shouldShowHeart = false;

render(
    <div>
        <RepLogApp 
            withHeart={shouldShowHeart}
            {...window.REP_LOG_APP_PROPS}
        />
    </div>,
    document.getElementById('lift-stuff-app')
);