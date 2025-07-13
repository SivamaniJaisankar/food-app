const About = () => {
  return (
    <div className="border border-gray-300 shadow-md shadow-gray-400 rounded-md w-11/12 sm:w-6/12 mx-auto my-10 p-5">
      <h2 className="font-extrabold text-gray-600 text-lg sm:text-xl my-5">
        About Us
      </h2>
      <p className="font-semibold text-sm sm:text-md text-gray-600 my-5">
        An online platform where you can browse a variety of restaurants, view
        their menus, and add items to your cart.
      </p>
      <h2 className="font-extrabold text-gray-600 text-lg sm:text-xl my-5">
        App Highlights
      </h2>
      <p className="font-semibold text-sm sm:text-md text-gray-600 my-5">
        You can search for restaurants, filter them by delivery time or ratings,
        and explore detailed menus.
        <ul className="list-disc ml-6 text-sm text-gray-600">
          <li>Built with React + Tailwind CSS</li>
          <li>State management using Context API</li>
          <li>Routing with React Router</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
