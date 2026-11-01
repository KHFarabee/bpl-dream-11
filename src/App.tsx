import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import Players from "./components/players/Players";
import type { Iplayer } from "./types/player";

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error(`Failed to load player data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

function App() {
  const [playersPromise] = useState(() => playerFetch());
  const [coin, setCoin] = useState(1500);

  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <ErrorBoundary>
        <Suspense fallback={<p className="text-center my-10 font-medium text-lg">Loading....</p>}>
          <Players
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
          ></Players>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
