import React, { Component } from "react";
import Axios from "axios";
import Slide from "react-reveal/Slide";

import "./Home.css";
import HeaderStatus from "../Components/HeaderStatus/HeaderStatus";
import AllStates from "../Components/AllStates/AllStates";
import Districts from "../Components/Districts/Districts";
import Loader from "../Components/Loader/Loader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      statesData: [],
      showDistrict: false,
      districtData: "",
      searchingState: "",
      isMobileScreen: false,
      loading: true,
    };
  }
  componentDidMount() {
    Axios.get("https://covid19-api-godwin.herokuapp.com/v1/india")
      .then((data) => {
        let dummyCountryData = [];
        let dummyStatesData = [];
        for (let key in data.data.data.statewise) {
          if (data.data.data.statewise[key].statecode !== "TT") {
            dummyStatesData.push({
              ...data.data.data.statewise[key],
            });
          } else {
            dummyCountryData.push({
              ...data.data.data.statewise[key],
            });
          }
        }
        this.setState({
          countryData: dummyCountryData,
          statesData: dummyStatesData,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    if (window.innerWidth <= 500) {
      this.setState({ isMobileScreen: true });
    }
  }
  showDistHandler = (state) => {
    this.setState({ showDistrict: !this.state.showDistrict, distict: state });
    Axios.get("https://covid19-api-godwin.herokuapp.com/v1/india/district")
      .then((result) => {
        for (let key in result.data.data) {
          if (key === state) {
            this.setState({
              districtData: result.data.data[key],
              searchingState: state,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  goBackHandler = () => {
    this.setState({ showDistrict: !this.state.showDistrict });
  };
  render() {
    return (
      <div className="home-layout">
        <div className="row">
          <div className="col-md-12 header-status-home">
            <Slide bottom>
              <HeaderStatus headerData={this.state.countryData} />
            </Slide>
          </div>
          {this.state.showDistrict ? (
            <div className="col-md-12 districts-home">
              <Slide bottom>
                <Districts
                  state={this.state.searchingState}
                  distData={this.state.districtData}
                  goBack={this.goBackHandler}
                  mobileScreen={this.state.isMobileScreen}
                  loadingScreen={this.state.loading}
                />
              </Slide>
            </div>
          ) : (
            <div className="col-md-12 all-states-home">
              {this.state.loading ? (
                <Loader />
              ) : (
                <Slide bottom>
                  <AllStates
                    statesData={this.state.statesData}
                    distHandler={this.showDistHandler}
                    mobileScreen={this.state.isMobileScreen}
                    loadingScreen={this.state.loading}
                  />
                </Slide>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
