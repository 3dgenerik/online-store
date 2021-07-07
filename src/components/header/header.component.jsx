import React from 'react';
import './header.style.scss';

//OVAKO MORA AKO HOCEMO DA IMPORTUJEMO SVG
import {ReactComponent as Logo} from '../../assets/crown.svg';

import { withRouter } from 'react-router-dom';
import Cart from '../../assets/shopping-cart.png'

const Header = (props) => {
    const homeRoute = () => {
        return props.history.push(`${props.match.url}`)
    }

    const shopRoute = () => {
        return props.history.push(`${props.match.url}shop`)
    }

    return(
        <div className = 'header-container pa4'>
            <Logo
                style = {{cursor:'pointer'}}
                onClick = {homeRoute}
            />
            <div className = 'navigation'>
                <div
                    onClick = {shopRoute}
                >SHOP</div>
                <div>CONTACT</div>
                <div>SIGN IN</div>
                <img alt = 'LogoImage' src = {Cart} width = '32' height = '32'/>

            </div>
        </div>
    )
}

export default withRouter(Header);