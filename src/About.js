import React from "react";
import { Col, Row } from "react-materialize";
import { Avatar } from "./components";

function About() {
  return (
    <div>
      <div className="white jumbotron" id="header">
        <Avatar className="center" />
        <div className="container">
          <Row>
            <Col s={12} m={6} offset="m3">
              <h4>A Bit About Myself</h4>
              <p>
                My name is Josan Iracheta. I was born and raised in the Latino
                side of Los Angeles, CA. My first language was Spanish and I
                still speak it fluently today.
                <br />
                <br />
                Since I can remember, I have always been creating things. As a
                child, I was really into drawing and painting. In my teen years,
                I was introduced to music and started playing the guitar. I have
                been playing ever since.
                <br />
                <br />
                After high school, I went on to study music. It was not until
                shortly after music school that I had an interest in coding. It
                all started with my first crappy website and it never stopped.
                <br />
                <br />
                From that first website, I continued to push myself and my
                skills. After five years of coding, debugging, and
                pulling-my-hair-out, I have the experience, knowledge, and
                skills to solve any problem that I encounter; with code, of
                course.
                <br />
                <br />
                You can get in contact with me by using the following email
                address: josan.iracheta@gmail.com
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default About;
