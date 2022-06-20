import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { IEmployee } from '../App';
import { API_URL_BASE } from '../services/constant';
import { deleteEmployee } from '../store/employee';
import { setCurrentUser } from '../store/user';


interface IProps {
    employee: IEmployee
}

const RowComponent: React.FC<IProps> = ({ employee }) => {
    const dispatch = useDispatch();
    
    const deleteHandler = () => {
        axios
            .delete(`${API_URL_BASE}/employee/${employee.id}`)
            .then(response => dispatch(deleteEmployee(response.data)))
            .catch(err => console.log(err))
    }

    return (
        <tr>
            <th scope="row">
                { employee.id }
            </th>
            <td>
                { employee.full_name }
            </td>
            <td>
                { employee.email }
            </td>
            <td>
               { employee.contact_number }
            </td>
            <td>
                <Link to='/update'>
                    <Button className='bg-primary' onClick={() => dispatch(setCurrentUser(employee))}>Edit</Button>
                </Link>
                <Button className='ml-2 bg-danger' onClick={deleteHandler} >Delete</Button>
            </td>
        </tr>
    )
}

export default RowComponent;