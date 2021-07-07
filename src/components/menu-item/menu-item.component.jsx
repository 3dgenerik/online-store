import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = (props) => {
    console.log(props);
    const onRouteChange = () => {
        return props.history.push(`${props.match.url}${props.link}`);
    }

    return (
        <div
            onClick = {onRouteChange}
            className = {`${props.size} menu-item`}>
            <div className = 'bg-image' style = {{backgroundImage:`url(${props.image})`}}></div>
            <div className = 'content'>
                <h1 className = 'title'>{props.title}</h1>
                <span className = 'subtitle'>{props.subtitle}</span>
            </div>
        </div>
    )
}
//with whithRouter() 'history', 'match', 'location' is available in props
export default withRouter(MenuItem);