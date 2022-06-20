import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from './TableComponent';
import { IEmployee } from '../App';
import { API_URL_BASE } from '../services/constant';
import { updateEmployee } from '../store/employee';

 
const AddComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { full_name, email, contact_number, id } = useSelector((state: IState) => state.user);
    const [fullName, setFullName] = useState<string>(full_name);
    const [Email, setEmail] = useState<string>(email);
    const [contactNumber, setContactNumber] = useState<string>(contact_number);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const body = {
            id, 
            full_name: fullName,
            email: Email,
            contact_number: contactNumber
        }
        axios
            .patch(`${API_URL_BASE}/employee`, body)
            .then(response => {
                const { data } = response;

                dispatch(updateEmployee(data));

                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <Container className='mt-5'>
            <Form inline onSubmit={handleSubmit}>
                <h3 className='mt-3 mb-3'>ID: {id}</h3>
                <FormGroup>
                    <Label for="exampleFullName"hidden>Full Name</Label>
                    <Input id="exampleFullName" name="full_name" placeholder="Full Name"type="text" className='p-3' value={fullName} 
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input id="exampleEmail" name="email"placeholder="Email"type="email" className='p-3' value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="exampleContact"hidden>Contact Number</Label>
                    <Input id="exampleContact" name="contact_number" placeholder="Contact Number" type="text" className='p-3' value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </FormGroup>
                {' '}
                <Button className='bg-primary' type='submit'>
                    Update
                </Button>
            </Form>
        </Container>
    )
}

export default AddComponent;