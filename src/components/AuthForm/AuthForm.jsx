import React from 'react'
import { Box, VStack, Image, Input, Button, Flex, Text, Center } from '@chakra-ui/react'
import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Googleauth from './Googleauth'

const AuthForm = () => {
const [isLogin, setIsLogin] = useState(true)

  return (
    <>
    <Box border='1px solid gray' borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src='/logo.png' h={24} cursor={'pointer'} alt='Instagram'/>
            {isLogin ? <Login /> : <Signup />}
            <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                <Box flex={2} h={'1px'} bg="gray.400" />
                <Text mx={1} color={'white'}>OR</Text>
                <Box flex={2} h={'1px'} bg="gray.400" />
            </Flex>
            <Googleauth/>
        </VStack>    
    </Box>

    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
    <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={2} fontSize={14}>
            {isLogin ? "Don't Have an account?": "Already have an account?"}
        </Box>
        <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
            {isLogin ? "Sign Up": "Log In"}
        </Box>
    </Flex>
    </Box> 
    </>
  )
}

export default AuthForm