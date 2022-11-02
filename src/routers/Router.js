import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import About from "../Pages/about/About";
import Blog from "../Pages/blog/Blog";
import Home from "../Pages/home/Home";
import Services from "../Pages/services/Services";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

export default routers