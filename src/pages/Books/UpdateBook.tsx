import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../../redux/features/book/bookApi';

const UpdateBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);

  console.log(book?.data?.id);

  const navigate = useNavigate();

  const handleUpdateProduct = async (data: any) => {
    const name = data.title;
    const writer = data.writer;
    const genre = data.genre;
    const date = data.date;

    if (!name) {
      return toast.error('please fill up title');
    } else if (!writer) {
      return toast.error('please fill up author');
    } else if (!genre) {
      return toast.error('please fill up genre');
    } else if (!date) {
      return toast.error('please fill up date');
    }

    const bookInfo = {
      name,
      writer,
      genre,
      date,
    };

    fetch(`http://localhost:5000/api/v1/book/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(bookInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          toast.success('Book Updated successfully!');
          navigate('/');
        } else {
          console.log('Book do not update');
        }
      });
  };

  return (
    <div>
      {' '}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900 dark:text-gray-300">
              Book Details Information
            </h2>
            <form
              onSubmit={handleSubmit(handleUpdateProduct)}
              action="#"
              method="post"
              className=""
            >
              <div className="container px-4 mx-auto"></div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  defaultValue={book?.data?.name}
                  placeholder="Title"
                  {...register('title')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  defaultValue={book?.data?.writer}
                  placeholder="Author"
                  {...register('writer')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  defaultValue={book?.data?.genre}
                  placeholder="Genre"
                  {...register('genre')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  defaultValue={book?.data?.date}
                  placeholder="Publication Date"
                  {...register('date')}
                />
              </div>

              <div className="mt-7">
                <div className="flex justify-start space-x-2">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateBook;
