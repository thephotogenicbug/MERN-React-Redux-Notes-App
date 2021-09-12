import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {


  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);


  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notezipper</h1>
              <p className="subtitle">One Place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton btn btn-primary">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton btn btn-outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
