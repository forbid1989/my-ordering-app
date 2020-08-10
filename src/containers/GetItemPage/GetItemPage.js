import React, {Component} from 'react';
import classes from './GetItemPage.module.css';
import { render } from '@testing-library/react';

class getItemPage extends Component {

    constructor(props) {

        super(props);
        this.state = {

            quantity: (props.selectedMeal.quantity > 0) ? props.selectedMeal.quantity : 1,
            note: props.selectedMeal.note

        }
    
    }

    addQuantity = (qty) => {
        
        this.setState({quantity: (qty < 10) ? qty + 1 : 10});
    
    }

    removeQuantity = (qty) => {

        this.setState({quantity: (qty > 1) ? qty - 1 : 1});

    }

    updateNote = (event) => {

        this.setState({note: event.target.value});

    }
    
    render() {

        return (

            <div className={`container ${classes.GetItemPage}`}>
    
                <div className="col s12 m10 offset-m2 l8 offset-l3">
    
                    <div className="row valign-wrapper">
                        <div className="col s6 m6 l6">
                            <img src={this.props.selectedMeal.src} alt="" className="responsive-img"/>
                        </div>
                        <div className="col s6 m6 l6">
                            <div>
                                <h1 className={`${classes.RemoveMargins} ${classes.OptimalFontSize} grey-text text-darken-1`}>{this.props.selectedMeal.title}</h1>
                            </div>
                            <div className={`valign-wrapper`}>
                                <button className={`red btn-floating pulse`} onClick={()=>this.removeQuantity(this.state.quantity)}><i className="material-icons">remove</i></button>
                                    <h2 className={`${classes.Paddings} ${classes.RemoveMargins} grey-text text-darken-1`}>{this.state.quantity}</h2>
                                <button className={`btn-floating pulse`} onClick={()=>this.addQuantity(this.state.quantity)}><i className="material-icons">add</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>Add note to order -</div>
                        <textarea onChange={this.updateNote} className={classes.CustomTextArea} placeholder="Type here" defaultValue={this.state.note}></textarea>
                    </div>
                    <div className="row">
                        <div className="center">
                            <button 
                                className={`btn waves-effect waves-light ${classes.OrderButton} blue darken-4`} 
                                onClick={()=>this.props.updateItemQuantityAndNote(this.props.selectedMeal.id, this.state.quantity, this.state.note)}
                            >Add to Order</button>
                        </div>   
                    </div>
    
                </div>
    
            </div>
    
        );

    }
    
}

export default getItemPage;