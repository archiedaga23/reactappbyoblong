import { Table, Container, Button } from 'reactstrap';
import RowComponent from './RowComponent';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IEmployee } from '../App';

export interface IState {
    employee: IEmployee[]
    user: IEmployee
}

const TableComponent = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const data = useSelector((state: IState) => state.employee);

    useEffect(() => {
        setEmployees(data);
    }, [data])

    return (
       <Container>
            <Link to='/add'><Button className='bg-primary mt-5 mb-2' >Add Student</Button></Link>
            <Table responsive striped className='noWrap'>
                <thead>
                    <tr>
                    <th>
                        id #
                    </th>
                    <th>
                        Full Name
                    </th>
                    <th>
                        E-mail
                    </th>
                    <th>
                        Contact No.
                    </th>
                    <th>
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee: IEmployee) =>  <RowComponent employee={employee} key={employee.id} />)
                    }
                </tbody>
            </Table>
       </Container>
    )
}

export default TableComponent;
