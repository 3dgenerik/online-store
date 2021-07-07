import React, { useEffect, useState } from 'react';
import SHOP_DATA from '../../shop.data.js';
import { withRouter } from 'react-router-dom';
import ShopItem from '../shop-item/shop-item.component';
import './shop.styles.scss'

const Shop = () => {
    
    const _MAX_ELEM = 10;
    const _TITLE = '';

    const [collections, setCollections] = useState([]);

    useEffect(() => {
        setCollections(SHOP_DATA);
    }, [])


    const shopDataFiltered = collections.filter(elem => {
        if(_TITLE.toUpperCase() === 'all'.toUpperCase()
            || _TITLE.trim().length === 0){
            return elem.title !== null;
        }
        return elem.title === _TITLE;
    })
    
    const shopData = shopDataFiltered.map(data => {
        return (
            <div   
                key = {data.id}>
                <div
                    style = {{paddingLeft:'0px'}}  
                    className = 'pt4 f2 fw7 tc'>{data.title.toUpperCase()}
                </div>
                <div className = 'tc'>({data.items.length} products)</div>
                <hr className = 'w-100'></hr>
                <div className = 'shop-directory-menu pa3'>
                    {data.items.filter((elem, idx) => idx < _MAX_ELEM).map(item => {
                        return (
                            <ShopItem key = {item.id} item = {item} title = {data.title}/>
                        )
                    })}
                </div>
            </div>
        )
    })


    return(
        <div>
            <div style = {{color:'#E63462', fontSize:'4rem'}} className = 'tc pt3'>COLLECTIONS</div>
            {shopData}
        </div>
    )
}

export default withRouter(Shop);

// id: 5
// items: Array(6)
// 0: {id: 30, name: "Camo Down Vest", imageUrl: "/images/shop-img/mens/camo-vest.png", price: 325}
// 1: {id: 31, name: "Floral T-shirt", imageUrl: "/images/shop-img/mens/floral-shirt.png", price: 20}
// 2: {id: 32, name: "Black & White Longsleeve", imageUrl: "/images/shop-img/mens/long-sleeve.png", price: 25}
// 3: {id: 33, name: "Pink T-shirt", imageUrl: "/images/shop-img/mens/pink-shirt.png", price: 25}
// 4: {id: 34, name: "Jean Long Sleeve", imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png", price: 40}
// 5: {id: 35, name: "Burgundy T-shirt", imageUrl: "/images/shop-img/mens/polka-dot-shirt.png", price: 25}
// length: 6
// __proto__: Array(0)
// routeName: "mens"
// title: "Mens"