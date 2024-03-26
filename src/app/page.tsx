

import SpotlightCollectionContainer from "@/components/spotlightCollection/SpotlightCollectionContainer";
import TeamElementContainer from "@/components/teamElementComponents/TeamElementContainer";

export default function Home() {
  return (
    <>
    
    <main className={` flex min-h-screen flex-col items-center justify-between py-24  dark:bg-gray-900 bg-gray-100`}>
     <div className="">
      <TeamElementContainer />
      <SpotlightCollectionContainer />
     </div>
    </main>
    </>
  );
}
