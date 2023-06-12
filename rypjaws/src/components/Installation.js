import { Box, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const InstallationSteps = () => {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Box p={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Installation Steps
          </Heading>
          <VStack spacing={4} align="start">
            <InstallationStepCard
              step="Step 1"
              description="Launch Visual Studio Code."
            />
            <InstallationStepCard
              step="Step 2"
              description="Open the Extensions view by clicking on the square icon in the left sidebar or by pressing Ctrl+Shift+X (Cmd+Shift+X on macOS)."
            />
            <InstallationStepCard
              step="Step 3"
              description="Search for 'Rypjaws' in the Extensions Marketplace."
            />
            <InstallationStepCard
              step="Step 4"
              description="Click on the 'Install' button for the Rypjaws VS Code Theme Extension."
            />
            <InstallationStepCard
              step="Step 5"
              description="Once installed, click on the 'Reload' button to activate the theme."
            />
          </VStack>
        </Box>
      </Flex>
    );
  };
  

const InstallationStepCard = ({ step, description }) => {
  return (
    <Box
      bg="white"
      shadow="md"
      rounded="md"
      p={4}
      width="100%"
      borderWidth="1px"
      borderColor="gray.200"
      display="flex"
      alignItems="center"
      fontSize="lg"
      _hover={{
        bg: "gray.100",
      }}
    >
      <Box
        mr={2}
        color="green.500"
        boxSize={6}
        as={CheckCircleIcon}
      />
      <Flex direction="column">
        <Text fontWeight="bold" fontSize="xl" mb={2}>
          {step}
        </Text>
        <Text>{description}</Text>
      </Flex>
    </Box>
  );
};

export default InstallationSteps;
