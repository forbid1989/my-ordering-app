import React from "react";
import classes from "./ItemDetailNavbar.module.css";
import 'materialize-css/dist/css/materialize.min.css';

const itemDetailNavbar = (props) => {

    return (

        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey lighten-5">
                    <div className="brand-logo center grey-text darken-4"><p className={classes.RemoveMargin}>{props.activeMenu}</p></div>
                    <ul className="left">
                        <li><a href="#" onClick={()=>props.switchPage('Menu', props.activeMenu)}><i className="material-icons grey-text darken-4">west</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );

}

export default itemDetailNavbar;