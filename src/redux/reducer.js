const initialState = {
   posts : []
}

export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CREATECOMMENT" : 
          return {
             ...state,
             posts : action.payload
          }
        
        default : 
         return state;
    }
}