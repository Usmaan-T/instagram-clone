import React from 'react'
import { useState } from 'react';
import { Input, Button, InputGroup, InputRightElement, Alert } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, AlertIcon } from '@chakra-ui/icons';
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword';
const Signup = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        fullName:'',
        username:'',
        confirmPassword:''
    });
    const {signup, loading, error} = useSignupWithEmailAndPassword()
    
    const [showPassword, setShowPassword] = useState(false)

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
                placeholder='Username' 
                fontSize={14} type='text' 
                value={inputs.username}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,username:e.target.value})}>
            </Input>
            <Input 
                placeholder='Full Name' 
                fontSize={14} type='text' 
                value={inputs.fullName}
                size={'sm'}
                onChange={(e) => setInputs({...inputs,fullName:e.target.value})}>
            </Input>
            <InputGroup>
                <Input 
                    placeholder='Password' 
                    fontSize={14} type={showPassword ? "text" : "password"} 
                    value={inputs.password}
                    size={'sm'}
                    onChange={(e) => setInputs({...inputs,password:e.target.value})}>
                </Input>
                <InputRightElement h='full'>
                    <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}
            <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} onClick={() => signup(inputs)} isLoading={loading}>
            Sign Up
            </Button>
        </>
  )
}

export default Signup