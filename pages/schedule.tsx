import { GetStaticProps } from "next";
import Layout from "../components/Layout";

interface Show {
  id: number;
  Show_Dates: string;
  Show_Desc: string;
  Show_Title: string;
  show_link?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

const SchedulePage = (events: Show[]) => {
  console.log(events);
  return (
    <Layout>
      <div>scheudle page</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res: Response = await fetch("http://localhost:1337/shows");
  const events = await res.json();
  return {
    props: {
      events: events,
    },
  };
};

export default SchedulePage;
