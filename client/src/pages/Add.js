import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Add() {
  const [book, setBook] = useState({
    title: "title",
    desc: "desc",
    price: "price",
    cover: "cover",
  });

  const navigate = useNavigate()

  const handelChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(book);

  const handelClick = async (e) => {
     e.preventDefault()

     try {
      await axios.post('http://localhost:8080/books', book)
      navigate("/")
     } catch (error) {
      console.log(error)
     }
  }

  return (
    <div className="form">
      <h1>Add New Books</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handelChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handelChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handelChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handelChange}
        name="cover"
      />
      <button className="formButton" onClick={handelClick}>Add Books</button>
    </div>
  );
}

export default Add;
