import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  console.log(notes);

  const history = useHistory();

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, successCreate, history, userInfo]);

  return (
    <MainScreen title={`Welcome Back ${userInfo.name}`}>
      <Link to="/createnote">
        <Button
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
          className="btn btn-primary"
        >
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.reverse.map((note) => (
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
                <footer className="blockquote-footer">
                  Created on - {""}
                  <cite title="Source Title">
                    {note.createdAt.substring(0, 10)}
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
