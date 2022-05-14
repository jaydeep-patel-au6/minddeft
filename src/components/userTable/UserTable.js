import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.09)",
  },
};

const UserTable = ({ currentItems }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="m-20">
      {currentItems && (
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-base font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        id
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        User Name
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Total Number of Trips
                      </th>
                      <th
                        scope="col"
                        className="text-base font-medium text-gray-900 px-6 py-4 text-left"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems?.map((data, idx) => (
                      <tr
                        key={idx}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {data?._id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data?.trips}
                        </td>
                        <td className="flex items-right justify-end text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={openModal}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Check Airline
                          </button>
                          {modalIsOpen && (
                            <div>
                              <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                              >
                                <button
                                  className="float-right"
                                  onClick={closeModal}
                                >
                                  <div className="h-5 w-5">
                                    <img
                                      className="object-cover"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE9VzNUwc_KmfXGBeP55CfPfWPXhEStieKA&usqp=CAU"
                                    />
                                  </div>
                                </button>
                                {data?.airline?.map((datamodal, index) => (
                                  <div
                                    key={index + Math.random()}
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                  >
                                    <p className="m-2"> id: {datamodal?.id}</p>
                                    <p className="m-2">
                                      name: {datamodal?.name}
                                    </p>
                                    <p className="m-2">
                                      country: {datamodal?.country}
                                    </p>
                                    <p className="m-2">
                                      slogan: {datamodal?.slogan}
                                    </p>
                                    <p className="m-2">
                                      head_quaters: {datamodal?.head_quaters}
                                    </p>
                                    <p className="m-2">
                                      website: {datamodal?.website}
                                    </p>
                                    <p className="m-2">
                                      established: {datamodal?.established}
                                    </p>
                                    <div className="ml-3">
                                      <img src={datamodal?.logo} />
                                    </div>
                                  </div>
                                ))}
                              </Modal>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
