const initialData={
    series:[]
}

export const seriesReducer=(state=initialData,action)=>{
    switch (action.type){
        case "LOAD_SERIES":
            return { series: action.payload}
        default:
            return state
    }
}





