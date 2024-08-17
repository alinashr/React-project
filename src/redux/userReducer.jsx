const initialData={
    users:[]
}

export const userReducer = (state=initialData,action)=>{
    switch(action.type){
        case "REGISTER":
            return{
                users:[...state.users,action.payload]
            }

        default:
            return state
    }
}






