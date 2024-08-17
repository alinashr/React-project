const initialData={
    cart_items:[]
}

export const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADDTOCART":
            return {cart_items:[...state.cart_items, action.payload]}
            
        case "REMOVEITEM":
            return{
                cart_items:state.cart_items.filter(item=>item.title!=action.payload.title)
            }
            
        default:
            return state
    }
}


