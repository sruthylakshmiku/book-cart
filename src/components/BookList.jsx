import React from 'react';

const books = [
  {
    id: 1,
    title: "Book One",
    author: "Jane Austen",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1kRj1nnXtv-dZUhSj2n_xUDvtQFf5MzNXXcZouIU1FU_hY4A",

  },
  {
  id: 2,
title: "Book Two",
author: " Miguel de Cervantes",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v",
  },
  {
    id: 3,
    title: "Book Three",
    author: "John Ronald Reuel",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6FEJpNuc1D_2JDV6xjkKWX_hBCGnYyLVwUwlTWEAuN-Co_G9", 
  },
];

const BookList = ({ addToCart }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ margin: '10px 0' }}>
            <img src={book.imageUrl} alt={book.title} style={{ width: '250px', marginRight: '150px' }} />
            <span>{book.title} by {book.author}</span>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
