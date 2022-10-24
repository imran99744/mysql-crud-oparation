import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Update() {
  const [book, setBook] = useState({
    title: "title",
    desc: "desc",
    price: "price",
    cover: "cover",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[3];

  // console.log(location.pathname.split("/")[2])

  const handelChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/books/${bookId}`, book);

      navigate("/");
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="form">
      <h1>Update The Book</h1>
      <input
        type="text"
        placeholder="Book title"
        onChange={handelChange}
        name="title"
      />
      <textarea
        row={5}
        type="text"
        placeholder="Book desc"
        onChange={handelChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Book price"
        onChange={handelChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Book cover"
        onChange={handelChange}
        name="cover"
      />
      <button className="formButton" onClick={handelClick}>
        Update
      </button>
    </div>
  );
}

export default Update;
