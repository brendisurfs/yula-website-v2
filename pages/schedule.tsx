import { List, ListItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";

type Show = {
  id: number;
  Show_Dates: string;
  Show_Desc: string;
  Show_Title: string;
  show_link?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
};

type EventMap = {
  events: Show[];
};

const SchedulePage = ({ events }: EventMap) => {
  events.map((show: Show) => {
    console.log(show.Show_Title);
  });
  return (
    <Layout>
      <div>
        {events.map((show: Show) => (
          <h3 key={show.id}>{show.Show_Title}</h3>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res: Response = await fetch("http://localhost:1337/shows");
  const events: Show[] = await res.json();
  return {
    props: {
      events,
    },
  };
};

export default SchedulePage;
