
const InitialState={};

export default function(state=InitialState, action){
    switch(action.type){
        case "GET_PRODUCT_LIST":
            return action.payload;
            default:
                return state;
    }
};
