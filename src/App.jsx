import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HandleError from "./components/HandleError";
import { lazy } from "react";
import { CartProvider } from "./utlis/CartContext";
import Cart from "./components/Cart"

const About = lazy(()=> import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu=lazy(()=> import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/res/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "*",
        element: <HandleError />
      }
    ],
    errorElement: <HandleError />
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
