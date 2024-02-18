
import { Button, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import toast from "react-hot-toast";
import {useDispatch} from 'react-redux';


const Product = () => {
    const productList=[
        {
          name: "Red Spanish PineApple",
          price: "40",
          imgSrc: "https://specialtyproduce.com/sppics/22244.png",
          id: "rsp",
        },
        {
          name: "Abacaxi PineApple",
          price: "30",
          imgSrc: "https://i.pinimg.com/originals/a0/e6/b1/a0e6b147c5a1c154e45370c878791d00.jpg",
          id: "ap",
        },
        {
            name: "Queen PineApple",
            price: "20",
            imgSrc: "https://5.imimg.com/data5/SELLER/Default/2023/1/ZM/IP/FZ/27813924/organic-queen-pineapple-500x500.png",
            id: "qp",
          }
      ]

      const dispatch= useDispatch();
    
    
      const addToCartHandler=(options)=>{
        dispatch({type:'addToCart',payload:options})
        dispatch({type:'calculatePrice'});
        toast.loading("Added To Cart");
      };
    
      return (
        <VStack>
          <Heading bgColor={'yellow'} width={'95%'} textAlign={'center'} borderRadius={'10px'}>Our Products!</Heading>
          {
            productList.map(i => (
              <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
            ))
          }
        </VStack>
      )
    }
    
    const ProductCard=({name,id,price,handler,imgSrc})=>(
      <HStack display={'flex'} flexDirection={'column'} m={'1%'} bgColor={'yellow'} p={'2%'} borderRadius={'10px'} width={'95%'} height={'20%'}marginTop={'-1%'}>
        <Img src={imgSrc} alt={name} height={'30%'} width={'30%'} borderRadius={'10px'} objectFit={'cover'}/>
        <Heading fontWeight={'bold'} p={'-2%'}>{name}</Heading>
        <Text fontWeight={'bold'} fontSize={'20px'}> Price: ${price}</Text>
        <Button onClick={()=> handler({name,price,id,quantity:1,imgSrc})} h={'40px'} w={'90px'} border={'none'} borderRadius={'5%'} cursor={'pointer'}>Add to Cart</Button>
      </HStack>
    )
 

export default Product;