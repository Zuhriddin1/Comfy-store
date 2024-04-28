import { useState } from "react";

function Products() {
  const [price, setPrice] = useState(10000);
  const [checked, setChecked] = useState(false);
``  return (
    <>
      <div className="w-3/5 mx-auto mt-20">
        <div className="filter p-4 bg-primary-content rounded-md">
          <div className="filter-top flex justify-between gap-3">
            <div className="field flex flex-col gap-1 w-1/4 cursor-pointer">
              Search Product
              <label htmlFor="Search" className="cursor-pointer"></label>
              <input
                type="search"
                id="Search"
                className="input input-bordered w-full input-sm"
              />
            </div>

            <div className="field flex flex-col gap-1 w-1/4 cursor-pointer">
              Select Category
              <label htmlFor="Search" className="cursor-pointer"></label>
              <select className="select select-sm select-bordered w-full max-w-xs">
                <option selected>all</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>

            <div className="field flex flex-col gap-1 w-1/4 cursor-pointer">
              Select Company
              <label htmlFor="Search" className="cursor-pointer"></label>
              <select className="select select-sm select-bordered w-full max-w-xs">
                <option selected>all</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>

            <div className="field flex flex-col gap-1 w-1/4 cursor-pointer">
              Sort By
              <label htmlFor="Search" className="cursor-pointer"></label>
              <select className="select select-sm select-bordered w-full max-w-xs">
                <option selected>a-z</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="filter-bottom flex justify-between gap-3 mt-8 items-center">
            <div className="range-input w-1/4">
              <div className="range-title flex justify-between items-center mb-1">
                <p>Select Price</p>
                <p>${price}</p>
              </div>
              <div className="range-field">
                <input
                  type="range"
                  min={0}
                  max="10000"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="range range-primary"
                />
              </div>
              <div className="range-max-min flex justify-between items-center mb-1">
                <span className="font-bold">0</span>
                <span className="font-bold">Max : $1,000.00</span>
              </div>
            </div>
            <div className="shipping w-1/4">
              <label className="label cursor-pointer flex flex-col gap-2">
                <span className="label-text">Free shipping</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                  checked={checked}
                  onChange={(e) => {
                    setChecked(e.target.checked);
                  }}
                />
              </label>
            </div>
            <div className="search w-1/4">
              <button className="btn w-full btn-primary">Search</button>
            </div>
            <div className="reset w-1/4">
              <button className="btn w-full btn-secondary">Reset</button>
            </div>
          </div>
        </div>
        <div className="products"></div>
      </div>
    </>
  );
}
export default Products;
