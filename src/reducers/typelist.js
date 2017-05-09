import * as types from "../constants/ActionTypes";

const initialState = {
    types: []
};

export default function typelist(state = initialState, action) {

    switch (action.type) {
        case types.ADD_TYPE_DATA:

            //check for duplications

            for (let type of state.types) {
                if (type.id === action.data.id) {
                    return state;
                }
            }

            //add a new type

            return {
                types: [
                    ...state.types,
                    {
                        id: action.data.id,
                        count: action.data.documentsCount,
                        name: action.data.name,

                    }
                ]
            };

        default:
            return state;
    }
}
