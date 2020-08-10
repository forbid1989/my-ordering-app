import React from 'react';
import IndivualReview from './IndividualReview/IndividualReview'

const reviewBlock = (props) => {

    const reviews = Object.keys(props.reviewers).map((reviewer)=>{

        return <IndivualReview 
            key={`${reviewer}${Math.floor(Math.random() * 10)}`} 
            photo={props.reviewers[reviewer].photo} 
            reviewerName={reviewer}
            rating={props.reviewers[reviewer].rating}
            review={props.reviewers[reviewer].review}
        />;

    });

    return(

        <div>
            {reviews}
        </div>

    );

}

export default reviewBlock;