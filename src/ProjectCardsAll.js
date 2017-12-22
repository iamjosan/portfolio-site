import React from "react";
import { ProjectCard } from "./components";
import { Row } from "react-materialize";
import { myProjects } from "./myProjects";

class ProjectCardsAll extends React.Component {
  render() {
    let allCards = myProjects.map(function(p, i) {
      return (
        <div key={i}>
          <ProjectCard
            image={p.image}
            description={p.description}
            key={i}
            name={p.name}
            code={p.code}
            tech={p.tech}
          />
        </div>
      );
    });
    return (
      <div className="container">
        <Row>{allCards}</Row>
      </div>
    );
  }
}

export default ProjectCardsAll;
