import AllBooksCard from '../../components/AllBooksCard';

function AllBooks({ query }: any) {
  return (
    <div>
      <AllBooksCard query={query}></AllBooksCard>
    </div>
  );
}

export default AllBooks;
