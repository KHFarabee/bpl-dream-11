import { BiSolidDollarCircle } from "react-icons/bi";
import Logo from "../assets/logo.png";
const Nav = ({ coin }: { coin: number }) => {
  return (
    <div>
      <nav className="bg-red-100">
        <div className="container mx-auto flex items-center justify-between">
          <img src={Logo} alt="logo" />
          <ul className="flex gap-4 items-center">
            <li>Home</li>
            <li>Fixture</li>
            <li>Players</li>
            <li>Schedule</li>
          </ul>
          <h2 className="font-bold text-3xl  flex items-center gap-1 text-gray-700">
            <BiSolidDollarCircle />
            {coin}
          </h2>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
