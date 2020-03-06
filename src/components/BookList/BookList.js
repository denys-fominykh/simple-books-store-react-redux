import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';

export default class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return <li><BookListItem book={book} /></li>
        })}
      </ul>
    )
  }
}