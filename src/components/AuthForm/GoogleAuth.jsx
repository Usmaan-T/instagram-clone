import React from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'

const Googleauth = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} cursor='pointer'>
        <Image src='/google.png' w={5} alt='Google Logo'></Image>
        <Text mx='2' color='blue.500'>Log in with google</Text>
    </Flex>
  )
}

export default Googleauth