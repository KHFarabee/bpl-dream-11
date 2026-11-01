import type { Dispatch, SetStateAction } from "react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { MdSportsCricket } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import type { Iplayer } from "../../types/player";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IPlayerCardProps) => {
  const isSelected = selectedPlayers.some(
    (p) => p.playerName === player.playerName,
  );

  const handleSelectPlayer = () => {
    if (isSelected) {
      toast.info(`${player.playerName} is already selected!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const newPrice = coin - player.price;
    if (newPrice >= 0) {
      setCoin(newPrice);
      toast.success(`${player.playerName} has been purchased!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setSelectedPlayers([...selectedPlayers, player]);
    } else {
      toast.warning("Not enough coin to make this purchase!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <div className="relative h-56 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-semibold text-base-content shadow-sm backdrop-blur">
            {player.playerType}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <FaUser className="text-sm" />
          <h2 className="text-xl font-bold tracking-wide">
            {player.playerName}
          </h2>
        </div>
      </div>

      {/* Player Details */}
      <div className="space-y-5 p-5">
        {/* Country */}
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <FaMapMarkerAlt className="text-primary" />
          <span>{player.origin}</span>
        </div>

        {/* Playing Styles */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-base-200/70 p-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-base-content/50">
              Batting
            </p>
            <p className="text-sm font-semibold">
              {player.battingStyle || "N/A"}
            </p>
          </div>

          <div className="rounded-xl bg-base-200/70 p-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-base-content/50">
              Bowling
            </p>
            <p className="text-sm font-semibold">
              {player.bowlingStyle || "N/A"}
            </p>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Price & Action */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium text-base-content/50">
              Player Price
            </p>
            <p className="text-2xl font-extrabold text-primary">
              ${Number(player.price).toLocaleString("en-US")}
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary rounded-xl px-4 shadow-sm transition-all hover:shadow-md"
            onClick={handleSelectPlayer}
            disabled={isSelected}
          >
            <MdSportsCricket className="text-lg" />
            {isSelected ? "Selected" : "Select"}
            <HiOutlineArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
