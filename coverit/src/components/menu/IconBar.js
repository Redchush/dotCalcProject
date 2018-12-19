
import React from 'react';

const IconBar = (prop) => {
    return (
        <button type="button" className="navbar-toggle" data-toggle="collapse"
                data-target="#responsive-menu">
            <span className="sr-only">Открыть навигацию</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
        </button>
    );
};
export default IconBar;


