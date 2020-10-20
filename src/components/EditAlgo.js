import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const Editemployee = route => {
  let history = useHistory();
  const { algo, editAlgo } = useContext(GlobalContext);
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    language: "",
    rating: "",
  });
  const currentUserId = route.match.params.id;

  useEffect(() => {
    const algoId = currentUserId;
    const selectedUser = algo.find(emp => emp.id === parseInt(algoId));
    setSeletedUser(selectedUser);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    editAlgo(selectedUser);
    history.push("/");
  };

  const handleOnChange = (userKey, value) =>
    setSeletedUser({ ...selectedUser, [userKey]: value });

  if (!selectedUser || !selectedUser.id) {
    alert("ID mismatch");
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of Algorithm
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={e => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Name of Algorithm"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.language}
              onChange={e => handleOnChange("language", e.target.value)}
              type="text"
              placeholder="Enter language"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.rating}
              onChange={e => handleOnChange("rating", e.target.value)}
              type="text"
              placeholder="Enter rating"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Algorithm
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};