import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiTruck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import HarvestScene from './HarvestScene';
import { FloatingFruit, MotionVine } from './MotionOrchard';
import crateGraphic from '../assets/graphics/bundle-crate.svg';
import qualityGraphic from '../assets/graphics/quality-scan.svg';
import giftGraphic from '../assets/graphics/gift-box.svg';
import { featuredProducts } from '../data/products';
import { comparisonRows, testimonials, trustPoints } from '../data/content';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box bg="#fbfff6" color="#123522" overflow="hidden">
      <Box as="section" className="organic-hero orchard-map" position="relative" minH={{ base: '900px', lg: '780px' }}>
        <FloatingFruit className="one" />
        <FloatingFruit className="two" />
        <Container maxW="8xl" pt={{ base: 12, md: 18 }} pb={{ base: 8, md: 16 }} position="relative">
          <Grid templateColumns={{ base: '1fr', lg: '0.95fr 1.05fr' }} gap={{ base: 8, lg: 4 }} alignItems="center">
            <Stack spacing="7" zIndex="1">
              <Badge alignSelf="flex-start" bg="#70d6ff" color="#123522" borderRadius="full" px="4" py="2">
                Orchard direct / ripeness sorted / gift ready
              </Badge>
              <Heading maxW={{ base: '360px', md: '760px' }} fontSize={{ base: '46px', md: '92px', xl: '118px' }} lineHeight=".86" letterSpacing="0" fontWeight="950">
                Fruit with a little theatre.
              </Heading>
              <Text maxW={{ base: '350px', md: '660px' }} color="#466655" fontSize={{ base: 'md', md: 'xl' }}>
                PineApplee is a fresh tropical market for ripe pineapple boxes, cafe-ready fruit, seasonal bundles, and bright gift crates packed with real care.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'center' }} spacing="3" maxW={{ base: '350px', md: 'none' }}>
                <Button as={Link} to="/product" size="lg" bg="#2f8f53" color="white" rightIcon={<FiArrowRight />} _hover={{ bg: '#236f40' }}>
                  Shop the counter
                </Button>
                <Button as={Link} to="/bundles" size="lg" bg="#ffd166" color="#123522" _hover={{ bg: '#f5b73b' }}>
                  Build a box
                </Button>
                <Button as={Link} to="/gifting" size="lg" variant="outline" borderColor="#2f8f53" color="#123522">
                  Send a gift
                </Button>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4" maxW="760px">
                {[
                  ['24 hr', 'farm-to-pack'],
                  ['4.8/5', 'fresh rating'],
                  ['$100+', 'free delivery'],
                ].map(([value, label]) => (
                  <Stack key={label} className="leaf-card" borderRadius="20px" p="5">
                    <Text fontSize="36px" fontWeight="950" color="#f15f3d">{value}</Text>
                    <Text color="#466655" fontWeight="900">{label}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </Stack>
            <Box minH={{ base: '460px', md: '620px' }} position="relative">
              <HarvestScene />
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box className="sky-band" py="5">
        <HStack justify="center" gap={{ base: 5, md: 10 }} flexWrap="wrap">
          {trustPoints.map((point) => (
            <HStack key={point} fontWeight="950">
              <FiCheckCircle />
              <Text>{point}</Text>
            </HStack>
          ))}
        </HStack>
      </Box>

      <Box py={{ base: 8, md: 12 }} bg="#fbfff6">
        <MotionVine />
      </Box>

      <Container id="about" maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="10" alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={crateGraphic} alt="Pineapple fruit crate graphic" borderRadius="38px" w="100%" />
          </MotionBox>
          <Stack spacing="6">
            <Text color="#f15f3d" fontWeight="950">ABOUT PINEAPPLEE</Text>
            <Heading fontSize={{ base: '38px', md: '68px' }} lineHeight=".95">
              Market energy, farm care, and fruit worth gathering around.
            </Heading>
            <Text color="#466655" fontSize="lg">
              We buy in smaller batches, sort fruit by ripeness, and pack every order around how it will be served: breakfast bowls, cafe prep, office treats, or celebration tables.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="4">
              {['Ripeness labels', 'Office crates', 'Custom gifts', 'Freshness support'].map((item) => (
                <HStack key={item} className="leaf-card" p="4" borderRadius="18px">
                  <FiCheckCircle color="#2f8f53" />
                  <Text fontWeight="900">{item}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Stack>
        </Grid>
      </Container>

      <Box as="section" py={{ base: 14, md: 18 }} bg="#eaf8ff">
        <Container maxW="8xl">
          <HStack justify="space-between" align="end" gap="5" flexWrap="wrap" mb="8">
            <Box>
              <Text color="#2f8f53" fontWeight="950">FEATURED HARVEST</Text>
              <Heading fontSize={{ base: '38px', md: '62px' }} lineHeight="1">Sweet picks ready today</Heading>
            </Box>
            <Button as={Link} to="/product" bg="#f15f3d" color="white" rightIcon={<FiArrowRight />}>
              View shop
            </Button>
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {featuredProducts.map((product, index) => (
              <MotionBox
                key={product.id}
                className="leaf-card"
                borderRadius="28px"
                overflow="hidden"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <VStack align="stretch" spacing="0">
                  <Image src={product.imgSrc} alt={product.name} h="260px" w="100%" objectFit="cover" />
                  <Stack p="5" spacing="3">
                    <Badge alignSelf="flex-start" bg="#ffd166" color="#123522">{product.badge}</Badge>
                    <Heading fontSize="2xl">{product.name}</Heading>
                    <Text color="#466655">{product.description}</Text>
                    <HStack justify="space-between">
                      <Text fontSize="3xl" fontWeight="950" color="#2f8f53">${product.price}</Text>
                      <FiTruck color="#f15f3d" />
                    </HStack>
                  </Stack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="8xl" py={{ base: 14, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', xl: '1fr 1fr' }} gap="8" alignItems="stretch">
          <Stack className="leaf-card" p={{ base: 6, md: 8 }} borderRadius="34px" spacing="5">
            <Text color="#f15f3d" fontWeight="950">BETTER THAN GROCERY ROULETTE</Text>
            <Heading fontSize={{ base: '34px', md: '54px' }}>Customers should not have to guess freshness.</Heading>
            <Stack spacing="4">
              {comparisonRows.map(([feature, us, them]) => (
                <Grid key={feature} templateColumns={{ base: '1fr', md: '.75fr 1fr 1fr' }} gap="3">
                  <Text fontWeight="950">{feature}</Text>
                  <Text color="#2f8f53" fontWeight="850">{us}</Text>
                  <Text color="#718878">{them}</Text>
                </Grid>
              ))}
            </Stack>
          </Stack>
          <Grid templateRows="1fr 1fr" gap="6">
            <HStack className="leaf-card" borderRadius="34px" p="5" align="center">
              <Image src={qualityGraphic} alt="Ripeness quality scan" w={{ base: '42%', md: '38%' }} borderRadius="24px" />
              <Stack>
                <Text color="#f15f3d" fontWeight="950">Quality scan</Text>
                <Heading fontSize={{ base: '2xl', md: '4xl' }}>Ripeness checks and replacement support.</Heading>
              </Stack>
            </HStack>
            <HStack className="leaf-card" borderRadius="34px" p="5" align="center">
              <Image src={giftGraphic} alt="Gift fruit box graphic" w={{ base: '42%', md: '38%' }} borderRadius="24px" />
              <Stack>
                <Text color="#2f8f53" fontWeight="950">Gift ready</Text>
                <Heading fontSize={{ base: '2xl', md: '4xl' }}>Corporate crates and event boxes.</Heading>
              </Stack>
            </HStack>
          </Grid>
        </Grid>
      </Container>

      <Box as="section" py={{ base: 14, md: 18 }} bg="#fff7df">
        <Container maxW="8xl">
          <Text color="#f15f3d" fontWeight="950" textAlign="center">CUSTOMER SIGNALS</Text>
          <Heading textAlign="center" fontSize={{ base: '36px', md: '58px' }} mb="8">
            Fruit people actually remember.
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            {testimonials.map((item) => (
              <Stack key={item.name} className="leaf-card" borderRadius="28px" p="6">
                <Text color="#2f8f53" fontWeight="950">5/5 fresh rating</Text>
                <Text color="#466655">"{item.quote}"</Text>
                <Box>
                  <Text fontWeight="950">{item.name}</Text>
                  <Text color="#718878" fontWeight="700">{item.role}</Text>
                </Box>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
