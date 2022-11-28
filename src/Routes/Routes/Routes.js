import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Error from '../../others/Error';
import Category from "../../pages/Categories/Category";
import ExtraSection from "../../pages/ExtraSection/ExtraSection";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import Footer from "../../shared/Footer/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                loader: () => fetch('http://localhost:5000/products')
            },


        ]
    },



])
export default router;
