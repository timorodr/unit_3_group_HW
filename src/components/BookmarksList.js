import React from 'react';

const BookmarksList = ({ bookmarks, onDeleteBookmark }) => {
  return (
    <div className="bookmarks-list">
      {bookmarks.map((bookmark) => (
        <div key={bookmark._id} className="bookmark-item">
          <h3>{bookmark.title}</h3>
          <p>{bookmark.url}</p>
          <button onClick={() => onDeleteBookmark(bookmark._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarksList;
