import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import classes from "./MainMenuFooter.module.css";
import MainMenuFooterItem from "./MainMenuFooterItem/MainMenuFooterItem";

const mainMenuFooter = (props) => {

    return(

        <footer className={`page-footer grey lighten-5 ${classes.Fixedfooter}`}>
          <div className="container">
            <div className="row">
            
                <MainMenuFooterItem 
                  icon="restaurant_menu" 
                  actionName="Menu" 
                  switchPage={props.switchPage} 
                  page="Menu" 
                  updateModalMessages={props.updateModalMessages}
                  modalMessageHeader=""
                  modalMessageDes="" 
                />
                <MainMenuFooterItem 
                  icon="fastfood" 
                  actionName="Order" 
                  switchPage={props.switchPage} 
                  page="OrderNow" 
                  updateModalMessages={props.updateModalMessages} 
                  modalMessageHeader="You haven't ordered yet!"
                  modalMessageDes="Please start ordering your food." 
                  checkIfReadyToOrder={props.checkIfReadyToOrder} 
                />
                <MainMenuFooterItem 
                  icon="face" 
                  actionName="Call Waiter" 
                  switchPage={props.switchPage} 
                  page="" 
                  updateModalMessages={props.updateModalMessages} 
                  modalMessageHeader="You have called a waiter!" 
                  modalMessageDes="You'll be attended shortly."
                />

            </div>
          </div>
        </footer>

    );

}

export default mainMenuFooter;