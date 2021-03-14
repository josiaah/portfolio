import Head from "next/head";
import Image from "next/image";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

import Project from "../components/Card/Project";
import { Flex, Grid, Stack, Box, Heading, Link } from "@chakra-ui/react";

import { NextSeo } from "next-seo";

export default function Projects() {
    return (
        <>
            <NextSeo title="Projects" />

            <DarkModeSwitch />

            <Container>

                <Heading><Link href="/">Want to go back home?</Link></Heading>

                <Flex justify="center" align="center" h="100%" mt={10}>
                    <Stack
                        direction="column"
                        align="center"
                        alignSelf="center"
                        maxWidth="100%"
                        spacing="14"
                        mt={4}
                    >
                        <Grid gap={6} templateRows="repeat(2, 1fr)">
                            <Project
                                content="I completely remade the site using nextjs and tailwind."
                                heading="PremiumSetups"
                                image="/ps.png" />

                            <Project
                                content="My own bot-list, I helped with it. My friend maintains it and updates it."
                                heading="Listcord"
                                image="/ld.png" />

                            <Project
                                content="I made this site for a craftingstore theme."
                                heading="Topstrix"
                                image="/tx.png" />

                            <Project
                                content="I helped a bit with the development of this widget."
                                heading="Discord Chat Widget"
                                image="/widget.png" />

                            <Project
                                content="I created my own version of Phatrol."
                                heading="Phatrol Electron Desktop"
                                image="/pha.png" />

                        </Grid>
                    </Stack>
                </Flex>
            </Container>
        </>
    );
}
