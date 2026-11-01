import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <div className="font-bold text-3xl my-10 text-center text-red-500">
        <h2>No selected Players</h2>
      </div>
    );
  }
  return (
    <div>
      <SelectedPlayerCard
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
        coin={coin}
        setCoin={setCoin}
      ></SelectedPlayerCard>
    </div>
  );
};

export default SelectedPlayers;
