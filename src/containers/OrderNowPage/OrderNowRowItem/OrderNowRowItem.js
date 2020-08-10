import React from 'react';
import classes from './OrderNowRowItem.module.css';

const orderNowRowItem = (props) => {

    return(

        <div className="col s12 m10 offset-m2 l8 offset-l3">
    
            <div className="row valign-wrapper">
                <div className="col s6 m6 l6">
                    <img src={props.data.src} alt="" className="responsive-img"/>
                </div>
                <div className="col s6 m6 l6">
                    <div>
                        <h1 className={`${classes.RemoveMargins} ${classes.OptimalFontSize} grey-text text-darken-1`}>{props.data.title}</h1>
                    </div>
                    <div className={`valign-wrapper`}>
                        <button className={`red btn-floating pulse`} onClick={()=>props.removeItemQuantity(props.data.id, props.data.quantity)}><i className="material-icons">remove</i></button>
                            <h2 className={`${classes.Paddings} ${classes.RemoveMargins} grey-text text-darken-1`}>{props.data.quantity}</h2>
                        <button className={`btn-floating pulse`} onClick={()=>props.addItemQuantity(props.data.id, props.data.quantity)}><i className="material-icons">add</i></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>Add note to order -</div>
                <textarea onChange={(event) => props.updateItemNote(event, props.data.id)} className={classes.CustomTextArea} placeholder="Type here" defaultValue={props.data.note}></textarea>
            </div>

        </div>

    );

}

export default orderNowRowItem;