import React from 'react';
import classes from './MainMenuItem.module.css';
import generateStars from '../../Utilities/generateStars';

const mainMenuItem = (props) => {

    return (

        <div className="row">
            <img onClick={()=>props.triggerItemDetailPage(props.index)} className={`responsive-img ${classes.Cursor}`} src={props.imgSrc} alt={props.foodTitle}/>
            <div className="section">
                <h5>{props.foodTitle}</h5>
                <div>

                    <div className={`${classes.Block}`}>
                        {generateStars(props.userReviews, classes)}
                    </div>
                    <div className={`${classes.Block}`}>
                        <p> - {Object.keys(props.userReviews).length} reviews</p>
                    </div>
                    

                </div>
                
            </div>
        </div>

    );
    

};

export default mainMenuItem;