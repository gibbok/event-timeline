import { QUERY_KEY_EVENTS, getEvents } from "@/api/useGetEvents/useGetEvents";
import { EventTimelineContainer } from "@/components/views/EventTimeline/EventTimelineContainer";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([QUERY_KEY_EVENTS], () => getEvents(1, 10))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Event Timeline</title>
        <meta name="description" content="Event Timeline on production line" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventTimelineContainer />
    </>
  );
}
