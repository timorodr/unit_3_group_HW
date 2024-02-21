import { useLoaderData, Form } from "react-router-dom";
import "./Landing.css";
import { useState } from "react";

const Landing = () => {
  const bookmarks = useLoaderData();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="Section-header">
        <h3>Create a Bookmark</h3>
      </div>

      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark's title" />
        <input type="input" name="url" placeholder="bookmark's url" />
        <input type="submit" value={`Create Bookmark`} />
      </Form>

      <br />
      <br />
      <div className="Section-header">
        <h3>Saved Bookmarks</h3>
      </div>
      {bookmarks.map((bookmark, i) => {
        return (
          <div key={bookmark._id} className="bookmark">
            <a href={bookmark.url} target="_blank">
              <h1>{bookmark.title}</h1>
            </a>

            <Form action={`/delete/${bookmark._id}`} method="post">
              <input type="submit" value={`Delete`} />
            </Form>

            <Form action={`/update/${bookmark._id}`} method="post">
              <input
                type="input"
                name="url"
                placeholder="bookmark's url"
                value={bookmark.title}
              />
              <input
                type="input"
                name="title"
                placeholder="bookmark's title"
                value={bookmark.url}
              />
              <input type="submit" value={`Update`} />
            </Form>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
