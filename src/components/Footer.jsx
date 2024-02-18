import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Heading, Stack,Text,VStack,HStack} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Stack direction={['column','row']} bgColor={'yellow'} h={'auto'} w={'full'} borderRadius={'5px'} p={'10px'} m={'-5px'} marginTop={'-10px'}>
        <VStack w={'100%'} display={'flex'} flexDirection={['row','column']} alignItems={'flex-start'} p={'2rem'}>
            <Heading color={'darkgoldenrod'}>PINNE-APPLEE</Heading>
            <Text marginTop={['0','-20px']} fontWeight={'bold'}>@All Rights Reserved.</Text>
        </VStack>
        <VStack w={'100%'} >
            <Heading>Links!</Heading>
            <HStack w={'100%'} display={'flex'} flexDirection={['column','row']} justifyContent={'center'}>
            <Link to='https://google.com' >
                <Button height={'5rem'} width={'5rem'} borderRadius={'100%'} cursor={'pointer'} border={'none'} fontWeight={'bold'}>Google</Button>
            </Link>
            <Link to='https://youtube.com'>
                <Button height={'5rem'} width={'5rem'} borderRadius={'100%'} cursor={'pointer'} border={'none'} fontWeight={'bold'}>Youtube</Button>
            </Link>
            <Link to='https://instagram.com'>
                <Button height={'5rem'} width={'5rem'} borderRadius={'100%'} cursor={'pointer'} border={'none'} fontWeight={'bold'}>Instagram</Button>
            </Link>
            </HStack>
        </VStack>
    </Stack>
  )
}

export default Footer