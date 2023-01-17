import { Outlet, Link } from "react-router-dom";
import '../index.css'

export default function Root() {
    return (
      <>
        <div id="sidebar" className="w-full py-5 mb-10 flex flex-row justify-between px-10 bg-slate-700 shadow-xl">
          <h1 className="text-5xl text-white font-thin">PM Revamp</h1>
          <div>
            <form id="search-form" role="search" className="flex justify-center">            
              <input
                id="q"
                aria-label="Search createProjects"
                placeholder="Search"
                type="search"
                name="q"
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mx-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Search</button>
            </form>
          </div>
          <nav>
          <ul className="flex justify-between py-2">
            <li>
              <Link to={`createProject`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Project</Link>
            </li>
            <li>
              <Link to={`configureModules`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Configure Module</Link>
            </li>
          </ul>
          </nav>
        </div>
          <Outlet />
        <div id="detail"></div>
      </>
    );
  }