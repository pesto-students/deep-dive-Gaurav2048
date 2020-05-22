import React from "react";
import Descriptor from "./Descriptor";
import Title from "./Title";

const BarGraph = ({ y_data, x_axis, colors, ...props }) => {
  const [horizontal_segments, set] = React.useState(0);

  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    const { max, min } = getMaxMin(y_data);

    let calc_horizontal_segments = 0;

    if (max > min) {
      calc_horizontal_segments = (max / 50 + 1) * 2;
    } else {
      calc_horizontal_segments = (min / 50 + 1) * 2;
    }
    set(calc_horizontal_segments);

    // horizontal lines

    for (let i = 0; i < calc_horizontal_segments; i += 1) {
      ctx.font = "italic 9px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      ctx.fillText(
        max + 50 - i * 50,
        10,
        i * (canvas.height / calc_horizontal_segments)
      );

      ctx.moveTo(25, i * (canvas.height / calc_horizontal_segments));
      ctx.lineTo(canvas.width, i * (canvas.height / calc_horizontal_segments));
      ctx.strokeStyle = "#f7f7f7";
      ctx.lineWidth = 0.1;
      ctx.stroke();
    }

    // vertical lines

    const y_length = x_axis.length + 1;

    for (let i = 1; i < y_length; i += 1) {
      ctx.font = "italic 9px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      ctx.fillText(
        x_axis[i - 1],
        i * (canvas.width / y_length),
        canvas.height - 9
      );

      ctx.moveTo(i * (canvas.width / y_length), 0);
      ctx.lineTo(i * (canvas.width / y_length), canvas.height - 18);
      ctx.strokeStyle = "#f7f7f7";
      ctx.lineWidth = 0.1;
      ctx.stroke();
    }

    // marking (0,0)

    ctx.font = " 9px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#AAAAAA";
    ctx.fillText("(0,0)", canvas.width / 2 + 15, canvas.height / 2 - 15);

    ctx.moveTo(18, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 0.1;
    ctx.stroke();

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 0.1;
    ctx.stroke();

    // draw line
  }, []);

  const drawGraph = (y_axis, color, shift, width, index) => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const y_length = x_axis.length + 1;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    let shiftSymmetry = 50 / 2 - width / 2;
    let initial = canvas.width / y_length - shiftSymmetry;

    ctx.moveTo(initial + shift, canvas.height / 2);
    ctx.lineTo(
      initial + shift,
      canvas.height / 2 -
        (y_axis[0] / 50) * (canvas.height / horizontal_segments)
    );

    for (let i = 1, j = 2; i < y_axis.length + 1; i++, j++) {
      ctx.moveTo(
        j * (canvas.width / y_length) - shiftSymmetry + shift,
        canvas.height / 2
      );
      ctx.lineTo(
        j * (canvas.width / y_length) - shiftSymmetry + shift,
        canvas.height / 2 -
          (y_axis[j - 1] / 50) * (canvas.height / horizontal_segments)
      );
    }

    ctx.stroke();
  };

  const getMaxMin = (y_data) => {
    let max = 0,
      min = 0;
    for (let i = 0; i < y_data.length; i++) {
      for (let j = 0; j < y_data[i].length; j++) {
        if (y_data[i][j] >= 0) {
          if (y_data[i][j] > max) max = y_data[i][j];
        } else {
          if (y_data[i][j] < 0) {
            if (y_data[i][j] < min) min = y_data[i][j];
          }
        }
      }
    }

    //180 /50 -> 50*4
    max = parseInt(max / 50);
    max = (max + 1) * 50;

    min = parseInt(min / 50);
    min = (min + 1) * 50;

    return { max, min };
  };

  React.useEffect(() => {
    let width = 50 / y_data.length;
    let shift = 0;
    for (let i = 0; i < y_data.length; i++) {
      drawGraph(y_data[i], colors[i], shift, width, i);
      shift = shift + width;
    }
  }, [horizontal_segments]);

  return (
    <>
      <canvas
        ref={ref}
        width={window.innerWidth / 1.5}
        height={window.innerHeight / 1.5}
        style={{
          border: "2px #AAAAAA solid",
          overflow: "hidden",
          marginTop: "20px",
        }}
      />
      {props.children}
    </>
  );
};
BarGraph.Descriptor = Descriptor;
BarGraph.Title = Title;
export default BarGraph;
