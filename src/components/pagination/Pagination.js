import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Loader from "react-js-loader";
import UserTable from "../userTable";
import axios from "axios";

const baseURL = "https://api.instantwebtools.net/v1/passenger?page=1&size=100";

function Pagination({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios.get(baseURL).then((response) => {
      setItems(response?.data?.data);
      setLoader(false);
    });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="pb-16 pt-10 fixed top-0 w-screen bg-white text-2xl font-bold text-black text-center">
        Passengers Details
      </div>
      <div className="mt-36">
        {loader ? (
          <div className="flex items-center justify-center mt-40">
            <div className={"item"}>
              <Loader
                type="spinner-cub"
                bgColor={"black"}
                title={"spinner-cub"}
                color={"#FFFFFF"}
                size={80}
              />
            </div>
          </div>
        ) : (
          <>
            <UserTable currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="< prev"
              previousClassName={`fixed top-10 left-20 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded text-center`}
              nextClassName={`fixed top-10 right-20 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded text-center`}
              renderOnZeroPageCount={null}
              pageLinkClassName={`m-4 px-6 py-4 border-2 rounded-xl`}
              activeLinkClassName={`bg-slate-300 font-bold`}
              className={`mb-20 flex flex-row items-center justify-center`}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Pagination;
