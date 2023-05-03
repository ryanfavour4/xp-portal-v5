import Data from "../db/Faculty.json"
import { FireAlert } from "../shared/Alert";


const initialState = {
    stateFac: Data.faculties
};

function reducerFunction(state, action) {
    const facultiesArray = state.stateFac
    const newFaculty =  {...action.payload}
    switch (action.type) {
        case 'addFaculties':
            newFaculty.id = facultiesArray.length + 1;
            const Question = {
                title: `A Faculty was added ${action.payload.name}?`,
                text: `${action.payload.name} added to faculties table?`,
                icon: 'success',
            }
            FireAlert(Question)
            return {stateFac: [...facultiesArray, newFaculty]};
        case 'editFaculties':
            const index = facultiesArray.findIndex((m) => m.id === newFaculty.id);
            const newArray = facultiesArray[index] = newFaculty;
            return {stateFac: [...facultiesArray, newArray]};
        case 'delete':
            const newArr = facultiesArray.filter((faculties) => faculties.id !== newFaculty.id)
            return { stateFac: newArr};
        default:
            return;
    }
}

export { initialState, reducerFunction }
