import SpotlightCollectionContainer from "@/components/spotlightCollection/SpotlightCollectionContainer";
import TeamElementContainer from "@/components/teamElementComponents/TeamElementContainer";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <>
     <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Inter:wght@400;700&display=swap" />
      </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="">
      <TeamElementContainer />
      <SpotlightCollectionContainer />
     </div>
    </main>
    </>
  );
}
