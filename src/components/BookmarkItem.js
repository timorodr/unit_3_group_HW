import React from 'react';

const BookmarkItem = ({ bookmark }) => {
  return (
    <div>
      <h3>{bookmark.title}</h3>
      <p>{bookmark.url}</p>
    </div>
  );
};

export default BookmarkItem;
