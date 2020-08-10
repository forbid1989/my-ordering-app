import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import classes from "./MainMenuNavbar.module.css";

const mainMenuNavbar = (props) => {

        return (

            <div className="navbar-fixed">
                <nav className="nav-extended grey lighten-5">
                    <div className="nav-wrapper valign-wrapper">
                    <span className="brand-logo center"><p className={classes.RestaurantNameAndTableNum}>{props.restaurantName}</p></span>
                    </div>
                    <div className={"nav-content grey lighten-3"}>
                        <ul className="tabs tabs-transparent">
                            <li className="tab" onClick={()=>props.clicked("Meal")}><a className= "active grey-text text-darken-1" href="#test1">Meals</a></li>
                            <li className="tab" onClick={()=>props.clicked("Beverage")}><a className= "active grey-text text-darken-1" href="#test2">Beverage</a></li>
                            <li className="tab" onClick={()=>props.clicked("Special")}><a className= "active grey-text text-darken-1" href="#test4">Specials</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        );

}

export default mainMenuNavbar;