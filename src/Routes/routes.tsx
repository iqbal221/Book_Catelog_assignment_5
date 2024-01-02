import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from '../pages/SignupAndSignin/Signup';
import Signin from '../pages/SignupAndSignin/Signin';
import Home from '../pages/Home/Home';
import Bookdetailed from '../pages/Books/BookDetailed';
import AddBookModal from '../pages/Books/AddBook';
import AddBook from '../pages/Books/AddBook';
import UpdateBook from '../pages/Books/UpdateBook';
import PrivateRoute from './PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/bookDetailed/:id',
        element: <Bookdetailed></Bookdetailed>,
      },
      {
        path: '/addNewBook',
        element: <AddBook></AddBook>,
      },

      {
        path: '/updateBook/:id',
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
