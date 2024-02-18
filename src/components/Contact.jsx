import { Container, Heading, Text,HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} bgColor={'yellow'} m={'-5px'} marginTop={'10px'} marginBottom={'15px'}>
      <form>
        <HStack alignItems={'center'} spacing={'8'} w={['50%','96']} m={'auto'} my={'16'} display={'flex'} flexDirection={'column'} bgColor={'darkkhaki'} borderRadius={'20%'}>
          <Heading fontSize={'38'}>Contact Us!</Heading>
          <Text fontSize={'25'}>Office No. :- +91 0123456789</Text>
          <Text fontSize={'25'}>Mail Us :- abcdefg@gmail.com</Text>
        </HStack>
        <HStack alignItems={'center'} spacing={'8'} w={['40%','96']} m={'auto'} my={'16'} display={'flex'} flexDirection={'column'} bgColor={'darkkhaki'} borderRadius={'20%'} p={'20px'}>
          <Heading>Write Directly To Us!</Heading>
          <Input placeholder='Write Here' h={'30px'} w={'40%'} border={'none'} borderRadius={'20px'}/>
          <Button cursor={'pointer'} h={'2rem'} w={'5rem'} border={'none'} borderRadius={'5px'} bgColor={'darkgoldenrod'} color={'GrayText'} fontWeight={'bold'}>Send</Button>
        </HStack>
      </form>
    </Container>
  )
}

export default Contact