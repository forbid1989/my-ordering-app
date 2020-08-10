import React from 'react';
import classes from './IndividualReview.module.css';
import generateStars from '../../Utilities/generateStars';

const individualReview = (props) => {

    //{generateStars(props.userReviews, classes)}
    //{'John Doe': {review: shortLoremIpsum, rating: 4, photo: johnDoe}
    let userReview = {};
    const reviewerName = props.reviewerName;
    
    userReview[reviewerName] = {rating:props.rating};

    return(

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <img src={props.photo} alt="" className="circle responsive-img"/>
                    </div>
                     <div className="col s10">
                        <div>
                            <h5>{reviewerName}</h5>
                        </div>
                        <div>
                            {generateStars(userReview, classes)} <span>{props.rating}/5</span>
                        </div>
                        <div>
                            <span className="black-text">
                                {props.review}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default individualReview;