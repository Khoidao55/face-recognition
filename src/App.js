import React, { Component } from "react";
import "./App.css";
import Navigation from "./COMPONENTS/Navigation/Navigation";
import Logo from "./COMPONENTS/Logo/Logo";
import ImageLinkForm from "./COMPONENTS/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./COMPONENTS/FaceRecognition/FaceRecognition";
import SignIn from "./COMPONENTS/SignIn/SignIn";
import Register from "./COMPONENTS/Register/Register";
import tachyons from "tachyons";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "d7a1f28479a4425598606c641d93f0f1",
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  calcFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({
      box: box,
    });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signedout") {
      this.setState({
        isSignedIn: false,
      });
    } else if (route === "home") {
      this.setState({
        isSignedIn: true,
      });
    }
    this.setState({
      route: route,
    });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />{" "}
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
        />{" "}
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <ImageLinkForm
              inputChange={this.onInputChange}
              submitChange={this.onSubmit}
            />{" "}
            <FaceRecognition
              pictureBox={this.state.box}
              imageURLSubmit={this.state.imageURL}
            />{" "}
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}{" "}
      </div>
    );
  }
}

export default App;
