import React from 'react';
import './menu-item.styles.scss';


export const MenuItem = (props) => {
    return (
        <div
            onClick = {props.url}
            className = {`${props.size} menu-item`}>
            <div className = 'bg-image' style = {{backgroundImage:`url(${props.image})`}}></div>
            <div className = 'content'>
                <h1 className = 'title'>{props.title}</h1>
                <span className = 'subtitle'>{props.subtitle}</span>
            </div>
        </div>
    )
}