import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleAddProduct = async (data: any) => {
    const name = data.title;
    const writer = data.writer;
    const genre = data.genre;
    const date = data.date;
    const image = data.image[0];

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
      image,
    };

    console.log(bookInfo);

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=dbde5cf8f28597585ced6c0d97da6cc8`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        console.log(imageData);
        bookInfo.image = imageData.data.url;
        if (imageData.success) {
          fetch(`http://localhost:5000/api/v1/book/create-book`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(bookInfo),
          })
            .then(res => res.json())
            .then(data => {
              if (data.success === true) {
                toast.success('Book added successfully!');
                navigate('/');
              } else {
                console.log('Book do not added');
              }
            });
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
              onSubmit={handleSubmit(handleAddProduct)}
              action="#"
              method="post"
              className=""
            >
              <div className="container px-4 mx-auto"></div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  placeholder="Title"
                  {...register('title')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  placeholder="Author"
                  {...register('writer')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  placeholder="Genre"
                  {...register('genre')}
                />
              </div>
              <div className="mb-6">
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                  type="text"
                  placeholder="Publication Date"
                  {...register('date')}
                />
              </div>

              <div className="mb-6 ">
                <label className="block pt-2">
                  <span className="sr-only ">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-700 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                    {...register('image')}
                  />
                </label>
              </div>

              <div className="mt-7">
                <div className="flex justify-start space-x-2">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                  >
                    Submit
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

export default AddBook;
