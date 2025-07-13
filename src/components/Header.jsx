import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utlis/constants";
import { useContext } from "react";
import CartContext from "../utlis/CartContext";

const Header = () => {

  const {cartItem} = useContext(CartContext)


  const headerItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/cart", label: `Cart (${cartItem.length})`},
  ];

  return (
    <div className="border border-white shadow-gray-300 shadow-md flex justify-between">
      <Link to={"/"} className="w-4/5 cursor-pointer"><img
        src={HEADER_LOGO}
        alt="Food Ordering App Logo"
        className="h-20 md:h-28"
      />
      </Link>
      <ul className="w-5/6 md:w-2/6 flex items-center justify-around">
        {headerItems.map((item, index) => (
          <li key={index} className="cursor-pointer text-xs md:text-sm text-gray-500 font-extrabold hover:text-black">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
