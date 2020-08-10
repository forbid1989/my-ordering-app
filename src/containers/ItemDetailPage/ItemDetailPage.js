import React from 'react';
import classes from './ItemDetailPage.module.css';
import ReviewBlock from '../ReviewBlock/ReviewBlock';
import generateStars from '../Utilities/generateStars';

const itemDetailPage = (props) => {

    return (

        <div className={`container ${classes.ItemDetailPage}`}>

            <img className="responsive-img" src={props.selectedMeal.src} alt={props.selectedMeal.title}/>
            <div className="section">
                <h5>{props.selectedMeal.title}</h5>
                <div>
                    <div className={`${classes.Block}`}>
                        {generateStars(props.selectedMeal.userReviews, classes)}
                    </div>
                </div>
                <blockquote>
                    {props.selectedMeal.description}
                </blockquote>
                <div className="center">
                    <button className={`btn waves-effect waves-light ${classes.OrderButton} blue darken-4`} onClick={()=>props.triggerGetItemPage()}>Order</button>
                </div>    
                <div className={`${classes.Block}`}>
                    <p>{Object.keys(props.selectedMeal.userReviews).length} { (Object.keys(props.selectedMeal.userReviews).length > 1) ? 'reviews' : 'review' }</p>
                </div>

                <ReviewBlock reviewers={props.selectedMeal.userReviews}/>
                
            </div>

        </div>

    );


}

export default itemDetailPage;