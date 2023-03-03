import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {

  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://content.newtonschool.co/v1/pr/main/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 10)));
  }, []);

  return (
    <div id="main">
    {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <h3>{comment.name}</h3>
          <p className="email">{comment.email}</p>
          <p className="body">{comment.body}</p>
        </div>
      ))}
    </div>
  )
}


export default App;

=========



import React, { useState, useEffect } from "react";
import '../styles/App.css';
import ReactDOM from "react-dom";

const App = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://content.newtonschool.co/v1/pr/main/comments")
        .then((response) => response.json())
        .then((data) => setComments(data.slice(0, 10)));
    }, []);
  return (
     <div id="main">
        {comments.map((comment) => (
            <article key={comment.id}>
                <name><h3>{comment.name}</h3></name>
                <email>{comment.email}</email>
                <body>{comment.body}</body>
            </article>
        ))}
    </div>
  )
}


export default App;
