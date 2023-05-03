import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FireAlert } from '../shared/Alert'
import { useFacultyDispatchContext, useFacultyStateContext } from '../pages/Faculty';

function FacultyTable({requestModal}) {
    const { faculties } = useFacultyStateContext();
    const dispatch = useFacultyDispatchContext();

    const deleteHandle = (facObj) => {
        const Question = {
            title: `Delete A Faculty ${facObj.name}?`,
            text: `Do you want to delete ${facObj.name} from faculties table?`,
            icon: 'question',
        }
        FireAlert(Question).then((res) => {
            if (res.isConfirmed === true) {
                dispatch({ type: 'delete', payload: facObj })
            }
        })
    }

    return (<div>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Faculty Name</th>
                    <th>Code</th>
                    <th>Unique Id</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {faculties.map((faculty, index) => {
                    return <tr key={faculty.id}>
                        <td>{index + 1}</td>
                        <td>{faculty.name}</td>
                        <td>{faculty.code}</td>
                        <td>{faculty.uniqueId}</td>
                        <td>{faculty.isActive ? "Active" : "Inactive"}</td>
                        <td className='action_data'>
                            <Button className='m-1' onClick={() => { requestModal(faculty) }}>Edit</Button>
                            <Button variant="danger" onClick={() => { deleteHandle(faculty) }}>Delete</Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    </div>)
}
export default FacultyTable