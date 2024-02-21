import { useLoaderData, Form } from "react-router-dom";
import "./Landing.css";
import { useState } from "react";

const Landing = () => {
  const bookmarks = useLoaderData();

  // keep track of the bookmarks being edited
  const [editFormData, setEditFormData] = useState({});

  // Handle change in form inputs
  const handleEditChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEditFormData = {
      ...editFormData,
      [id]: {
        ...editFormData[id],
        [name]: value,
      },
    };
    setEditFormData(updatedEditFormData);
  };

  return (
    <div>
      <div className="Section-header">
        <h3>Create a Bookmark</h3>
      </div>

      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark's title" />
        <input type="input" name="url" placeholder="bookmark's url" />
        <input type="submit" value="Create Bookmark" />
      </Form>

      <br />
      <br />
      <div className="Section-header">
        <h3>Saved Bookmarks</h3>
      </div>
      {bookmarks.map((bookmark) => {
        return (
          <div key={bookmark._id} className="bookmark">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              <h1>{bookmark.title}</h1>
            </a>

            <Form action={`/delete/${bookmark._id}`} method="post">
              <input type="submit" value="Delete" />
            </Form>

            <Form action={`/update/${bookmark._id}`} method="post">
              <input
                type="input"
                name="title"
                placeholder="bookmark's title"
                defaultValue={editFormData[bookmark._id]?.title || bookmark.title}
                onChange={(e) => handleEditChange(e, bookmark._id)}
              />
              <input
                type="input"
                name="url"
                placeholder="bookmark's url"
                defaultValue={editFormData[bookmark._id]?.url || bookmark.url}
                onChange={(e) => handleEditChange(e, bookmark._id)}
              />
              <input type="submit" value="Update" />
            </Form>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
