import React from "react";
// import { Dimensions, Stylesheet, ScrollView, ImageBackground, View} from "react-native";
import Weather from "./components/weather";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url("https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg")`, width:'100%', height:'100%',
      }} className="AppBody">
        <h1 style={{fontSize: '40px',
    color: 'rgb(255, 192, 0)', textAlign:'center'}} className="WeatherForecastMainHeading">WEATHER FORECAST</h1>
      <Router>
        <div className="wrapper">
          <Link to='/weekly'><button style={{marginTop: '30px', marginBottom: '30px',}}>Weather By Location</button></Link>
              </div>
              <div className="row">
                <Switch>
                <Route path="/weekly" component={Weather} />
                </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
