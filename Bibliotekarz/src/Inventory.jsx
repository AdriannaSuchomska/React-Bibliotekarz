import React from "react";
import { Book } from "./Book.jsx";


export const Inventory = ({ books }) => {
    const bookComponents = books.map(book => {
        return (
            <Book
                key={book.title}
                title={book.title}
                author={book.author}
                publicationDate={book.publicationDate}
                genre={book.genre}
                audience={book.audience}
            />
        );
    });

    return (
        <React.Fragment>
            {books.length === 0 ? <h3>Brak książek</h3> : bookComponents}
        </React.Fragment>
    )
};