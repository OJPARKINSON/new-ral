import Item1 from '../../Images/Item1.jpg'
import Item2 from '../../Images/Item2.jpg'
import Item3 from '../../Images/Item3.jpg'
import Item4 from '../../Images/Item4.jpg'
import Item5 from '../../Images/Item5.jpg'
import Item6 from '../../Images/Item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from '../actions/action-types/cart-actions'
var Nfname, Nlname, Nemail, Nnotes, NaddressL1, NaddressL2,NpostCode;

const initState = { //sets all the inital states so the shop and basket can call them
    items: [
        {id:1,title:'Egg, Tomato and Letuce', desc: "Hole grain bread containing a fried egg, sliced tomatto and letuce", price:3,img:Item1},
        {id:2,title:'Ham, Egg and Letuce', desc: "Toasted bread holiding a fried egg, ham and letuce", price:3,img: Item2},
        {id:3,title:'Bacon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:3,img: Item3},
        {id:4,title:'BLT', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:3,img:Item4},
        {id:5,title:'Tuna', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:3,img: Item5},
        {id:6,title:'Salmon', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:4,img: Item6}
    ],
    addedItems:[],
    total: 0,
    fname: " ",
    lname: " ",
    notes: " ",
    email: " ",
    addressL1: "",
    addressL2: "",
    NpostCode: "",
    emailCheck: "",
    shipping: "no"
}
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id); //gets the item and adds it to the cart
        //check if the action id exists in the addedItems
         let existed_item = state.addedItems.find(item => action.id === item.id) //checks if the items is already in the basket
         if(existed_item) {
            addedItem.quantity += 1  //ups the quantity if the item is already in the basket
            return{
                ...state,
                total: state.total + addedItem.price  //addes the itesm price
            }
        } else{
            addedItem.quantity = 1;  //sets the new items quantity
            //calculating the total
            let newTotal = state.total + addedItem.price; //works out the new total
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem], //sets the new items 
                total : newTotal // sets the new total
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item => action.id === item.id); //gets the item that is to be removed
        let new_items = state.addedItems.filter(item => action.id !== item.id); //gets all the other items
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity ); //calculates the new total
        return{
            ...state,
            addedItems: new_items, //sets the new cart items
            total: newTotal //sets the new total
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id) //gets the items that has been selected
          addedItem.quantity += 1 //increases the quantity
          let newTotal = state.total + addedItem.price 
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id) 
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items, //sets the new items
                total: newTotal
            }
        }
        else { // if there is more then one then new total need to be worked out
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }
    if(action.type === ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6, //works out the new shipping
        }
    }
    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6, //works out the new shipping
        }
    }
    if (action.type === 'SORT_SHIPPING') {
        var shipping = "no"; 
        
        if (action.shipping === "yes") { //if the user has selected shipping it is stored as yes
            shipping = "yes";
        }
        return{
            ...state,
            shipping: shipping //sets the shipping state
        }
    }
    if (action.type === 'TEXT_CHANGE') { //works out which input is being changes and sets the state
        if (action.fname !== undefined) {
            Nfname = action.fname;
        } else if (action.lname !== undefined) {
            Nlname = action.lname;
        } else if (action.email !== undefined) {
            Nemail = action.email;
        } else if (action.notes !== undefined) {
            Nnotes = action.notes;
        } else if (action.AddressL1 !== undefined) {
            NaddressL1 = action.AddressL1;
        } else if (action.AddressL2 !== undefined) {
            NaddressL2 = action.AddressL2;
        } else if (action.PostCode !== undefined) {
            NpostCode = action.PostCode;
        }
        return{ 
            ...state,
            fname: Nfname,
            lname: Nlname,
            notes: Nnotes,
            email: Nemail,
            addressL1: NaddressL1,
            addressL2: NaddressL2,
            postCode: NpostCode
        }
    }
    if (action.type === 'CHECKOUT') { //sets the left over states to empty when user checksout
        var newItems = [];
        var newTotal = 0;
        console.log(state);
        return{
            ...state,
            addedItems: newItems,
            total: newTotal,
        }
    }
    return state;
}
export default cartReducer