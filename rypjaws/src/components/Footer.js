import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    Image,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import LogoWhite from "./../assets/RypJaws-white.png"
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Box>
              <Image src={LogoWhite} boxSize="60px" />
            </Box>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'https://github.com/MihirRajeshPanchal/rypjaws'}>Repository</Link>
            <Link href={'https://marketplace.visualstudio.com/items?itemName=MihirPanchal.rypjaws'}>Marketplace</Link>
            <Link href={'vscode:extension/MihirPanchal.rypjaws'}>Downloads</Link>
            <Link href={'https://github.com/MihirRajeshPanchal/rypjaws/discussions'}>Community</Link>
            <Link href={'https://github.com/MihirRajeshPanchal/rypjaws/graphs/contributors'}>Team</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2023 Rypjaws. All rights reserved </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Github'} href={'https://github.com/MihirRajeshPanchal'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/mihir-panchal-9b6677220/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/mihir_panchal_16/'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/MihirPa81993010'}>
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }