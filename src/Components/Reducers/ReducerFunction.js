
const initialState= false;

const ReducerFunction=(state=initialState, actions)=>{
    switch (actions.type) {
        case "CHANGEANIMATESTATE":
                return state=false;
            
            break;
        case "CHANGEANIMATESTATEFalse":
            return state=true;
        default: return initialState;
            break;
    }
}

export default ReducerFunction;