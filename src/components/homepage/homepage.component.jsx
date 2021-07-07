import React, { useEffect, useState } from 'react';
import './homepage.styles.scss'
import { MenuItem } from '../menu-item/menu-item.component';
import { Directory } from '../directory/directory.component';
import {sections} from '../../directory.data';

export const Homepage = (props) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(sections);
    }, [])

    const populateItems = menuItems.map(user => {
        return <MenuItem
            key = {user.id}
            image = {user.imageUrl}
            link = {user.linkUrl}
            title = {user.title.toUpperCase()}
            subtitle = {'Shop now'.toUpperCase()}
            size = {user.size}
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