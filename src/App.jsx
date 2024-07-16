import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <>
    <div className=" w-[768px]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/portfolio",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <p>Projects</p>,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
