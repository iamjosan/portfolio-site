import React from "react";
import { Preloader } from "react-materialize";
import { mNavbar, Footer } from "./components";
import Main from "./Main";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return this.state.loading ? (
      <Preloader className="loading" />
    ) : (
      <div className="load-fade-in">
        {mNavbar}
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
