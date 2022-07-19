export const AddProduct=(value)=>async dispatch=>{
    dispatch({
        type:"ADD",
        payload:value
    })
}

