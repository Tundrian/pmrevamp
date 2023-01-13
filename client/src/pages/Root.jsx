import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { getCreateProject } from "../pages/create-project";

export async function loader() {
  const createProject = await getCreateProject();
  return { createProject };
}

export default function Root() {
  const { createProject } = useLoaderData()
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
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
          {createProject.length ? (
            <ul>
              {createProject.map((x) => (
                <li key={x.id}>
                  <Link to={`createProjects/${x.id}`}>
                    {x.first || x.last ? (
                      <>
                        {x.first} {x.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {createProject.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No createProjects</i>
            </p>
          )}
          </nav>
        </div>
          <Outlet />
        <div id="detail"></div>
      </>
    );
  }