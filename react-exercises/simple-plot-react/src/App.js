import React from 'react';
import './App.css';
import LineGraph from './PlotEngine/LineGraph/LineGraph'

function App() {
  const y_data = [
    [-200, 100, 220, 40, -30, -50, 60, 88],
    [-110, 210, 130, 120, -158, -100, 90, 98],
    [200, -100, -200, -40, 30, 50, -60, -88]
  ];
  const [counter, setCounter] = React.useState(0)
  const [y_axis_data, setYData] = React.useState(y_data)
  const [colors, setColor] = React.useState(['red', 'green', 'blue'])
  const descriptors = ['Russia', 'mangolia', 'United states']
  const x_axis = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'];

  const onDataAdded = () => {
    if (counter === 0) {
      setYData([...y_axis_data,
      [-130, 190, 230, 320, -158, -100, 140, 98]
      ])
      setColor([...colors, 'orange'])
      setCounter(counter + 1)
    } else if (counter === 1) {
      setYData([...y_axis_data,
      [-190, 190, 280, 380, -15, -150, 190, 198]
      ])
      setColor([...colors, 'pink'])
      setCounter(counter+1)
    }
  }

  const onDataRemoved = () =>{
    setCounter(0)
    setYData([y_axis_data[0], y_axis_data[1]])
    setColor([colors[0], colors[1]])
  }

  return (
    <div className="App">
      <LineGraph y_data={y_axis_data}
        x_axis={x_axis}
        colors={colors}
      >
        <LineGraph.Title title={"Sales data by country"} styles={{ color: "green", position: "absolute", backgroundColor: "wheat", top: 0, padding: '8px', }} />
        <LineGraph.Descriptor descriptors={descriptors} colors={colors} />

      </LineGraph>
      <button onClick={onDataAdded} >Add data</button>
      <button onClick={onDataRemoved} >Remove data</button>
    </div>
  );
}

export default App;
