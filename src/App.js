import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BookmarkList from './components/BookmarksList';
import BookmarkForm from './components/BookmarkForm';
import './App.css';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch('https://group-be-dev.onrender.com/bookmarks');
      const data = await response.json();
      setBookmarks(data);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };

  const addBookmark = async (newBookmark) => {
    try {
      const response = await fetch('https://group-be-dev.onrender.com/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookmark),
      });
      const data = await response.json();
      setBookmarks([...bookmarks, data]);
    } catch (error) {
      console.error('Error adding bookmark:', error);
    }
  };

  const deleteBookmark = async (id) => {
    try {
      await fetch(`https://group-be-dev.onrender.com/bookmarks/${id}`, {
        method: 'DELETE',
      });
      setBookmarks(bookmarks.filter((bookmark) => bookmark._id !== id));
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  const updateBookmark = async (id, updatedBookmark) => {
    try {
      const response = await fetch(`https://group-be-dev.onrender.com/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBookmark),
      });
      const data = await response.json();
      const updatedBookmarks = bookmarks.map((bookmark) =>
        bookmark._id === id ? data : bookmark
      );
      setBookmarks(updatedBookmarks);
    } catch (error) {
      console.error('Error updating bookmark:', error);
    }
  };

  const handleSubmit = (newBookmark) => {
    addBookmark(newBookmark);
  };

  return (
    <div className="App">
      <Header />
      <BookmarkForm onSubmit={handleSubmit} />
      <BookmarkList
        bookmarks={bookmarks}
        onDeleteBookmark={deleteBookmark}
        onUpdateBookmark={updateBookmark}
      />
    </div>
  );
};

export default App;
