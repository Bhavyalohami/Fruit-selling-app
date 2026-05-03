import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FiFilter, FiPlus, FiShoppingBag, FiStar } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { productList } from '../data/products';
import heroPineapple from '../assets/graphics/hero-pineapple.svg';
import { MotionVine } from './MotionOrchard';

const categories = ['All', ...Array.from(new Set(productList.map((item) => item.category)))];

const Product = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'All') return productList;
    return productList.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const addToCartHandler = (options) => {
    dispatch({ type: 'addToCart', payload: { ...options, price: Number(options.price) } });
    dispatch({ type: 'calculatePrice' });
    toast.success(`${options.name} added to cart`);
  };

  return (
    <Box bg="#fbfff6" color="#123522" minH="80vh">
      <Box className="organic-hero orchard-map" py={{ base: 14, md: 20 }} position="relative" overflow="hidden">
        <Image src={heroPineapple} alt="" position="absolute" right={{ base: '-190px', md: '-50px' }} top={{ base: '80px', md: '-110px' }} w={{ base: '410px', md: '610px' }} opacity=".2" />
        <Container maxW="8xl" position="relative">
          <Stack maxW="800px" spacing="5">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
              Shop the counter
            </Badge>
            <Heading fontSize={{ base: '48px', md: '86px' }} lineHeight=".9">
              A produce counter that feels hand-picked.
            </Heading>
            <Text color="#466655" fontSize="lg">
              Filter fruit by use, size, and origin. Every card explains ripeness, serving style, and why that product belongs in the basket.
            </Text>
          </Stack>
        </Container>
      </Box>
      <Box bg="#fbfff6" pt="4">
        <MotionVine />
      </Box>

      <Container maxW="8xl" py={{ base: 10, md: 14 }}>
        <HStack mb="8" spacing="3" flexWrap="wrap">
          <HStack color="#2f8f53" fontWeight="950" mr="2">
            <FiFilter />
            <Text>Filter</Text>
          </HStack>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              size="sm"
              bg={activeCategory === category ? '#2f8f53' : 'white'}
              color={activeCategory === category ? 'white' : '#123522'}
              border="1px solid"
              borderColor="rgba(18, 53, 34, .14)"
              _hover={{ bg: activeCategory === category ? '#236f40' : '#fff7df' }}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6">
          {visibleProducts.map((item) => (
            <ProductCard key={item.id} product={item} handler={addToCartHandler} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ProductCard = ({ product, handler }) => (
  <Stack className="leaf-card" borderRadius="22px" overflow="hidden" spacing="0">
    <Box position="relative">
      <Image src={product.imgSrc} alt={product.name} h="280px" w="100%" objectFit="cover" />
      <Badge position="absolute" top="4" left="4" bg="#ffd166" color="#123522" borderRadius="full" px="3" py="1">
        {product.badge}
      </Badge>
    </Box>
    <Stack p="6" spacing="4" flex="1">
      <HStack color="#f15f3d" spacing="1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar key={star} fill="currentColor" />
        ))}
        <Text color="#466655" fontWeight="800" ml="2">{product.rating} ({product.reviews})</Text>
      </HStack>
      <Stack spacing="2">
        <Heading fontSize="2xl">{product.name}</Heading>
        <HStack flexWrap="wrap">
          <Badge bg="#dff6e7" color="#123522">{product.category}</Badge>
          <Badge bg="#eaf8ff" color="#123522">{product.size}</Badge>
        </HStack>
        <Text color="#2f8f53" fontWeight="950">{product.origin}</Text>
        <Text color="#466655">{product.description}</Text>
      </Stack>
      <Divider borderColor="rgba(18, 53, 34, .12)" />
      <Text color="#123522" fontWeight="850">Best for: {product.bestFor}</Text>
      <HStack justify="space-between" pt="2">
        <Text fontSize="4xl" fontWeight="950" color="#f15f3d">${product.price}</Text>
        <Button
          onClick={() => handler({ ...product, quantity: 1 })}
          bg="#2f8f53"
          color="white"
          _hover={{ bg: '#236f40' }}
          leftIcon={<FiPlus />}
          rightIcon={<FiShoppingBag />}
        >
          Add
        </Button>
      </HStack>
    </Stack>
  </Stack>
);

export default Product;
