
const Reducer=(state,action)=>{
    const{payload,type}=action
    switch(type){
        case "LOGIN":
            return{...state,isAuth:true,token:payload}
        case "LOGOUT":
            return{...state,isAuth:false,token:null}
        case "PREVTOKEN":
            return{...state,isAuth:true}
        case "NOPREVTOKEN":
            return{...state,isAuth:false}

        default:
            return state
    }

}
export default Reducer