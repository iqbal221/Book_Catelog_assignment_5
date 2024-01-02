import { useState } from 'react';
// import { useGetBooksQuery } from '../../redux/features/book/bookApi';

const SidebarSearch = ({ setQuery }: any) => {
  // const [query, setQuery] = useState('');
  // console.log(query);
  // const { data } = useGetBooksQuery(query);
  // console.log(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   const getSearch = async () => {
  //     const res = await fetch(
  //       `https://server.alkaderia-enterprise.com/api/v1/products?searchTerm=${query}`
  //     );
  //     const data = await res.json();
  //     setProductSearch(data);
  //   };
  //   getSearch();
  // }, [setProductSearch, query]);

  return (
    <div>
      <div className="md:ms-8 md:m-0 md:pt-20 m-8">
        <div className="divider h-0.5 bg-white md:w-56 w-full"></div>
        <div className="form-control">
          <input
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder="Search here"
            className="input input-bordered rounded-none border-white w-full md:w-56 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;
