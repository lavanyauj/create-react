  
import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {select,MenuItem} from '@material-ui/core';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1> CHOOSE YOUR ZILLION FAMILY NAME</h1>
              <select value="unborn egg">
              <h1 className="dropdown-login">unborn egg</h1>

        <MenuItem value={1} >Neonate Achiever</MenuItem>
        <MenuItem value={1} >Tenderfoot Activist</MenuItem>
        <MenuItem value={1} >Human Dynamo</MenuItem>
        <MenuItem value={1} >Stardom Dreamer</MenuItem>
        <MenuItem value={1} >I'm Tireless Seeker</MenuItem>
        <MenuItem value={1} >Brobdingnagian Engine</MenuItem>
        <MenuItem value={1} >Zillionaire</MenuItem>
        <MenuItem value={1} >Human Dynamo</MenuItem>

      </select>
        <p>GENDER</p>
         <input type="radio" name="gender" value="male"/>
        <label>Male </label>
        <input type="radio" name="gender" value="male"/>
        <label>Female </label>
        <p>EMAIL ADDRESS/PHONE NUMBER</p>
        <button className='form-input-btn' type='submit'>
          update
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
