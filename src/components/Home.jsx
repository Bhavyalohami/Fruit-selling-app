import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Box, Heading, Img, Text} from '@chakra-ui/react'
 
import img1 from '../assets/images.jpg';
import img2 from '../assets/imagess.jpg';
import img3 from '../assets/imagesss.jpg';

const Home = () => {
  return (<>
    <Box margin={'-5px'} marginTop={'-15px'} bgColor={'yellow'} borderRadius={'5px'}>
      <Heading textTransform={'uppercase'} fontWeight={'bold'} color={'chocolate'} p={'0'} textAlign={'center'} paddingTop={'15px'}>Pinne-Applicious</Heading>
      <MyCarousel />
      <div id="about" >
        <Heading color={'chocolate'} textAlign={'center'} fontWeight={'bold'}>What we are?</Heading>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'} color={'darkgoldenrod'}>We are one of the best leading fruit (pineapple) selling company in the market. We provide fresh and organic pineapples to our customers all over the world.</Text>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'} color={'darkgoldenrod'}>Highly nutritious.</Text>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'}color={'darkgoldenrod'}>Contains antioxidants.</Text>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'}color={'darkgoldenrod'}>May reduce your risk of cancer.</Text>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'}color={'darkgoldenrod'}>May boost immunity and suppress inflammation.</Text>
        <Text textAlign={'center'} fontSize={'17'} fontWeight={'bold'}color={'darkgoldenrod'} paddingBottom={'20px'}>May speed recovery after surgery or strenuous exercise.</Text>
      </div>
    </Box>
    </>
  )
}

const MyCarousel=()=>(
  <Carousel infiniteLoop autoPlay interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={'100%'} h={'90vh'}>
      <Img src={img1} h={'100%'} w={'100%'} objectFit={'cover'} borderRadius={'15px'}/>
    </Box>
    <Box w={'100%'} h={'90vh'}>
      <Img src={img2} h={'100%'} w={'100%'} objectFit={'cover'} borderRadius={'15px'}/>
    </Box>
    <Box w={'100%'} h={'90vh'}>
      <Img src={img3} h={'100%'} w={'100%'} objectFit={'cover'} borderRadius={'15px'}/>
    </Box>
  </Carousel>
);


export default Home;