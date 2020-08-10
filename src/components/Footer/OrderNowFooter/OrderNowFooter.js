import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import classes from "./OrderNowFooter.module.css";

const orderNowFooter = (props) => {

    return(

        <footer className={`page-footer white`}>
            <div className="center">
                <button 
                    className={`btn waves-effect waves-light pulse ${classes.OrderButton} blue darken-4 modal-trigger`}
                    data-target="modal1"
                    onClick={()=>props.updateModalMessages("Awesome!","Your orders will arrive shortly...")} 
                 >Place Order</button>
            </div>   
          
        </footer>

    );

}

export default orderNowFooter;