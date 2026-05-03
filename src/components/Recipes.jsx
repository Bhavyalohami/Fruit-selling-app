import React from 'react';
import { Badge, Box, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import recipeGraphic from '../assets/graphics/recipe-flame.svg';

const recipes = [
  {
    title: 'Charred pineapple with lime salt',
    time: '15 min',
    image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80',
    body: 'Brush slices with honey, grill until caramelized, then finish with lime, salt, and mint.',
  },
  {
    title: 'Morning pineapple bowl',
    time: '10 min',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=80',
    body: 'Layer yogurt, pineapple cubes, banana, seeds, and a small pour of chilled juice.',
  },
  {
    title: 'Fresh cafe cooler',
    time: '8 min',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    body: 'Shake pineapple juice with lemon, ginger, ice, and sparkling water for a clean tropical drink.',
  },
];

const Recipes = () => {
  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="8xl" py={{ base: 12, md: 18 }}>
        <Stack maxW="780px" spacing="5" mb="10">
          <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
            Serving ideas
          </Badge>
          <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
            Simple ways to make pineapple feel special.
          </Heading>
          <Text color="#466655" fontSize="lg">
            A few quick serving ideas for turning a ripe pineapple box into breakfast, drinks, desserts, and party plates.
          </Text>
        </Stack>
        <Image src={recipeGraphic} alt="Charred pineapple recipe graphic" borderRadius="34px" mb="8" maxH="420px" w="100%" objectFit="cover" />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {recipes.map((recipe) => (
            <Stack key={recipe.title} className="leaf-card" borderRadius="22px" overflow="hidden" spacing="0">
              <Image src={recipe.image} alt={recipe.title} h="260px" w="100%" objectFit="cover" />
              <Stack p="6" spacing="3">
                <Text color="#2f8f53" fontWeight="900">{recipe.time}</Text>
                <Heading fontSize="2xl">{recipe.title}</Heading>
                <Text color="#466655">{recipe.body}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Recipes;
