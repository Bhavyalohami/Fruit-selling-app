import React from 'react'
import {Avatar, Button, Stack, Text, VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import img1 from '../assets/pineapple-sunglasses.webp'
import {FiShoppingCart} from 'react-icons/fi'
import  { useSelector } from 'react-redux'

const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  return (
    <Stack direction={['column','row']} bgColor={'yellow'} h={'10vh'} w={'full'} borderRadius={'5px'} p={'10px'} m={'-5px'}>
      <VStack w={'100%'} marginLeft={'1vh'} color={'chocolate'} fontSize={'large'} fontWeight={'bold'} display={'flex'} flexDirection={'row'}>
        <Avatar height={'4rem'} src={img1} borderRadius={'2rem'}/>
        <p>PINNE-APPLEE</p>
      </VStack>
      <VStack w={'100%'} display={'flex'} flexDirection={'row'}  justifyContent={'flex-end'}>
        
          <div>
            <Link to={'/'}><Button fontWeight={'bold'} bgColor={'chocolate'} color={'darkred'} borderRadius={'10px'} h={'50px'} cursor={'pointer'}>Home</Button></Link>
          </div>
          <div>
            <HashLink to={'/#about'}><Button fontWeight={'bold'} bgColor={'chocolate'} color={'darkred'} borderRadius={'10px'} h={'50px'} cursor={'pointer'}>About</Button></HashLink>
          </div>
          <div>
            <Link to={'/product'}>
              <Button fontWeight={'bold'} bgColor={'chocolate'} color={'darkred'} borderRadius={'10px'} h={'50px'}cursor={'pointer'}>Product</Button>
            </Link>
          </div>
          <div>
            <Link to={'/contact'}><Button fontWeight={'bold'} bgColor={'chocolate'} color={'darkred'} borderRadius={'10px'} h={'50px'}cursor={'pointer'}>Contact</Button></Link>
          </div>

          <div>
          <Link to='/cart'>
              <Button marginTop={'55%'} bgColor={'chocolate'} borderRadius={'10px'}><FiShoppingCart cursor={'pointer'} color={'black'} size={'45px'}/></Button>
              <Text marginLeft={'30px'} marginTop={'-2px'} fontSize={'medium'} fontWeight={'bold'} >{cartItems.length}</Text>
            </Link>
          </div>
      </VStack>
    </Stack>
  )
}

export default Header