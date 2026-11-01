import type { Dispatch, SetStateAction } from "react";
import { TbTrash } from "react-icons/tb";
import type { Iplayer } from "../../types/player";

interface ISelectedPlayerCardProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}
const SelectedPlayerCard = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayerCardProps) => {
  const handleRemovePlayer = (player: Iplayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer: Iplayer) =>
        selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(restPlayers);
    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };

  return (
    <div>
      Selected Players
      <div className="grid grid-cols-1 gap-7 mt-6 ">
        {selectedPlayers.map((player: Iplayer) => {
          return (
            <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
              <div className="flex gap-2">
                <img
                  src={player.playerImg}
                  alt=""
                  className="h-[40px] w-[40px]"
                />
                <div>
                  <h2 className="font-bold text-2xl">{player.playerName}</h2>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <span
                className="text-red-500 font-bold text-2xl hover:cursor-pointer"
                onClick={() => handleRemovePlayer(player)}
              >
                <TbTrash />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
