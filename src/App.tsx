import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { API_URL_BASE } from './services/constant';
import { useDispatch } from 'react-redux';
import { addEmployee, fetchEmployee } from './store/employee';
import UpdateComponent from './components/UpdateComponent';
import TableComponent from './components/TableComponent';
import AddComponent from './components/AddComponent';
import Header from './components/Header';

export interface IEmployee {
  id: number,
  email: string,
  full_name: string,
  contact_number: string
}

export interface INewEmployee {
  email: string,
  full_name: string,
  contact_number: string
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${API_URL_BASE}/employee`)
      .then(response => {
        const { data } = response;
        
        data.map((item: IEmployee) => dispatch(addEmployee(item)))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <TableComponent /> } />
        <Route path='/add' element={ <AddComponent /> } />
        <Route path='/update' element={ <UpdateComponent /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
