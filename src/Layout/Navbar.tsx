import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setUserData, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem('token');
    setUserData('');
    navigate('/Signin');
  };

  console.log(userData);

  return (
    <header className={`flex items-center w-full bg-white`}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full md:ps-20 w-60 flex items-center">
            <img
              src="https://st2.depositphotos.com/1364916/6359/v/450/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg"
              alt="logo"
              className="w-20"
            />
            <h2 className="text-2xl text-yellow-500 font-bold">BOIGHOR</h2>
          </div>
          <div className="flex items-center justify-end w-full md:pe-24">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute z-10 right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block  lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/"
                  >
                    <Link className="py-3" to={''}>
                      All Books
                    </Link>
                  </ListItem>
                  {userData ? (
                    <>
                      <ListItem
                        navItemStyles="text-dark hover:text-primary"
                        NavLink="/#"
                      >
                        <Link className="py-3" to="/addNewBook">
                          Add New Book
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          onClick={handlelogout}
                          to="/Signup"
                          className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                        >
                          Logout
                        </Link>
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem>
                        <Link
                          to="/Signin"
                          className="py-3 text-base font-medium px-4 text-dark hover:text-primary"
                        >
                          Sign in
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          to="/Signup"
                          className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                        >
                          Sign Up
                        </Link>
                      </ListItem>
                    </>
                  )}
                </ul>
              </nav>
            </div>
            {/* <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              {!user && (
                
              )}

            
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }: any) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className={`flex  py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
