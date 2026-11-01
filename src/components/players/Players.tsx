import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayerProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayerProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState<"available" | "selected">(
    "available",
  );
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);
  const handleButtonClick = (type: "available" | "selected") => {
    setButtonType(type);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">
          {buttonType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h2>
        <div className="">
          <button
            onClick={() => handleButtonClick("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonClick("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
