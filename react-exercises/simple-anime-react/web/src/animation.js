import React, { Component } from "react";

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.show_animation = false;
    this.bounce_property = {};
  }

  bounce() {
    if (!!this.show_animation) {
      this.show_animation = false;
      return;
    }

    this.show_animation = true;
    let container = document.getElementById(this.props.id);
    let marginBottom = 300;
    let speed = 0;
    let direction = -1;

    const showAnimation = () => {
      if (direction === -1) {
        speed += 6;
      } else {
        speed -= 6;
      }
      marginBottom = marginBottom + speed * direction;
      marginBottom = marginBottom < 0 ? 0 : marginBottom;
      container.style["margin-bottom"] = marginBottom + "px";

      if (marginBottom <= 0) {
        direction = 1;
      }
      if (speed <= 0) {
        direction = -1;
      }

      if (marginBottom <= 0 && speed <= 0) {
        this.show_animation = false;
      }

      //loop and exit condition
      if (this.show_animation) {
        requestAnimationFrame(showAnimation);
      } else {
        return;
      }
    };

    requestAnimationFrame(showAnimation);
  }

  fadeIn() {
    if (!!this.show_animation) {
      this.show_animation = false;
      return;
    }

    this.show_animation = true;
    let container = document.getElementById(this.props.id);
    let opacity = 0;

    const showAnimation = () => {
      container.style.opacity = opacity;
      opacity += 0.009;
      //loop and exit condition

      if (opacity >= 1) {
        this.show_animation = false;
        container.style.opacity = 1;
      }
      if (this.show_animation) {
        requestAnimationFrame(showAnimation);
      } else {
        return;
      }
    };

    requestAnimationFrame(showAnimation);
  }

  fadeOut() {
    if (!!this.show_animation) {
      this.show_animation = false;
      return;
    }

    this.show_animation = true;
    let container = document.getElementById(this.props.id);
    let opacity = 1;

    const showAnimation = () => {
      container.style.opacity = opacity;
      opacity -= 0.009;
      //loop and exit condition

      if (opacity <= 0) {
        this.show_animation = false;
        container.style.opacity = 1;
      }
      if (this.show_animation) {
        requestAnimationFrame(showAnimation);
      } else {
        return;
      }
    };

    requestAnimationFrame(showAnimation);
  }

  slideUpAndBack() {
    if (!!this.show_animation) {
      this.show_animation = false;
      return;
    }

    this.show_animation = true;
    let container = document.getElementById(this.props.id);
    // container.style["position"] = "relative";
    let marginBottom = 0;
    let speed = 0;
    let direction = 1;
    // let acceleration=5;

    const showAnimation = () => {
      marginBottom = marginBottom + 30 * direction;
      container.style["margin-bottom"] = marginBottom + "px";

      if (marginBottom >= 300) {
        direction = -1;
      }

      if (marginBottom <= 0 && direction == -1) {
        this.show_animation = false;
      }

      //loop and exit condition
      if (this.show_animation) {
        requestAnimationFrame(showAnimation);
      } else {
        return;
      }
    };

    requestAnimationFrame(showAnimation);
  }

  pulse() {
    if (!!this.show_animation) {
      this.show_animation = false;
      return;
    }

    this.show_animation = true;
    let container = document.getElementById(this.props.id);
    // container.style["position"] = "absolute";
    let marginBottom = 0;
    let height = +container.style["height"].split("px")[0];
    let width = +container.style["width"].split("px")[0];
    let direction = 1;
    // let acceleration=5;

    const showAnimation = () => {
      marginBottom = marginBottom + 5 * direction;
      container.style["width"] = width + marginBottom + "px";
      container.style["height"] = height + marginBottom + "px";

      if (marginBottom + height >= 300) {
        direction = -1;
      }

      if (marginBottom <= 0 && direction == -1) {
        this.show_animation = false;
      }

      //loop and exit condition
      if (this.show_animation) {
        requestAnimationFrame(showAnimation);
      } else {
        return;
      }
    };

    requestAnimationFrame(showAnimation);
  }
  render() {
    return this.props.children;
  }
}
