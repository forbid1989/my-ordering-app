import React from 'react';

let generateStars = (users, classes) => {

    let sum = Object.keys(users).reduce((total,user) => {

        return total + Math.round(users[user].rating);
    
    }, 0);
    
    let average = Math.round(sum / Object.keys(users).length);

    let starContainer = [];

    for (let i = 1; i<=5; i++){

        if (i<=average) {

            starContainer.push(

                <span key={`star${i}`} className={`fa fa-star ${classes.Checked}`}></span>

            )

        } else {

            starContainer.push(

                <span key={`star${i}`} className={`fa fa-star`}></span>

            )

        }
        
    }

    return starContainer;

};

export default generateStars;