import React from "react";
import "./App.css";
import BarGraph from "./PlotEngine/LineGraph/BarGraph";

function App() {
  const y_data = [
    [-200, 100, 220, 40, -30, -50, 60, 88],
    [-110, 210, 130, 120, -158, -100, 90, 98],
    [200, -100, -200, -40, 30, 50, -60, -88],
  ];
  const colors = ["red", "green", "blue"];
  const descriptors = ["Russia", "mangolia", "United states"];
  const x_axis = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug"];
  return (
    <div className="App">
      <BarGraph y_data={y_data} x_axis={x_axis} colors={colors}>
        <BarGraph.Title
          title={"Sales data by country"}
          styles={{
            color: "green",
            position: "absolute",
            backgroundColor: "wheat",
            top: 0,
            padding: "8px",
          }}
        />
        <BarGraph.Descriptor descriptors={descriptors} colors={colors} />
      </BarGraph>
    </div>
  );
}

export default App;
