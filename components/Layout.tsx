import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import AdaptiveNavbar from "./AdaptiveNavbar";
import Footer from "./Footer";
import { ReactElement } from "react";

// DefaultProps Interface - handles our types for our layouts props.
interface DefaultProps {
    title: string;
    description: string;
    keywords: string;
    children: ReactElement | ReactElement[];
}

const Layout = ({ title, description, keywords, children }: DefaultProps) => {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="public/favicon.ico" />
                <title>{title}</title>
                <meta title="description" content={description} />
                <meta
                    title="created by Brendan Prednis"
                    content="brendancreates.dev"
                />
            </Head>

            <AdaptiveNavbar />
            {children}
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "Yula | The official website for electronic musician Yula.",
    description: "the center for all things Yula.",
    keywords: "music, electronic, Yula, space, electronic-music",
};

export default Layout;
