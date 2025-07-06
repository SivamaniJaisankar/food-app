import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utlis/constants";

const Header = () => {
  const headerItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <div className="border border-white shadow-gray-300 shadow-md flex justify-between">
      <img
        src={HEADER_LOGO}
        alt="HEADER LOGO"
        className="max-w-4/5 h-24 cursor-pointer"
      />
      <ul className="w-2/6 flex items-center justify-around">
        {headerItems.map((item, index) => (
          <li key={index} className="cursor-pointer text-sm text-gray-500 font-extrabold">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
