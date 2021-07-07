import React, { useEffect, useState } from 'react';
import './homepage.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { Directory } from '../directory/directory.component';
import {sections} from '../../directory.data';


export const Homepage = ({history}) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(sections);
    }, [])

    const populateItems = menuItems.map(({id, imageUrl, linkUrl, title, size}) => {
        return <MenuItem
            key = {id}
            image = {imageUrl}
            link = {linkUrl}
            title = {title.toUpperCase()}
            subtitle = {'Shop now'.toUpperCase()}
            size = {size}
            />

    })

    return(
        <div className = 'homepage'>
 
            <Directory>
                {populateItems}
            </Directory>
        </div>
    )
}