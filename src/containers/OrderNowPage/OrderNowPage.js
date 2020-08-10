import React from 'react';
import classes from './OrderNowPage.module.css';
import OrderNowRowItem from './OrderNowRowItem/OrderNowRowItem';

const orderNowPage = (props) => {

    console.log(props.data);

    const orderedItems = () => {

        return props.data.filter((entry)=>{

            return entry.quantity > 0;

        }).map((entry)=>{

            return <OrderNowRowItem 
                key={`${entry.title}${entry.id}`}
                data={entry}
                addItemQuantity = {props.addItemQuantity}
                removeItemQuantity = {props.removeItemQuantity}
                updateItemNote = {props.updateItemNote}
                zeroOutItemQuantity = {props.zeroOutItemQuantity}
            />

        });

    }

    return(

        <div className={`container ${classes.OrderNowPage}`}>
            {orderedItems()}
        </div>

    );

}

export default orderNowPage;