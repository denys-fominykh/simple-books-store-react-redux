import React from 'react';

import './BookListItem.scss';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} className="book-cover__img" alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
