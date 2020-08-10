import React from "react";
import classes from "./GetItemNavbar.module.css";
import 'materialize-css/dist/css/materialize.min.css';

const itemDetailNavbar = (props) => {

    //onClick={()=>props.switchPage('Menu', props.activeMenu)}
    return (

        <div className={`navbar-fixed ${classes.Navbar}`}>
            <nav>
                <div className={`nav-wrapper blue darken-4 ${classes.Navbar}`}>
                    <div className="brand-logo center"><p className="grey-text text-lighten-5">{props.selectedMeal.title}</p></div>
                    <ul className="left">
                        <li><a href="#" onClick={()=>props.switchPage('ItemDetail')}><i className="material-icons grey-text text-lighten-5">west</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );

}

export default itemDetailNavbar;