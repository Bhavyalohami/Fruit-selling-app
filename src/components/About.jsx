import React from 'react';
import { Badge, Box, Container, Grid, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import crateGraphic from '../assets/graphics/bundle-crate.svg';

const About = () => {
  return (
    <Box bg="#fbfff6" color="#123522">
      <Box className="organic-hero orchard-map" py={{ base: 14, md: 20 }}>
        <Container maxW="8xl">
          <Stack maxW="760px" spacing="5">
            <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
              Our story
            </Badge>
            <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
              A pineapple-first market with real harvest standards.
            </Heading>
            <Text color="#466655" fontSize="lg">
              PineApplee started with one simple promise: sell tropical fruit only when it smells ripe, looks bright, and arrives in good shape.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="10" alignItems="center">
          <Image src={crateGraphic} alt="Fresh pineapple selection" borderRadius="34px" h={{ base: '340px', md: '520px' }} w="100%" objectFit="cover" />
          <Stack spacing="6">
            <Heading fontSize={{ base: '34px', md: '48px' }}>How we choose every order</Heading>
            <Text color="#466655" fontSize="lg">
              We buy in smaller batches, sort by aroma and color, and pack fruit by ripeness stage. Home orders get table-ready fruit, cafes get consistent sizes, and event crates are selected for presentation.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="4">
              {[
                'Ripeness checked by hand',
                'Grower-direct seasonal lots',
                'Separate packing for juice and gifting',
                'Clear replacement support',
              ].map((point) => (
                <HStack key={point} className="leaf-card" p="4" borderRadius="18px">
                  <FiCheckCircle color="#2f8f53" />
                  <Text fontWeight="900">{point}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
