import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0 Get multiple documents from a collection
    db.collection("todos")
      .get()
      .then((querySnapshot) => {
        console.log("querySnapshot: ", querySnapshot);
        const todos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todos);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>React Firebase</p>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}
