import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'

const Sidebar = () => {
  return (
    <Box heigh={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={'sticky'}
    top={0}
    left={0}
    px={{base:2, md:4}}>
        <Flex direction={'column'} gap={10} width={'full'} height={'full'}>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:'none', md:'block'}} cursor={'pointer'}>
                <InstagramLogo />
            </Link>
            <Link to={"/"} as={RouterLink} p={2} display={{base:'block', md:'none'}} 
            cursor={'pointer'} 
            borderRadius={6} 
            _hover={{bg:'whiteAlpha.200'}}
            w={10} 
            >
                <InstagramMobileLogo />
            </Link>
        </Flex>

    </Box>
  )
}

export default Sidebar