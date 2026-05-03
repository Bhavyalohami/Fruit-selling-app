import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const faqs = [
  ['How ripe will my pineapple be?', 'Most home orders are packed ready to eat within 24 to 48 hours. You can request greener fruit during checkout.'],
  ['Do you sell only pineapples?', 'Pineapple is the hero, but we also sell tropical crates and juice packs that pair pineapple with seasonal fruit.'],
  ['Can I order for an event?', 'Yes. Use the contact page for office, cafe, and event crates. We can sort by size, ripeness, and presentation.'],
  ['What if fruit arrives damaged?', 'Send a same-day photo through the contact page and we will help with a replacement or credit.'],
  ['Is shipping free?', 'Shipping is free above $100. Smaller orders show the delivery fee automatically in the cart.'],
];

const Faq = () => {
  return (
    <Box bg="#fbfff6" color="#123522" className="orchard-map">
      <Container maxW="4xl" py={{ base: 12, md: 18 }}>
        <Stack spacing="5" mb="8">
          <Badge alignSelf="flex-start" bg="#ffd166" color="#123522" borderRadius="full" px="4" py="2">
            Questions
          </Badge>
          <Heading fontSize={{ base: '46px', md: '76px' }} lineHeight=".95">
            Before you order
          </Heading>
          <Text color="#466655" fontSize="lg">
            Clear details make the store feel trustworthy and help customers understand delivery, ripeness, and support.
          </Text>
        </Stack>
        <Accordion allowToggle className="leaf-card" borderRadius="22px" overflow="hidden">
          {faqs.map(([question, answer]) => (
            <AccordionItem key={question} borderColor="rgba(18, 53, 34, .12)">
              <AccordionButton py="5">
                <Box flex="1" textAlign="left" fontWeight="900" fontSize="lg">
                  {question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color="#466655" pb="5">
                {answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faq;
