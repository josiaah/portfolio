import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <ColorModeProvider
                options={{
                    useSystemColorMode: true,
                }}
            >
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default MyApp
