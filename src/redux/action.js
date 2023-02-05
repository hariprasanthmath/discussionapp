
export const addComment = (dispatch, data) =>{
   dispatch({
     type : "CREATECOMMENT",
     payload : data
   })
}