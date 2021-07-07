import React from 'react';
import './shop-item.styles.scss'

const ShopItem = ({item, title}) => {
    return(
        <div
            style = {{borderRadius:'8px'}}
            className = 'shop-menu-item shadow-5 bg-white'>
            <div className = 'shop-content'>
                <p>ADD TO CART</p>
            </div>
            <div
                className = 'shop-bg-image shadow-2'
                style = {{backgroundImage:`url(${process.env.PUBLIC_URL}/${item.imageUrl})`,}}
            >
            </div>
            <div className = 'name-price'>
                <div className = 'item-name'>{item.name} <span className = 'f6 orange'>({title})</span></div>
                <div className = 'item-price'>{item.price}&euro;</div>
            </div>
        </div>
    )
}

export default ShopItem;