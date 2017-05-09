import * as types from "../constants/ActionTypes";

const initialState = {
    files: []
};

export default function filelist(state = initialState, action) {

    switch (action.type) {
        case types.ADD_FILE_DATA:

            //check for duplications

            for (let file of state.files) {
                if (file.id === action.data.id) {
                    return state;
                }
            }

            //add a new file

            return {
                files: [
                    ...state.files,
                    {
                        id: action.data.id,
                        author_id: action.data.modifiedBy,
                        date_modified: action.data.modifiedDateTime,
                        status: action.data.status,
                        title: action.data.title

                    }
                ]
            };

        default:
            return state;
    }
}
