import React, { useEffect, useState } from 'react';
import './homepage.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { Directory } from '../directory/directory.component';
import SECTIONS_DATA from '../../sections.data';


export const Homepage = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        setMenuItems(SECTIONS_DATA);
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