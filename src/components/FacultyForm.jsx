import { React } from "react";
import { Form, Button } from "react-bootstrap";
import { useFacultyDispatchContext } from "../pages/Faculty";

export const FacultyForm = ({formObj, handleFacultyObjChange, populateForm}) => {
  const dispatch = useFacultyDispatchContext()

  const onSubmitForm = () => {
    if (formObj.id === 0) {
      const actionObj = {
        type: "addFaculties",
        payload: formObj
      }
      dispatch(actionObj);
    } else if (formObj.id !== 0) {
      const actionObj = {
        type: "editFaculties",
        payload: formObj
      }
      dispatch(actionObj);
    }
    
  }
  
  const handleValueChange = (event) => {
    handleFacultyObjChange(event);
  }
  
  return (
    <Form>
      <input
        type="hidden"
        id="faculty_id"
        name="id"
        value={formObj.id}
        onChange={handleValueChange}
      />
      <Form.Group controlId="stName" className="mb-2">
        <Form.Label>Faculty Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          value={formObj.name}
          onChange={(e) => {
            handleValueChange(e);
          }}
          className="form-control"
        ></Form.Control>
        <Form.Control.Feedback tpe="invalid">
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="stName" className="mb-2">
        <Form.Label>Faculty Code</Form.Label>
        <Form.Control
          type="name"
          name="code"
          value={formObj.code}
          onChange={handleValueChange}
          className="form-control"
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="stName" className="mb-2">
        <Form.Label>Faculty Unique Id</Form.Label>
        <Form.Control
          type="name"
          name="uniqueId"
          value={formObj.uniqueId}
          onChange={handleValueChange}
          className="form-control"
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="stActive" className="col col-sm-12">
        <Form.Check
          type="checkbox"
          name="isActive"
          checked={formObj.isActive}
          onChange={handleValueChange}
          label="Is Active?"
        />
      </Form.Group>
      <Button variant="secondary" className="mt-2" onClick={(e) => { onSubmitForm(e) }}>
        Submit
      </Button>
    </Form>
  );
};