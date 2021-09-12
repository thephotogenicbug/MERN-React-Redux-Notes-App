import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const FetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");

    setNotes(data);
  };
  console.log(notes);

  useEffect(() => {
    FetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back NaveenKumar">
      <Link to="/createnote">
        <Button
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
          className="btn btn-primary"
        >
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 20,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button className="btn btn-primary" href={`/note/${note._id}`}>
                  Edit
                </Button>
                <Button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Card.Body>
              <h4>
                <Badge className="text-white btn">
                  Category - {note.category}
                </Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">Created on - date</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
