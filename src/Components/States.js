import { getStatesByCountry } from "country-state-cities-module";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import right from "../image/right-arrow.svg";

class States extends Component {
  constructor(props) {
    super(props);

    this.state = {
      States: [],
      error: "",
    };
  }
  componentDidMount = () => {
    getStatesByCountry(this.props.match.params.country)
      .then((data) => {
        this.setState({ States: data.message });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  componentWillUnmount = () => {};

  render() {
    return (
      <div className="container-fluid countries-div">
        <table className="table-1">
          <thead>
            <tr className="table-row-1">
              <p>{this.props.match.params.country}</p>
            </tr>
            <tr className="table-row-2">
              {" "}
              <input
                type="text"
                placeholder="Search.."
                className="search-countries "
              />
            </tr>
          </thead>
          <tbody>
            {this.state.States.length > 0 ? (
              <div>
                {this.state.States.map((s) => (
                  <p key={s.name} className="countries-p">
                    {s.name}
                    <span className="iso">{s.state_code}</span>
                    <Link to={`/${s.name}`}>
                      <img src={right} alt="details" width="22" />
                    </Link>
                  </p>
                ))}
              </div>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(States);

//Life cycle of a class component
// constructor()
// render()
//componentDidMount()
//componentWillUnmount()
