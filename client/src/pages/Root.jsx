import { Outlet, Link } from "react-router-dom";
import '../index.css'

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1 className="text-red-500">React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search createProjects"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
          <ul>
            <li>
              <Link to={`createProject`}>Link 1</Link>
            </li>
            <li>
              <Link to={``}>Link 2</Link>
            </li>
          </ul>
          </nav>
        </div>
          <Outlet />
        <div id="detail"></div>
      </>
    );
  }