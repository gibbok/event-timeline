import { EventTimelineContainer } from "@/components/apps/EventTimeline/EventTimelineContainer";
import Head from "next/head";

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
