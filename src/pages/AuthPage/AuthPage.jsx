import { Container, Flex, Box, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                <Box display={{base:"none", md:"block"}}>
                    <Image src="/auth.png" height={650} alt="Phone Img"/>
                </Box>

                <VStack space={4} align={"stretch"}>
                    <AuthForm />
                    <Box textAlign={"center"}>Get the App.</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src="/playstore.png" h={"10"} alt="Playstore Logo" />
                        <Image src="/microsoft.png" h={"10"} alt="Microsoft Logo" />
                    </Flex> 
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage