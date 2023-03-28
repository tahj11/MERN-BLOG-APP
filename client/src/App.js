import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowBlogs from "./components/ShowBlogs/ShowBlogs";
import Navigation from "./components/navbar/Navigation";
import CreateBlog from "./components/createBlog/CreateBlog";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Footer from "./components/Footer/Footer";
import Tech from "./pages/tech/Tech";
import Fashion from "./pages/fashion/Fashion";
import Health from "./pages/health/Health";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <ShowBlogs />
        <Footer />
      </div>
    ),
  },
  {
    path: "create-blog",
    element: (
      <div>
        <Navigation />
        <CreateBlog />,
        <Footer />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <Login />,
      </div>
    ),
  },
  {
    path: "register",
    element: (
      <div>
        <Registration />,
      </div>
    ),
  },
  {
    path: "tech",
    element: (
      <div>
        <Navigation />
        <Tech />
        <Footer />
      </div>
    ),
  },
  {
    path: "fashion",
    element: (
      <div>
        <Navigation />
        <Fashion />
        <Footer />
      </div>
    ),
  },
  {
    path: "health",
    element: (
      <div>
        <Navigation />
        <Health />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
