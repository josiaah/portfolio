import Head from "next/head";
import Image from "next/image";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Stack, Center, Box, Flex, Heading, Button, Link} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josiah Rose - Home</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
      </Head>

      <DarkModeSwitch/>
      
      <Container>
      <Flex justify="center" align="center" h="full">
        <Stack
          direction={["column", "row"]}
          py="8"
          px="4"
          align="center"
          alignSelf="center"
          maxWidth="100%"
          textAlign="center"
          spacing="12"
        >
          <Box
            boxShadow="xl"
            w="300"
            h="auto"
            borderRadius="xl"
            overflow="hidden"
          >
            <Image
              src="/profile.png"
              alt=""
              layout="fixed"
              width={300}
              height={300}
              objectFit="cover"
              priority={true}
            />
          </Box>

          <Box>
            <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]}>
              Josiah Rose
            </Heading>
            <Heading as="h2" mb={2} fontSize={["24px"]}>
              Full-stack Web Developer
            </Heading>
            
            <Stack direction="row">
                <Link href="https://github.com/josiaah"><Button rightIcon={<i class="fab fa-github"/>} 
                variant="solid" 
                color="blue.600">
                Github</Button></Link>

                <Link href="https://twitter.com/josiahroses"><Button rightIcon={<i className="fab fa-twitter"/>} 
                variant="solid" 
                color="blue.600">
                Twitter</Button></Link>

                <Link href="/projects"><Button rightIcon={<i className="fas fa-project-diagram"/>} 
                variant="solid" 
                color="blue.600">
                Projects</Button></Link>
            </Stack>
          </Box>
        
        </Stack>
      </Flex>
      </Container>
    </>
  );
}
