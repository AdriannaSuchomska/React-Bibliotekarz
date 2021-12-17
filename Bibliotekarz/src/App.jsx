import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";
import { icon } from "./images.jsx";

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://clockworkjava.pl/books.php")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBooks(data);
      });
  }, []);


  return (
    <React.StrictMode>
      <div id="created-by-react">
        <div className="heading">
          <img src={icon} className="icon" alt="" />
          <h1>BIBLIOTEKARZ</h1>
        </div>
        <Add books={books} setBooks={setBooks} />
      </div>
      <div id="bookList">
        <Inventory books={books} />
      </div>

    </React.StrictMode >
  )
};



ReactDOM.render(<App />, document.getElementById("root"));
