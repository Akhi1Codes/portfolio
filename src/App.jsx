import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
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
        path: "/portfolio/home",
        element: <Home />,
      },
      {
        path: "/portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/portfolio/about",
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
