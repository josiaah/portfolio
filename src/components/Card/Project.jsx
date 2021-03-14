import { Flex, Box, Heading, Text, Stack, Image } from "@chakra-ui/react";
import proptypes from "prop-types";

function Project({ heading, content, image }) {

    return (
        <>
            <Flex
                direction={["column"]}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                mb={10}
                mr={10}
                ml={10}
            >
                <Heading
                    borderTopRadius="1px"
                    fontSize="2em"
                    py={2}
                    px={4}
                    height={24}
                    display="block"
                    alignItems="center"
                >
                    {heading}
                </Heading>
                <Flex
                    py={2}
                    px={4}
                    direction={["column"]}
                    height="full"
                >
                    <Text as="span" fontSize="2em">
                        {content}
                    </Text>
                </Flex>
                <Stack py={2} px={4}>
                    <Image
                        src={image}
                        alt="Past work"
                        shadow="dark-lg"
                        w="auto"
                        h="xl"
                    />
                </Stack>
            </Flex>
        </>
    )

}

Project.propTypes = {
    heading: proptypes.string.isRequired,
    content: proptypes.string.isRequired,
    image: proptypes.string.isRequired
}

export default Project;