
const initialData={
    movies:[]
}

export const movieReducer=(state=initialData,action)=>{
    switch (action.type){
        case "LOAD_MOVIES":
            return { movies: action.payload}
        default:
            return state
    }
}

