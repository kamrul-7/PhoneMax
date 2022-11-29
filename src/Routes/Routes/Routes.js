import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Error from '../../others/Error';
import Category from "../../pages/Categories/Category";
import AddProduct from '../../pages/DashBoard/AddProduct/AddProduct';
import AllUsers from '../../pages/DashBoard/AllUsers/AllUsers';
import MyProducts from '../../pages/DashBoard/MyProducts/MyProducts';
import ExtraSection from "../../pages/ExtraSection/ExtraSection";
import AdvertisedItem from '../../pages/Home/AdvertisedItem/AdvertisedItem';
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import Footer from "../../shared/Footer/Footer";
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                path: '/signup',
                element: <SignUp></SignUp>
            },


            {
                path: '/about',
                element: <Footer></Footer>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
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
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },

        ]

    },

])
export default router;
