import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreateNote from "./screens/CreateNote/CreateNote";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import SingleNote from "./screens/SingleNote";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/mynotes"
          component={() => <MyNotes search={search} />}
        />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={SingleNote} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
