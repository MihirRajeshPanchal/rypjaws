import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ReactElement, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FcBriefcase, FcTreeStructure, FcLineChart, FcMultipleDevices, FcBullish } from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      controls.start({ scale: 1 });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0 }}
      animate={controls}
      transition={{ duration: 0.4 }}
    >
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.2s ease-in-out',
        }}
        whileHover={{ boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Features
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          RypJaws is a free and open-source extension that is available for download from the Visual Studio Code Marketplace.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Elegant Color Scheme'}
            icon={<Icon as={FcTreeStructure} w={10} h={10} />}
            description={
              'Rypjaws theme offers a carefully chosen set of colors that are easy on the eyes and enhance your focus on the code.'
            }
            href={'#'}
          />
          <Card
            heading={'Syntax Highlighting'}
            icon={<Icon as={FcLineChart} w={10} h={10} />}
            description={
              'The theme provides syntax highlighting for various programming languages, making your code stand out and improving readability.'
            }
            href={'#'}
          />
          <Card
            heading={'Consistent Design'}
            icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
            description={
              'Rypjaws maintains a consistent design across different elements of the editor, ensuring a cohesive and visually pleasing experience'
            }
            href={'#'}
          />
          <Card
            heading={'Customized UI Components'}
            icon={<Icon as={FcBullish} w={10} h={10} />}
            description={
              'The extension modifies the appearance of various UI components, including the sidebar, activity bar, status bar, and more, to match the overall aesthetic of the theme'
            }
            href={'#'}
          />
          <Card
            heading={'Optimized for Productivity'}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={
              'Rypjaws is designed to help you stay productive with its carefully selected colors and contrast ratios, allowing you to work for long hours without straining your eyes.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
