import React, { Component } from "react";
import "./Countries.css";
import { getAllCountries } from "country-state-cities-module";
import right from "../image/right-arrow.svg";
import { Link } from "react-router-dom";
class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      error: "",
    };
  }

  componentDidMount = () => {
    /*  const data = await getAllCountries();
    console.log(data); */
    getAllCountries()
      .then((data) => {
        if (data.status === 1) {
          this.setState({ countries: data.message });
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.message });
      });
  };
  componentWillUnmount = () => {};

  render() {
    return (
      <div className="container countries-div">
        <table className="table-1">
          <thead>
            <tr className="table-row-1">
              <p>Countries</p>
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
            {this.state.countries.length > 0 ? (
              <tr>
                <div>
                  {this.state.countries.map((c) => (
                    <p key={c.name} className="countries-p">
                      {c.emoji}
                      <span> {c.name}</span>
                      <span className="iso">{c.iso2}</span>
                      <Link to={`/${c.name}`}>
                        <img src={right} alt="details" width="22" />
                      </Link>
                    </p>
                  ))}
                </div>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Countries;
