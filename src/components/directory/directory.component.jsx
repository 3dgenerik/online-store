import React from 'react';
import './directory.style.scss'

export const Directory = ({children}) => {
    return (
        <div className = 'directory-menu'>
            {children}
        </div>
    )
}