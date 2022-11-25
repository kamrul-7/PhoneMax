import Category from "../../pages/Categories/Category";
import DisplayError from "../../pages/DisplayError/DisplayError";
import ExtraSection from "../../pages/ExtraSection/ExtraSection";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import Footer from "../../shared/Footer/Footer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/about',
                element: <Footer></Footer>
            },
            {
                path: '/review',
                element: <ExtraSection></ExtraSection>
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/product",
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/product')
            },

        ]
    }
],
    {
        path: '/dashboard',
        element: <PrivateRoute></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [


        ]
    })

export default router;
