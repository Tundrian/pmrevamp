import { Form } from "react-router-dom";

export default function CreateProject() {
  const createProject = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="createProject">
      <div>
        <img
          key={createProject.avatar}
          src={createProject.avatar || null}
        />
      </div>

      <div>
        <h1>
          {createProject.first || createProject.last ? (
            <>
              {createProject.first} {createProject.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite createProject={createProject} />
        </h1>

        {createProject.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${createProject.twitter}`}
            >
              {createProject.twitter}
            </a>
          </p>
        )}

        {createProject.notes && <p>{createProject.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ createProject }) {
  // yes, this is a `let` for later
  let favorite = createProject.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
