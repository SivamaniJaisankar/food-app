const Header = () => {
  const headerItems = ["Home", "About", "Contact", "Cart"];

  return (
    <div className="border border-white shadow-amber-200 shadow-md h-24 flex justify-between">
      <img
        src="https://images-platform.99static.com/CiMFXt_8HNFWxH1qqjgOlOeLbwA=/144x84:1008x948/500x500/top/smart/99designs-contests-attachments/117/117148/attachment_117148140"
        alt="HEADER LOGO"
        className="shadow-amber-200 shadow-md max-w-4/5 cursor-pointer"
      />
      <ul className="shadow-amber-200 shadow-md w-2/6 flex items-center justify-around">
        {headerItems.map((item, index) => (
          <li key={index} className="cursor-pointer font-sans">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
