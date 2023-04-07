import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { NewContext } from '../Context/Context';
import { Box, Button, TextField } from '@mui/material'

const Login = () => {

    const [values, setValues] = useState({email:"", password:""});

    const { handleLogin } = useContext(NewContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        navigate("/home");
    }
    

    return (
    <Box 
        component='form'
        sx={{display: 'flex', flexDirection: 'column', gap: '20px', width: '20vw'}}
        onSubmit={handleSubmit}
    >
        <TextField
            name='email'
            size='small'
            type='text'
            label='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value})}
        />
        <TextField
            name='password'
            size='small'
            type='text'
            label='password'
            placeholder='Enter your Password'
            value={values.password}
            onChange={(e) => setValues({...values, password: e.target.value})}
        />
        <Button type='submit' size='small' variant='contaned'>
            Inicio
        </Button>
    </Box>
    )
}

export default Login