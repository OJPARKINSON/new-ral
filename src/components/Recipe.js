//importing components, react is the whole framework and connec is used to connect the pages with states.
import React, { Component } from 'react';
import { connect } from 'react-redux';

const initialState = {emailError: ""}; //Allows the varible to be accessed

class Recipe extends Component{
    state = initialState; //allows the setup to be accessed
    componentWillUnmount() {
        if(this.refs.shipping.checked) {
            this.props.substractShipping(); //shipping is set to default if page is left
        }
    }

    //1a. If the shipping radio button has been checked it will run the add shipping function
    //1b the shippingState varible will be set to yes so the state of the input can be stored
    //1c. If the input isn't checked then run the subtract shipping function
    //1d. runs the shipping fucnction storing that the input is set to yes

    handleChecked = (e)=>{
        if(e.target.checked){ 
            this.props.addShipping(); //1a
            var shippingState = "yes"; //1b
        }
        else{
            this.props.substractShipping(); //1c
        }
        this.props.shipping(shippingState); //1d
    }

    //2a sets up the varible to be edited
    //2b checks if the input is an email
    //2c setiing the email error tells the user that they haven't entered an email
    //2d resets the varible
    //2e sets the email error so that the user doesn't see the error
    //2f resets the form so that another order can be made
    //2g unchecks the shipping checkbox
    //2h then it runs the checkout function that clears the cart items and total state
    //2i Render returns the checkout form

    validate = () => {
        let emailError = ""; //2a
        if (!this.props.emailCheck.includes("@")) {  //2b
            emailError = "invalid email"; //2c
            this.setState({ emailError }); //2c
            return false;
        } else {
            emailError = ""; //2d
            this.setState({ emailError }); //2e
            this.refs.form.reset(); //2f
            if(this.refs.shipping.checked) { //2g
                this.refs.shipping.checked = false; //2h
            } 
            this.props.checkout(); //h
            return false;
        }
      }
      handleSubmit = event => {
        event.preventDefault(); //stops the browser performing default events
        this.validate(); //when the submit button is pressed the validation function is run
      };
    render(){
        return(
            <div className="container">
                <div className="collection">
                    <li className="checkoutBox">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+£6)</span>
                        </label>
                    </li>
                    <li className="checkoutPrice"><b>Total: £{this.props.total}</b></li>
                    <form ref="form" onSubmit={this.handleSubmit}>
                        <input type="text" name="firstName" placeholder="First Name" onChange={this.props.textChanged} required></input>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={this.props.textChanged} required></input>
                        <input type="text" name="email" placeholder="Email" onChange={this.props.textChanged} required></input>
                        <div className="error">{this.state.emailError}</div>
                        <input type="text" name="notes" placeholder="Notes" onChange={this.props.textChanged}></input>
                        <input type="text" name="AddressL1" placeholder="Address Line 1" onChange={this.props.textChanged} required></input>
                        <input type="text" name="AddressL2" placeholder="Address Line 2" onChange={this.props.textChanged} required></input>
                        <input type="text" name="PostCode" placeholder="Post Code" onChange={this.props.textChanged} required></input>
                        <button type="submit" className="waves-effect waves-light btn">Checkout</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        total: state.total, //allows the total to be displayed to the user
        emailCheck: state.email, //allows th email to be validated in the validation funcition (2b line:36)
    }
}

//This allows states to be edited and information to be stored
//3a this adds the shipping to the total state
//3b this subtracts the shipping form the total state
//3c for ever input when the value changes it is passed to be saved in a state
//3d this saves if the user is  having shipping or not
//3e this sets the left over states to zero so that the user can make another orders

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})}, //3a
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}, //3b
        textChanged: (evt) => {
            if (evt.target.name === "firstName") { //3c
                dispatch({type: 'TEXT_CHANGE', fname: evt.target.value});
            } else if (evt.target.name === "lastName") {
                dispatch({type: 'TEXT_CHANGE', lname: evt.target.value});
            } else if (evt.target.name === "email") {
                dispatch({type: 'TEXT_CHANGE', email: evt.target.value});
            } else if (evt.target.name === "notes") {
                dispatch({type: 'TEXT_CHANGE', notes: evt.target.value})
            } else if (evt.target.name === "AddressL1") {
                dispatch({type: 'TEXT_CHANGE', AddressL1: evt.target.value})
            } else if (evt.target.name === "AddressL2") {
                dispatch({type: 'TEXT_CHANGE', AddressL2: evt.target.value})
            } else if (evt.target.name === "PostCode") {
                dispatch({type: 'TEXT_CHANGE', PostCode: evt.target.value})
            }
        },
        shipping: (ship) => {
            dispatch({type: 'SORT_SHIPPING', shipping: ship}) //3d
        },
        checkout: () => {
            dispatch({type: 'CHECKOUT'}) //3e
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)