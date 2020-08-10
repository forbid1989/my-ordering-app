import React from 'react';
import classes from './MainMenuPage.module.css';
import MainMenuItem from './MainMenuItem/MainMenuItem';

const mainMenuPage = (props) => {

    let renderItems = (items) => {

        return items.filter((item)=>{

            return item.type === props.selected;

        }).map((item)=>{


            return <MainMenuItem key={item.id} index={item.id} imgSrc={item.src} foodTitle={item.title} userReviews={item.userReviews} triggerItemDetailPage={props.triggerItemDetailPage}/>;

        })

    }

    return (

        <div className={`container ${classes.MainMenuPage}`}>

            {renderItems(props.data)}

        </div>

    );
    

};

export default mainMenuPage;