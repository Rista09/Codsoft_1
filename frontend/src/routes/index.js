import {  createHashRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassowrd from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import OrderBill from '../pages/OrderBill';
import Order from '../pages/Order';
import AllOrder from '../pages/All-orders';

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassowrd/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'product-category',
                element: <CategoryProduct/>
            },
            {
                path: 'product/:id', 
                element: <ProductDetails/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'search',
                element: <SearchProduct/>
            },
            {
                path: 'bill',
                element: <OrderBill/>
            },
            {
                path: 'orders',
                element: <Order/>
            },
            {
                path: 'admin-panel',
                element: <AdminPanel/>,
                children: [
                    {
                        path: 'all-users',
                        element: <AllUsers/>
                    },
                    {
                        path: 'all-products',
                        element: <AllProducts/>
                    },
                    {
                        path: 'all-orders',
                        element: <AllOrder/>
                    },
                ]
            },
        ]
    }
]);

export default router;
