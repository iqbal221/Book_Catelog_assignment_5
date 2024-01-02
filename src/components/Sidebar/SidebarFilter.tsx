import React, { useState } from 'react';

const SidebarFilter = () => {
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleSelectChange = (event: any) => {
  //   const selectedValue = event.target.value;
  //   setSelectedOption(selectedValue);
  // };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   const res = await fetch(
  //     `https://server.alkaderia-enterprise.com/api/v1/products?category=${selectedOption}`
  //   );
  //   const data = await res.json();
  //   setProductFilter(data);
  // };

  // const Products = [];
  // Products?.push({ category: 'Category' }, ...products?.data);

  // const ProductCategory: any[] = [];

  // for (let product of Products) {
  //   ProductCategory.push(product.category);
  // }

  // let uniqueProductCategory = [];

  // for (let i = 0; i < ProductCategory.length; i++) {
  //   if (uniqueProductCategory.indexOf(ProductCategory[i]) === -1) {
  //     uniqueProductCategory.push(ProductCategory[i]);
  //   }
  // }

  return (
    <div>
      <div className="md:ms-8 md:mx-0 mx-8">
        <h2 className="text-amber-400 text-xl text-black md:pt-16  me-3">
          By Genre
        </h2>

        <form>
          <div className="form-control">
            {/* <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="md:w-56 w-full p-2  me-5"
            >
              {uniqueProductCategory?.map((category: any) => {
                return (
                  <>
                    <option value={category}>{category}</option>
                  </>
                );
              })}
            </select> */}
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="border border-gray-400 hover:bg-cyan-400 hover:text-gray-800 hover:border-cyan-400 text-gray-400 md:w-56 w-full py-1 md:mt-5 mt-6"
            >
              Result
            </button>
          </div>
        </form>

        <h2 className="text-amber-400 text-xl text-black md:pt-16  me-3">
          By Date
        </h2>

        <form>
          <div className="form-control">
            {/* <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="md:w-56 w-full p-2  me-5"
            >
              {uniqueProductCategory?.map((category: any) => {
                return (
                  <>
                    <option value={category}>{category}</option>
                  </>
                );
              })}
            </select> */}
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="border border-gray-400 hover:bg-cyan-400 hover:text-gray-800 hover:border-cyan-400 text-gray-400 md:w-56 w-full py-1 md:mt-5 mt-6"
            >
              Result
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SidebarFilter;
