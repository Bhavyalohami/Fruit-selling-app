import { VStack , Box , Text, Img, Tag, Heading, HStack, Button} from '@chakra-ui/react';
import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';


const Cart = () => {
    const {cartItems,shipping,tax,total,subTotal} =useSelector(state=>state.cart);
    const dispatch = useDispatch();

    const increment=(id) =>{
        dispatch({
            type:"addToCart",
            payload: {id},
        })
        dispatch({
            type:"calculatePrice",
        })
    }
    const decrement=(id) =>{
        dispatch({
            type:"decrement",
            payload: id,
        })
        dispatch({
            type:"calculatePrice",
        })
    }
    const deleteHandler=(id) =>{
        dispatch({
            type:"removeFromCart",
            payload: id,
        })
        dispatch({
            type:"calculatePrice",
        })
    }

  return (
    <VStack height={'120vh'} bgColor={'yellow'} m={'1%'} borderRadius={'5px'} p={'5px'}>
        <Box h={'100%'} w={'100%'}>
            {
                cartItems.length > 0 ?(
                    cartItems.map(i=>(
                        <CartItem name={i.name} imgSrc={i.imgSrc} price={i.price} qty={i.quantity} id={i.id} key={i.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
                    ))
                ):(<Text fontWeight={'800'} fontFamily={'serif'} fontSize={'x-large'}>Your Cart is Empty!</Text>)
            }
        </Box>
        <HStack bgColor={'darkkhaki'} w={'65%'}  display={'flex'} flexDirection={'row'} h={'20%'} borderRadius={'5px'} p={'2px'} marginTop={'-15%'}>
            <Text fontWeight={'600'} fontSize={'large'} p={'1%'} marginLeft={'10px'}>SubTotal: ${subTotal}</Text>
            <Text fontWeight={'600'} fontSize={'large'} p={'1%'}>Shipping: ${shipping}</Text>
            <Text fontWeight={'600'} fontSize={'large'} p={'1%'}>Tax: ${tax}</Text>
            <Text fontWeight={'900'} fontSize={'x-large'} p={'2%'}>Total: ${total}</Text>
        </HStack>
        <Button variant='link' border={'none'}bgColor={'whitesmoke'} textDecorationLine={'underline'} fontWeight={'bold'} cursor={'pointer'} >Proceed To Check Out-</Button>
    </VStack>
  )
}

const CartItem = ({imgSrc,name,price,qty,increment,decrement,deleteHandler,id})=>(
    <VStack display={'flex'} flexDirection={'row'}  w={'90%'} h={'10%'} bgColor={'firebrick'} m={'2%'} borderRadius={'10px'} p={'2%'} spacing={'2%'}>
        <Img src={imgSrc} alt='Item' height={'110%'} width={'15%'} borderRadius={'5px'}/>
        <Tag>
            <Heading>{name}</Heading>
            <Text fontWeight={'900'} fontSize={'large'} marginLeft={'30px'}>${price}</Text>
        </Tag>
        <HStack display={'flex'}  alignItems={'center'} justifyContent={'flex-end'}>
            <Button onClick={()=> decrement(id)} cursor={'pointer'} bgColor={'whitesmoke'} variant={'ghost'} h={'30px'} w={'30px'} fontSize={'large'} fontWeight={'bold'} border={'none'}  borderRadius={'50%'}>-</Button>
            <Text>{qty}</Text>
            <Button onClick={()=> increment(id)} cursor={'pointer'} bgColor={'whitesmoke'} variant={'ghost'} h={'30px'} w={'30px'} fontSize={'large'} fontWeight={'bold'} border={'none'}  borderRadius={'50%'}>+</Button>
        </HStack>
        <AiFillDelete onClick={()=>deleteHandler(id)} fontSize={'x-large'} cursor={'pointer'}/>
    </VStack>
)    

export default Cart