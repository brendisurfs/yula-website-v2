import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import _Layout from "../components/Layout";

const MusicPage = () => {
    return (
        <Layout>
            <p>This is the music page</p>
        </Layout>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("");

    return {
        props: {},
    };
};

export default MusicPage;
