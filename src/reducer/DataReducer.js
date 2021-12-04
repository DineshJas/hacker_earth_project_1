import { FETCH_DATA } from "../action/Types";

const initialState = {
    dataForGraph: []
};

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                dataForGraph: [...action.payload]
            }
    
        default:
            return state
    }
}

export default DataReducer;