import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, CardTitle, Modal, Navbar } from "react-materialize";
import { Grid, Image } from "react-bootstrap";
import Prism from "prismjs";

export function Avatar() {
  return (
    <div className="center avatar circle">
      <Image src="/final-1-smaller.jpg" className="responsive-img" />
    </div>
  );
}
export function ProjectCard(props) {
  return (
    <Col s={12} m={4}>
      <Card
        className="small"
        header={<CardTitle reveal image={props.image} />}
        title={props.name}
        reveal={
          <ProjectCardReveal
            name={props.name}
            description={props.description}
            code={props.code}
            tech={props.tech}
          />
        }
      />
    </Col>
  );
}
function ProjectCardReveal(props) {
  return (
    <div>
      <p>
        <strong>Technology: </strong>
        {props.tech}
      </p>
      <p>
        <strong>Description</strong>
        <br />
        {props.description}
      </p>
      <ProjectCardModal name={props.name} code={props.code} />
    </div>
  );
}
export function ProjectCardModal(props) {
  return (
    <Modal header={props.name} trigger={<a href="#">View Code</a>}>
      <pre className="language-javascript" data-src={props.code} />
    </Modal>
  );
}
export const Footer = () => (
  <div id="my-footer">
    <p>
      <small>Made with React and Materialize</small>
    </p>
  </div>
);
export const Header = () => (
  <div className="white jumbotron" id="header">
    <Grid>
      <Row>
        <Col s={12} m={3} offset="m2">
          <Avatar />
        </Col>
        <Col s={12} m={6} className="text-center-small-screens">
          <h5> Josan Iracheta</h5>
          <p>
            Born and raised in Los Angeles, CA. Been coding for over 5 years.
            When I am not coding, I am playing my guitar.
          </p>
          <p>
            <a
              className="fa fa-github btn"
              href="https://github.com/iamjosan"
              target="_blank"
            />&nbsp;
            <a
              className="fa fa-stack-overflow btn"
              href="https://stackoverflow.com/users/2481559/josan-iracheta"
              target="_blank"
            />&nbsp;
            <a
              className="fa fa-envelope btn"
              href="mailto:josan.iracheta@gmail.com"
              target="_blank"
            />
          </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

const navLinks = (
  <span>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </span>
);
export const mNavbar = (
  <Navbar right children={navLinks} options={{ closeOnClick: true }} />
);
