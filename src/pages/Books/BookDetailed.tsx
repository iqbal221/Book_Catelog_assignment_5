import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '../../redux/features/book/bookApi';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const Bookdetailed = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);

  const [deleteBook, response] = useDeleteBookMutation(book?.data?._id);

  const handleDeleteBook = () => {
    if (userData) {
      Swal.fire({
        title: 'Do you want to delete confirm?',
        showCancelButton: true,
        confirmButtonText: 'Ok',
      }).then((result: { isConfirmed: any; isDenied: any }) => {
        if (result.isConfirmed) {
          deleteBook(book?.data?._id);
          console.log(response);
          toast.success('Book deleted successfully');
          navigate('/');
        } else if (result.isDenied) {
          toast.error('Delete failed');
        }
      });
    } else {
      navigate('/signin');
    }
  };

  return (
    <>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={book?.data?.image}
                    alt="image"
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src={book?.data?.image}
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src={book?.data?.image}
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src={book?.data?.image}
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src={book?.data?.image}
                        alt=""
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {book?.data?.name}
                  </h2>
                  <div className="flex items-center mb-6">
                    <ul className="flex mr-2">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs dark:text-gray-400 ">
                      (2 customer reviews)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>$1000.99</span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $1500.99
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300 ">
                    7 in stock
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                    Author:
                  </h2>
                  <h3>{book?.data?.writer}</h3>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                    Genre:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {book?.data?.genre}
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="text-xl font-bold dark:text-gray-400 me-3">
                    Publication Date:
                  </h2>
                  <h3>{book?.data?.date}</h3>
                </div>
                <div className="flex items-center w-32 mb-8 ">
                  <label className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400 me-3">
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div>
                </div>

                <div className="flex  items-center mt-16 ">
                  <div className="w-56 px-2 mb-4 lg:w-64 lg:mb-0">
                    <button className="flex items-center justify-center w-full p-4 text-white border bg-blue-600 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      <Link to={`/updateBook/${book?.data?._id}`}>
                        Edit Book
                      </Link>
                    </button>
                  </div>
                  <div className="w-56 px-2 mb-4 lg:mb-0 lg:w-64">
                    <button
                      onClick={() => handleDeleteBook()}
                      className="flex items-center justify-center w-full p-4 text-white border bg-red-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Delete Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookdetailed;
