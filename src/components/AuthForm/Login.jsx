import React from 'react'
import { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });

  return (
    <>
        <Input 
            placeholder='Email' 
            fontSize={14} type='email' 
            value={inputs.email}
            size={'sm'}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}>
        </Input>
        <Input 
            placeholder='Password' 
            fontSize={14} type='password' 
            value={inputs.password} 
            size={'sm'}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}>
        </Input>
        <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}>
        Log In
        </Button>
    </>
  )
}

export default Login