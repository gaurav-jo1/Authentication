import React, { useState, useEffect } from "react";
import useAxios from "../utils/useAxios";

import "./HomePage.scss";

const HomePage = () => {
  let [notes, setNotes] = useState([]);

  let api = useAxios();

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let getNotes = async () => {
    let response = await api.get("/api/notes/");

    if (response.status === 200) {
      setNotes(response.data);
    }
  };

  return (
    <div className="HomePage_container">
      <p>You are logged to the home page</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
