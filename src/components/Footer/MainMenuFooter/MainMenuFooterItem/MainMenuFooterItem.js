import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import classes from "./MainMenuFooterItem.module.css";

const mainMenuFooterItem = (props) => {

    return (
        
        <div className={`col s4 center-align ${classes.FooterButtonHighlight} ${(props.icon === "restaurant_menu" || (props.checkIfReadyToOrder && props.checkIfReadyToOrder() > 0)) ? "":"modal-trigger"}`} 
            data-target="modal1" 
            onClick={(props.checkIfReadyToOrder && props.checkIfReadyToOrder() > 0) ? ()=>props.switchPage(props.page) : ()=>props.updateModalMessages(props.modalMessageHeader, props.modalMessageDes)}
        >
            <i className="material-icons  grey-text darken-4">{props.icon}</i>
            <p className="grey-text darken-4">{props.actionName}</p>
        </div>
        
    );

}

export default mainMenuFooterItem;