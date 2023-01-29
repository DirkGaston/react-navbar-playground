import { useContext } from "react";
import Context from "../context/Context";

import "../assets/css/Home.css";

function Home() {
  const { navbarOptions, setNavbarOptions, navbarStyles, setNavbarStyles } =
    useContext(Context);

  const handleOptionSubmit = (event) => {
    event.preventDefault();
    setNavbarOptions([
      ...navbarOptions,
      { title: event.target.title.value, route: event.target.route.value },
    ]);
  };

  const handleStylesChange = (event) => {
    setNavbarStyles({
      ...navbarStyles,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="title1">Welcome</h2>
      <h1 className="title2">💻 React Navbar Playground 💻 </h1>

      <div className="flex items-start justify-between inputContainer">
        <form onSubmit={handleOptionSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Add Option
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="route"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Route"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
        </form>
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Styles
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Background Color"
              onChange={(e) =>
                setNavbarStyles({ ...navbarStyles, background: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="route"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Text Color"
              onChange={(e) =>
                setNavbarStyles({ ...navbarStyles, text: e.target.value })
              }
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
