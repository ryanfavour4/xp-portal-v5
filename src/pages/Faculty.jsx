import FacultyTable from "../components/FacultyTable"
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import XPModal, { useXPModal } from '../components/Modal';
import { FacultyForm } from "../components/FacultyForm";
import  { emptyForm, useFacultyForm } from "../model/FacultyFormContext";
import { createContext, useContext, useReducer } from "react";
import { initialState, reducerFunction } from "../helpers/FacultyConn";

const FacultyStateContext = createContext(null);
const FacultyDispatchContext = createContext(null);

function Faculty() {
    const { show, handleShow, handleClose } = useXPModal();
    const [state, dispatch] = useReducer(reducerFunction, initialState)
    const { formObj, populateForm, handleFacultyObjChange } = useFacultyForm()

    const requestModal = (obj) => {
        populateForm(obj);
        handleShow();
    }

    return (
        <FacultyStateContext.Provider value={{ faculties: state.stateFac }}>
            <FacultyDispatchContext.Provider value={dispatch}>
                <div className='Faculty container p-0'>
                    <Button variant="primary" onClick={() => requestModal(emptyForm)}>
                        <FaPlus /> Add
                    </Button>
                    <FacultyTable requestModal={requestModal} />

                    <XPModal modalTitle={formObj.id ? "Edit Faculty" : "Add Faculty"} show={show} handleClose={handleClose}>
                        <FacultyForm formObj={formObj} handleFacultyObjChange={handleFacultyObjChange} populateForm={populateForm} />
                    </XPModal>
                </div >
            </FacultyDispatchContext.Provider>
        </FacultyStateContext.Provider>
    )
}

export const useFacultyStateContext = () => useContext(FacultyStateContext);
export const useFacultyDispatchContext = () => useContext(FacultyDispatchContext);

export default Faculty
