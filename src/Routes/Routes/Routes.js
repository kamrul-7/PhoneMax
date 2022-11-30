import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Error from '../../others/Error';
import Blog from '../../pages/Blog/Blog';
import Category from "../../pages/Categories/Category";
import AddProduct from '../../pages/DashBoard/AddProduct/AddProduct';
import AllUsers from '../../pages/DashBoard/AllUsers/AllUsers';
import ManageProduct from '../../pages/DashBoard/Dashbord/ManageUser/ManageProduct';
import Payment from '../../pages/DashBoard/Dashbord/Payment/Payment';
import MyProducts from '../../pages/DashBoard/MyProducts/MyProducts';
import ExtraSection from "../../pages/ExtraSection/ExtraSection";
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
                path: '/about',
                element: <Footer></Footer>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/review',
                element: <ExtraSection></ExtraSection>
            },
            {
                path: "/category/:id",
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`https://phonemax-server.vercel.app/category/${params.id}`)
            },
            {
                path: "/product",
                element: <Products></Products>,
                loader: () => fetch('https://phonemax-server.vercel.app/products')
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
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manageUser',
                element: <ManageProduct></ManageProduct>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },

        ]

    },

])
export default router;
