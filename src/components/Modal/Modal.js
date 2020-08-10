import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

const modal = (props) => {

    return (

        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>{props.header}</h4>
            <p>{props.des}</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>

    );

}

export default modal;