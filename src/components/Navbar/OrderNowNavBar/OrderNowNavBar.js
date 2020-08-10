import React from "react";
import classes from "./OrderNowNavBar.module.css";
import 'materialize-css/dist/css/materialize.min.css';

const orderNowNavBar = (props) => {

    return (

        <div className={`navbar-fixed ${classes.Navbar}`}>
            <nav>
                <div className={`nav-wrapper red darken-1 ${classes.Navbar}`}>
                    <div className="brand-logo center"><p className={`grey-text text-lighten-5 ${classes.Header}`}>Confirm Your Order</p></div>
                    <ul className="left">
                        <li><a href="#" onClick={()=>props.switchPage('Menu')}><i className="material-icons grey-text text-lighten-5">west</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );

}

export default orderNowNavBar;