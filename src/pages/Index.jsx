import { Container, VStack, Heading, Text, Box, Link, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwSnVsaWFuJTIwQnJvdWR5fGVufDB8fHx8MTcxNTQzNjMyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Julian Broudy" mb={4} mx="auto" />
          <Heading as="h1" size="xl">
            Julian Broudy
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Software Engineer
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate Software Engineer with a focus on creating efficient and user-friendly applications. With a background in computer science and extensive experience in full-stack development, I strive to bring innovative solutions to complex problems. My expertise includes modern JavaScript frameworks, cloud services, and building scalable web architectures.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Skills
          </Heading>
          <SimpleGrid columns={2} spacing={2}>
            <Text>JavaScript (ES6+)</Text>
            <Text>React & Redux</Text>
            <Text>Node.js</Text>
            <Text>Python</Text>
            <Text>Docker & Kubernetes</Text>
            <Text>AWS/GCP</Text>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Experience
          </Heading>
          <VStack align="stretch" spacing={4}>
            <Box>
              <Text fontWeight="bold">Senior Software Engineer - TechCorp</Text>
              <Text fontSize="sm" color="gray.500">
                Jan 2020 - Present
              </Text>
              <Text>Lead a team of developers in a project aimed at automating business processes, reducing manual work by 40%.</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Software Developer - WebSolutions</Text>
              <Text fontSize="sm" color="gray.500">
                Jun 2017 - Dec 2019
              </Text>
              <Text>Developed multiple high-traffic e-commerce websites using modern web technologies, significantly improving customer satisfaction.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <SimpleGrid columns={3} spacing={2}>
            <Link href="https://linkedin.com/in/julianbroudy" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
              LinkedIn
            </Link>
            <Link href="https://github.com/julianbroudy" isExternal>
              <Icon as={FaGithub} w={6} h={6} />
              GitHub
            </Link>
            <Link href="mailto:julian.broudy@example.com">
              <Icon as={FaEnvelope} w={6} h={6} />
              Email
            </Link>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
