import React from "react";
import {
    useColorMode,
    Flex,
    Box,
    Button
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from '@/components/DarkModeSwitch';


const Container = ({ children }) => {

    const { colorMode } = useColorMode();
    
    const bgColor = {
        light: "white",
        dark: "#171717",
    }

    const color = {
        light: "black",
        dark: "white",
    }

    const StickyNav = styled(Flex)` 
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `;

    return(
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                maxHeight="256px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >       
                <Box>
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                        >
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                        >
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickyNav>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}                
            >
                {children}
            </Flex>
        </>
    )
}

export default Container;

