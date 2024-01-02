/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import Loading from './Loading';
import Bookdetailed from '../pages/Books/BookDetailed';

const AllBooksCard = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log(data);

  return (
    <>
      <section className="pt-20 lg:pt-[60px] pb-10 lg:pb-20 h-full bg-[#F3F4F6] lg:px-28">
        <h1 className="text-5xl text-primary font-bold text-center headline lg:pb-10">
          Books Catelog
        </h1>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
          {isLoading ? (
            <Loading></Loading>
          ) : (
            data?.data?.map((book: any) => {
              return (
                <SingleCard
                  key={book._id}
                  image={book.image}
                  CardTitle={book.name}
                  titleHref="/#"
                  btnHref={`/bookDetailed/${book._id}`}
                  Button="View Details"
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default AllBooksCard;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}: any) => {
  return (
    <div>
      {/*  */}
      <div className="overflow-hidden bg-white rounded-lg hover:drop-shadow-2xl hover:scale-[102%] transition-all cursor-pointer">
        <img src={image} alt="" className="w-full h-64" />
        <div className="p-3 text-center sm:p-9 md:px-3 md:py-4">
          <h3>
            <a
              href={titleHref ? titleHref : '/#'}
              className="mb-4 block text-md font-semibold text-dark hover:text-primary md:text-md"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed mb-7 text-body-color">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : '#'}
              className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </div>
  );
};
