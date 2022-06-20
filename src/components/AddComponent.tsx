import axios from 'axios';
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { API_URL_BASE } from '../services/constant';
import { addEmployee } from '../store/employee';
import { useNavigate } from 'react-router-dom';
 
const AddComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const { exampleFullName, exampleEmail, exampleContact } = event.target as typeof event.target & {
            exampleFullName: { value: string }
            exampleEmail: { value: string }
            exampleContact: { value: string }
        };
        
        const body = { email:  exampleEmail.value, full_name: exampleFullName.value, contact_number: exampleContact.value  };

        axios
            .post(`${API_URL_BASE}/employee`, body)
            .then(response => {
                dispatch(addEmployee(response.data));
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <Container className='mt-5'>
            <Form inline onSubmit={event => sendForm(event) }>
                <FormGroup>
                    <Label for="exampleFullName"hidden>Full Name</Label>
                    <Input id="exampleFullName" name="full_name" placeholder="Full Name"type="text" className='p-3' />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input id="exampleEmail" name="email"placeholder="Email"type="email" className='p-3'/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="exampleContact"hidden>Contact Number</Label>
                    <Input id="exampleContact" name="contact_number" placeholder="Contact Number" type="text" className='p-3'/>
                </FormGroup>
                {' '}
                <Button className='bg-primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddComponent;