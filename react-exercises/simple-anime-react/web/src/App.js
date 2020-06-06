import React from "react";
import Animation from "./animation";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.animationRef = React.createRef();
  }

  bounce = () => {
    this.animationRef.current.bounce();
  };
  fadeIn = () => {
    this.animationRef.current.fadeIn();
  };
  fadeOut = () => {
    this.animationRef.current.fadeOut();
  };
  slideUpAndBack = () => {
    this.animationRef.current.slideUpAndBack();
  };
  pulse = () => {
    this.animationRef.current.pulse();
  };
  render() {
    return (
      <div
        style={{
          height: "100%",
        }}
      >
        <div
          style={{
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Animation ref={this.animationRef} id="container">
            <div
              id="container"
              style={{
                height: 100,
                width: 100,
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5>Animation</h5>
            </div>
          </Animation>
        </div>
        <div
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ margin: 10 }} onClick={this.bounce}>
            Bounce
          </button>
          <button style={{ margin: 10 }} onClick={this.fadeIn}>
            Fade in
          </button>
          <button style={{ margin: 10 }} onClick={this.fadeOut}>
            Fade out
          </button>
          <button style={{ margin: 10 }} onClick={this.slideUpAndBack}>
            Slide up and back
          </button>
          <button style={{ margin: 10 }} onClick={this.pulse}>
            Pulse
          </button>
        </div>
      </div>
    );
  }
}
