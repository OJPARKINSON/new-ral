import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './components/actions/cartActions'
 class Shop extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); //passes the id to the addtocart function
    }
    render(){
        let itemList = this.props.items.map(item => {
            return(
                <div className="card" key={item.id}>
                    <img className="cardImage" src={item.img} alt={item.title}/>
                    <span className="cardTitle">{item.title}</span>
                    <span to="/" className="addBtn" onClick={()=>{this.handleClick(item.id)}}><i>+</i></span>
                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: £{item.price}</b></p>
                    </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="homeTitle">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)